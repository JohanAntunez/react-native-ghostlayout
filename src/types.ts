import type { DimensionValue, StyleProp, ViewStyle } from 'react-native';

export type GhostTheme = {
  boneColor: string;
  speed: number;
};

export type GhostLayoutProps = {
  loading: boolean;
  /** The skeleton tree composed from Ghost* components. */
  skeleton: React.ReactNode;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  boneColor?: string;
  /** Duration of one pulse half-cycle in ms. Default: 700. */
  speed?: number;
};

export type GhostBoxProps = {
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
};

export type GhostTextProps = {
  /** Default width for each line. */
  width?: DimensionValue;
  height?: number;
  lines?: number;
  /**
   * Per-line widths. When provided, takes precedence over `lines` and `width`.
   * The last line defaults to 60% if not specified and there are multiple lines.
   */
  widths?: DimensionValue[];
  /** Vertical gap between lines. Only applies when lines > 1. */
  gap?: number;
  style?: StyleProp<ViewStyle>;
};

export type GhostImageProps = {
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
};

export type GhostCircleProps = {
  size: number;
  style?: StyleProp<ViewStyle>;
};
