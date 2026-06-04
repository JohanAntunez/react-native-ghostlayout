# react-native-ghostlayout

Skeleton loaders for React Native built by composing purpose-built components — one for text, one for images, one for circles, and so on. No automatic layout detection, no magic: you design the skeleton the same way you design the real UI.

Works with Expo and bare React Native. No native code required.

<img src="https://github.com/user-attachments/assets/1fb7d0fc-4fa3-404e-8051-25be0bc686ea" width="280" />

---

## Installation

```sh
npm install react-native-ghostlayout
# or
yarn add react-native-ghostlayout
```

---

## Quick start

Define a skeleton component that mirrors the structure of your real UI, then pass it to `GhostLayout`:

```tsx
import {
  GhostLayout,
  GhostCircle,
  GhostText,
  GhostImage,
} from 'react-native-ghostlayout';

function ArticleCardSkeleton() {
  return (
    <View style={styles.card}>
      <GhostImage height={180} borderRadius={12} />

      <View style={{ flexDirection: 'row', gap: 12, padding: 16 }}>
        <GhostCircle size={40} />
        <View style={{ flex: 1, gap: 6 }}>
          <GhostText width="55%" />
          <GhostText width="35%" height={12} />
        </View>
      </View>

      <GhostText lines={3} style={{ paddingHorizontal: 16 }} />
    </View>
  );
}

function ArticleCard({ loading, data }) {
  return (
    <GhostLayout loading={loading} skeleton={<ArticleCardSkeleton />}>
      {/* Your real content here */}
      <RealCard data={data} />
    </GhostLayout>
  );
}
```

All bones inside a `GhostLayout` pulse in sync automatically.

---

## Components

### `GhostLayout`

The wrapper that switches between the skeleton and real content.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loading` | `boolean` | — | When `true`, renders the skeleton. When `false`, renders children. |
| `skeleton` | `ReactNode` | — | The skeleton tree, composed from `Ghost*` components. |
| `children` | `ReactNode` | — | The real content shown when `loading` is `false`. |
| `boneColor` | `string` | `'#E0E0E0'` | Color of the skeleton bones. |
| `speed` | `number` | `700` | Duration of one pulse half-cycle in milliseconds. |
| `style` | `ViewStyle` | — | Style applied to the container. |

---

### `GhostText`

One or more text-line placeholders.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `lines` | `number` | `1` | Number of lines to render. |
| `width` | `DimensionValue` | `'100%'` | Default width for each line. |
| `widths` | `DimensionValue[]` | — | Per-line widths. Takes precedence over `width`. The last line falls back to `'60%'` if not specified. |
| `height` | `number` | `14` | Height of each line in dp. |
| `gap` | `number` | `8` | Vertical space between lines (only when `lines > 1`). |
| `style` | `ViewStyle` | — | |

```tsx
// Single line
<GhostText width="70%" />

// Multiple lines, last one shorter
<GhostText lines={3} />

// Custom width per line
<GhostText widths={['100%', '100%', '60%']} />
```

---

### `GhostImage`

A rectangular placeholder for images, thumbnails, and banners.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `DimensionValue` | `'100%'` | |
| `height` | `DimensionValue` | `200` | |
| `borderRadius` | `number` | `0` | |
| `style` | `ViewStyle` | — | |

```tsx
<GhostImage height={200} borderRadius={12} />
```

---

### `GhostCircle`

A circular placeholder for avatars and icons.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | — | Width and height in dp. |
| `style` | `ViewStyle` | — | |

```tsx
<GhostCircle size={44} />
```

---

### `GhostBox`

A generic rectangular bone for anything that doesn't fit the other components.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `DimensionValue` | `'100%'` | |
| `height` | `DimensionValue` | `40` | |
| `borderRadius` | `number` | `4` | |
| `style` | `ViewStyle` | — | |

```tsx
<GhostBox width={120} height={32} borderRadius={8} />
```

---

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT © [JohanAntunez](https://github.com/JohanAntunez)
