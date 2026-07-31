/* ============================================================
   Spotter — interactions
   (The scrubber is static markup in index.html — no JS needed.)
   ============================================================ */

/* ---------- copy download link ---------- */
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(() => true, () => legacyCopy(text));
  }
  return Promise.resolve(legacyCopy(text));
}

function legacyCopy(text) {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch (_) {
    return false;
  }
}

document.querySelectorAll(".dl__copy").forEach((btn) => {
  let timer;
  btn.addEventListener("click", async () => {
    if (!btn.dataset.copy) return;
    const ok = await copyText(btn.dataset.copy);
    if (!ok) return;
    btn.classList.add("is-copied");
    clearTimeout(timer);
    timer = setTimeout(() => btn.classList.remove("is-copied"), 1400);
  });
});
