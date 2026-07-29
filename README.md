# Spotter — Landing Page

Marketing site for **Spotter**, a native macOS menu-bar app that keeps your
Hyperliquid and Trade.xyz PnL in the corner of your eye — one glance, always
current, no chart to overthink.

Built as a single, self-contained static page (no build step, no dependencies).

## Structure

```
.
├── index.html      # markup for all sections
├── styles.css      # all styling (desktop + responsive)
├── app.js          # scrubber rendering + copy-to-clipboard
└── assets/         # SVG icons/logos and PNG backgrounds (exported from Figma)
```

## Sections

1. **Hero** — full-viewport forest backdrop, a macOS menu-bar mockup inside a
   frosted band, and the "Spotter. See less. Miss nothing." headline.
2. **Conviction in the corner of your eye** — short product summary + a card
   showing the app screenshot with the Hyperliquid / Trade.xyz footer.
3. **Features** — a dark "Dynamic PnL Simulation" panel joined to two tiles,
   "Private by design" and "No distraction".
4. **Installation guide** — a GitHub download box and the step-by-step flow
   (download → move to Applications → open the first time → start tracking).
5. **From @roark0x** — a short author note.




## License

All rights reserved unless noted otherwise.
