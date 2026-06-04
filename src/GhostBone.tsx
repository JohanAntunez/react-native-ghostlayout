import {
  Animated,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { useGhost } from './context/GhostContext';

type GhostBoneProps = {
  style?: StyleProp<ViewStyle>;
};

/** Internal base component. All Ghost* primitives use this. */
export function GhostBone({ style }: GhostBoneProps) {
  const { opacity, theme } = useGhost();

  return (
    <Animated.View
      style={[
        styles.base,
        { backgroundColor: theme.boneColor },
        style,
        { opacity },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 4,
  },
});
