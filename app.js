/* ============================================================
   Spotter — interactions
   ============================================================ */

/* ---------- scrubber (Dynamic PnL Simulation) ---------- */
const TICK_COUNT = 33;
const TICK_GAP = 18;
const TICK_X0 = 15;
const SCRUB_W = 608; // design space for the tick spread; rendered in %

function buildScrubber(el) {
  const center = (TICK_COUNT - 1) / 2;
  const pct = (x) => (x / SCRUB_W) * 100 + "%";

  for (let i = 0; i < TICK_COUNT; i++) {
    const tick = document.createElement("span");
    tick.className = "scrubber__tick";
    const tall = i % 5 === 1;
    const near = 1 - Math.abs(i - center) / center;
    const op = tall ? 0.15 + 0.4 * near : 0.05 + 0.18 * near;
    tick.style.left = pct(TICK_X0 + i * TICK_GAP);
    tick.style.height = (tall ? 3.19 : 1.74) + "cqi";
    tick.style.background = `rgba(255,255,255,${op.toFixed(2)})`;
    el.appendChild(tick);
  }

  const labels = [
    [6, "−10%"],
    [16, "0"],
    [26, "+10%"],
  ];
  for (const [i, text] of labels) {
    const lab = document.createElement("span");
    lab.className = "scrubber__label";
    lab.textContent = text;
    lab.style.left = pct(TICK_X0 + i * TICK_GAP + 1);
    el.appendChild(lab);
  }

  const head = document.createElement("span");
  head.className = "scrubber__head";
  head.style.background = el.dataset.playheadColor || "#f0b052";
  head.style.left = (parseFloat(el.dataset.playhead) || 0.5) * 100 + "%";
  el.appendChild(head);
}

document.querySelectorAll("[data-scrubber]").forEach(buildScrubber);

/* ---------- copy download link ---------- */
document.querySelectorAll(".dl__copy").forEach((btn) => {
  btn.addEventListener("click", async () => {
    if (!btn.dataset.copy) return;
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.classList.add("is-copied");
      setTimeout(() => btn.classList.remove("is-copied"), 1200);
    } catch (_) { /* clipboard unavailable */ }
  });
});
