import { GhostBone } from './GhostBone';
import type { GhostBoxProps } from './types';

/** Generic rectangular bone. Use when Image/Text/Circle don't fit. */
export function GhostBox({
  width = '100%',
  height = 40,
  borderRadius = 4,
  style,
}: GhostBoxProps) {
  return <GhostBone style={[{ width, height, borderRadius }, style]} />;
}
