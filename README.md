<sub>*Hero made by [@ybouane](https://x.com/ybouane).*</sub>
<p align="center">
  <img src="https://crazygl.com/heroes/hero-cursor-shadow-text/banner-full.png" alt="Cursor Shadow Text" width="640">
</p>

# @crazygl/hero-cursor-shadow-text

The heading casts a real drop shadow whose direction tracks the cursor — like a single fixed light moving across the room.

## Demo
[Cursor Shadow Text](https://crazygl.com/hero/cursor-shadow-text)

## Install

```bash
npm install @crazygl/hero-cursor-shadow-text
```

## Usage

```tsx
import CursorShadowText from '@crazygl/hero-cursor-shadow-text';

export default function Hero() {
  return (
    <CursorShadowText
      heading="follow the light"
      shadowColor="#5b8def"
      maxOffset={40}
      blur={12}
    />
  );
}
```

## Customise

- **Content** — `heading` text.
- **Shadow** — `shadowColor`, `maxOffset` (how far the shadow throws at the screen edges), `blur`.
- **Typography** — `textColor`, `fontSize`, `headingFontFamily` (Google Font), `headingFontWeight`.
- **Backdrop** — `transparentBackground` toggle and `bgColor`.

## Best for

- Minimal, interactive landing headlines that reward a moving cursor.
- Portfolios and agency sites wanting a tactile, playful headline.
- Product launches where a single bold word should feel physical and lit.



This hero is part of [CrazyGL](https://crazygl.com), a collection of production-ready WebGL, canvas, 3D, and typography effects. Every CrazyGL hero ships with an agent-ready `SKILL.md` file that helps developers and coding agents adapt the effect into custom landing pages and interactive experiences.
