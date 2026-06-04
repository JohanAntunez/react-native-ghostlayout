import { StyleSheet, View } from 'react-native';

import { GhostBone } from './GhostBone';
import type { GhostTextProps } from './types';

const DEFAULT_HEIGHT = 14;
const DEFAULT_GAP = 8;

export function GhostText({
  width = '100%',
  height = DEFAULT_HEIGHT,
  lines = 1,
  widths,
  gap = DEFAULT_GAP,
  style,
}: GhostTextProps) {
  const lineWidths =
    widths ??
    Array.from({ length: lines }, (_, i) =>
      i === lines - 1 && lines > 1 ? '60%' : width
    );

  if (lineWidths.length === 1) {
    return (
      <GhostBone
        style={[
          { width: lineWidths[0], height, borderRadius: height / 2 },
          style,
        ]}
      />
    );
  }

  return (
    <View style={[styles.column, { gap }, style]}>
      {lineWidths.map((w, i) => (
        <GhostBone
          key={i}
          style={{ width: w, height, borderRadius: height / 2 }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
});
