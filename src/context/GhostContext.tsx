import { createContext, useContext } from 'react';
import type { Animated } from 'react-native';

import type { GhostTheme } from '../types';

type GhostContextValue = {
  opacity: Animated.Value;
  theme: GhostTheme;
};

export const GhostContext = createContext<GhostContextValue | null>(null);

export function useGhost(): GhostContextValue {
  const ctx = useContext(GhostContext);

  if (!ctx) {
    throw new Error(
      'Ghost components (GhostText, GhostImage, etc.) must be wrapped inside <GhostLayout>.'
    );
  }

  return ctx;
}
