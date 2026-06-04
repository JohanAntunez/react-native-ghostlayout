import { GhostBone } from './GhostBone';
import type { GhostCircleProps } from './types';

export function GhostCircle({ size, style }: GhostCircleProps) {
  return (
    <GhostBone
      style={[{ width: size, height: size, borderRadius: size / 2 }, style]}
    />
  );
}
