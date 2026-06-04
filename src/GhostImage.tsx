import { GhostBone } from './GhostBone';
import type { GhostImageProps } from './types';

export function GhostImage({
  width = '100%',
  height = 200,
  borderRadius = 0,
  style,
}: GhostImageProps) {
  return <GhostBone style={[{ width, height, borderRadius }, style]} />;
}
