import { useEffect, useMemo, useRef } from 'react';
import { Animated, View } from 'react-native';

import { GhostContext } from './context/GhostContext';
import type { GhostLayoutProps } from './types';

const DEFAULT_BONE_COLOR = '#E0E0E0';
const DEFAULT_SPEED = 700;

export function GhostLayout({
  loading,
  skeleton,
  children,
  style,
  boneColor = DEFAULT_BONE_COLOR,
  speed = DEFAULT_SPEED,
}: GhostLayoutProps) {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    if (!loading) {
      return;
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.95,
          duration: speed,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: speed,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [loading, opacity, speed]);

  const contextValue = useMemo(
    () => ({ opacity, theme: { boneColor, speed } }),
    [opacity, boneColor, speed]
  );

  if (!loading) {
    return <View style={style}>{children}</View>;
  }

  return (
    <GhostContext.Provider value={contextValue}>
      <View style={style}>{skeleton}</View>
    </GhostContext.Provider>
  );
}
