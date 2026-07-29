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

## Running locally

No build required — it's plain HTML/CSS/JS. Serve the folder with any static
server, for example:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. (Opening `index.html` directly via `file://`
works too, but a server is recommended so the fonts and `app.js` load cleanly.)

## Notes

- **Responsive** from wide desktop down to small phones. The hero fills the
  viewport on desktop/tablet (`100dvh`) and switches to a compact layout under
  600px. The two feature tiles sit side-by-side on desktop/tablet and stack
  below 640px. The mockup cards scale proportionally using CSS container-query
  units (`cqi`), so text and layout shrink together.
- **Fonts:** Instrument Sans, Geist Mono, and Inter are loaded from Google Fonts.
- **Menu-bar / number mockups** (`menubar-hero.svg`, `menubar-nodistraction.svg`,
  `pnl-value.svg`) are vector exports from Figma; the PnL scrubber is drawn by
  `app.js`.
- The download box's copy button copies the Releases URL
  (`data-copy` on `.dl__copy` in `index.html`) — update it when the real
  release link changes.
- Design source: Figma (HyperTab).

## License

All rights reserved unless noted otherwise.
