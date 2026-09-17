const VOCABULARY = (
  "practice model benchmark prompt context inference latency throughput " +
  "agent tool session pipeline dataset experiment evaluation interface " +
  "structure typography image interaction prototype build code design " +
  "precision iteration observation learning research system "
).split(" ").filter(Boolean);
const GLYPHS = " .:-=+*#%@";
const INTERACTIVE = "a, button, input, textarea, select, label, summary, [role='button'], [role='link'], [contenteditable]:not([contenteditable='false'])";
const FRAME_MS = 1000 / 24;
const RIPPLE_MS = 1800;

function getContext(canvas, options) {
  try {
    return canvas?.getContext("2d", options) ?? null;
  } catch {
    return null;
  }
}

function palette(element) {
  const style = getComputedStyle(element);
  return {
    bg: style.getPropertyValue("--bg").trim() || "#171717",
    text: style.getPropertyValue("--text").trim() || "#f2f0ea",
    accent: style.getPropertyValue("--accent").trim() || "#5b4cff",
    font: style.getPropertyValue("--font-mono").trim() || "ui-monospace, monospace",
  };
}

/** Start the viewport field. The returned function removes all listeners and observers. */
export function initField(canvas, surface = document.body) {
  const ctx = getContext(canvas);
  const base = document.createElement("canvas");
  const baseCtx = getContext(base);
  if (!ctx || !baseCtx || !surface) return () => {};

  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const colors = palette(canvas);
  const font = `11px ${colors.font}`;
  const cells = [];
  const mark = surface.querySelector("img.signature-mark");
  const mask = document.createElement("canvas");
  const maskCtx = getContext(mask, { willReadFrequently: true });
  const markLayer = document.createElement("canvas");
  const markCtx = getContext(markLayer);
  let layoutFrame = 0;
  // Fixed slots keep click activity bounded without allocating during animation.
  const ripples = Array.from({ length: 6 }, () => ({ x: 0, y: 0, born: -Infinity }));
  let rippleSlot = 0;
  let width = 0;
  let height = 0;
  let advance = 7;
  let frame = 0;
  let lastFrame = 0;
  let inView = true;
  let disposed = false;
  let inside = false;
  let pointerX = 0;
  let pointerY = 0;
  let targetX = 0;
  let targetY = 0;
  let pointerStrength = 0;

  function compose() {
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(base, 0, 0, width, height);
    ctx.drawImage(markLayer, 0, 0, width, height);
  }

  function buildMark() {
    if (disposed) return;
    for (const cell of cells) cell.tone = null;
    markCtx?.clearRect(0, 0, width, height);
    mark?.classList.remove("ascii-ready");
    if (!mark || !maskCtx || !markCtx || !mark.complete || !mark.naturalWidth) return;
    const bounds = mark.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const fieldBounds = canvas.getBoundingClientRect();
    try {
      mask.width = Math.max(1, Math.ceil(bounds.width));
      mask.height = Math.max(1, Math.ceil(bounds.height));
      const scale = Math.min(bounds.width / mark.naturalWidth, bounds.height / mark.naturalHeight);
      const drawWidth = mark.naturalWidth * scale;
      const drawHeight = mark.naturalHeight * scale;
      maskCtx.drawImage(mark, (bounds.width - drawWidth) / 2, (bounds.height - drawHeight) / 2, drawWidth, drawHeight);
      const pixels = maskCtx.getImageData(0, 0, mask.width, mask.height).data;
      const left = bounds.left - fieldBounds.left;
      const top = bounds.top - fieldBounds.top;
      markCtx.font = font;
      markCtx.textBaseline = "middle";
      for (const cell of cells) {
        const x = Math.floor(cell.x + advance / 2 - left);
        const y = Math.floor(cell.y - top);
        if (x < 0 || y < 0 || x >= mask.width || y >= mask.height) continue;
        const offset = (y * mask.width + x) * 4;
        if (pixels[offset + 3] < 24) continue;
        cell.tone = pixels[offset + 2] - pixels[offset] > 80 ? colors.accent : colors.text;
        markCtx.fillStyle = cell.tone;
        markCtx.fillText(cell.char, cell.x, cell.y);
      }
      mark.classList.add("ascii-ready");
    } catch {
      // Keep the original vector visible if its pixels cannot be sampled.
      markCtx.clearRect(0, 0, width, height);
      for (const cell of cells) cell.tone = null;
    }
  }

  function updateMark() {
    layoutFrame = 0;
    if (disposed) return;
    buildMark();
    compose();
  }

  function queueMark() {
    if (!disposed && !layoutFrame) layoutFrame = requestAnimationFrame(updateMark);
  }

  // The sticky stage stays viewport-centered, so the mark never moves during
  // scroll; rebuilding the raster per scroll event erased hover/wave glyphs
  // and stalled on getImageData. Rebuild only if the mark genuinely moved.
  let lastMarkTop = null;
  function onScroll() {
    if (!mark) return;
    const top = Math.round(mark.getBoundingClientRect().top);
    if (lastMarkTop === null) {
      lastMarkTop = top;
      return;
    }
    if (top !== lastMarkTop) {
      lastMarkTop = top;
      queueMark();
    }
  }

  function resize() {
    if (disposed) return;
    const bounds = canvas.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = base.width = Math.round(width * ratio);
    canvas.height = base.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    baseCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
    markLayer.width = canvas.width;
    markLayer.height = canvas.height;
    markCtx?.setTransform(ratio, 0, 0, ratio, 0, 0);
    baseCtx.font = font;
    baseCtx.textBaseline = "middle";
    baseCtx.fillStyle = colors.text;
    baseCtx.globalAlpha = 0.055;
    advance = Math.max(5, baseCtx.measureText("M").width);
    const columns = Math.max(1, Math.floor(width / advance));
    cells.length = 0;
    let wordIndex = 0;
    for (let y = 12; y < height; y += 18) {
      let line = "";
      while (true) {
        const word = VOCABULARY[wordIndex % VOCABULARY.length];
        if (line.length + word.length > columns) break;
        line += `${word} `;
        wordIndex += 1;
      }
      baseCtx.fillText(line, 0, y);
      for (let i = 0; i < line.length; i += 1) {
        if (line[i] !== " ") {
          cells.push({ char: line[i], x: i * advance, y, phase: Math.random() * Math.PI * 2 });
        }
      }
    }
    ctx.font = font;
    ctx.textBaseline = "middle";
    buildMark();
    compose();
  }

  function allowed() {
    return !disposed && inView && !document.hidden && !motion.matches;
  }

  function stop() {
    cancelAnimationFrame(frame);
    frame = 0;
  }

  function sync() {
    if (!allowed()) {
      stop();
      return;
    }
    if (!frame) {
      lastFrame = performance.now() - FRAME_MS;
      frame = requestAnimationFrame(draw);
    }
  }

  function draw(time) {
    frame = 0;
    if (!allowed()) return;
    if (time - lastFrame >= FRAME_MS) {
      const delta = Math.min(0.1, (time - lastFrame) / 1000);
      lastFrame = time;
      const blend = 1 - Math.exp(-10 * delta);
      pointerX += (targetX - pointerX) * blend;
      pointerY += (targetY - pointerY) * blend;
      pointerStrength += ((inside ? 1 : 0) - pointerStrength) * blend;
      compose();
      const radius = Math.min(260, Math.max(140, width * 0.17));
      const radiusSq = radius * radius;
      const waveRadius = Math.min(1600, Math.hypot(width, height) * 0.9);
      const seconds = time / 1000;
      for (let i = 0; i < cells.length; i += 1) {
        const cell = cells[i];
        const dx = cell.x - pointerX;
        const dy = cell.y - pointerY;
        const distanceSq = dx * dx + dy * dy;
        const mutation = Math.sin(seconds * 0.45 + cell.phase) > 0.965;
        const light = distanceSq < radiusSq
          ? (1 - distanceSq / radiusSq) ** 2 * pointerStrength
          : 0;
        let wave = 0;
        for (let j = 0; j < ripples.length; j += 1) {
          const ripple = ripples[j];
          const age = (time - ripple.born) / RIPPLE_MS;
          if (age < 0 || age >= 1) continue;
          const distance = Math.hypot(cell.x - ripple.x, cell.y - ripple.y);
          const band = Math.max(0, 1 - Math.abs(distance - age * waveRadius) / 150);
          wave = Math.max(wave, band * Math.sin(age * Math.PI));
        }
        const waveActive = wave > 0.05 && cell.phase / (Math.PI * 2) < wave * 0.65;
        if (!mutation && !waveActive && light < 0.012) continue;
        ctx.globalAlpha = 1;
        ctx.clearRect(cell.x, cell.y - 9, advance, 18);
        const erosion = cell.phase / (Math.PI * 2) < light * 2.5 ? 1 : light;
        ctx.globalAlpha = waveActive ? 0.85 : (cell.tone ? 1 : 0.055) * (1 - erosion);
        ctx.fillStyle = waveActive ? colors.accent : (cell.tone || colors.text);
        const glyph = mutation || waveActive
          ? GLYPHS[1 + Math.floor((cell.phase * 17 + seconds * (waveActive ? 24 : 2.5)) % (GLYPHS.length - 1))]
          : cell.char;
        ctx.fillText(glyph, cell.x, cell.y);
      }
      ctx.globalAlpha = 1;
    }
    frame = requestAnimationFrame(draw);
  }

  function move(event) {
    if (motion.matches || event.pointerType === "touch") return;
    const bounds = canvas.getBoundingClientRect();
    targetX = event.clientX - bounds.left;
    targetY = event.clientY - bounds.top;
    if (!inside) {
      pointerX = targetX;
      pointerY = targetY;
    }
    inside = true;
  }

  function click(event) {
    if (!allowed() || event.button !== 0 || event.pointerType === "touch") return;
    if (event.composedPath().some((node) => node instanceof Element && node.matches(INTERACTIVE))) return;
    const bounds = canvas.getBoundingClientRect();
    const ripple = ripples[rippleSlot];
    rippleSlot = (rippleSlot + 1) % ripples.length;
    ripple.x = event.clientX - bounds.left;
    ripple.y = event.clientY - bounds.top;
    ripple.born = performance.now();
  }

  function leave() {
    inside = false;
  }

  function motionChanged() {
    for (const ripple of ripples) ripple.born = -Infinity;
    pointerStrength = 0;
    inside = false;
    compose();
    sync();
  }

  const visibility = typeof IntersectionObserver === "function"
    ? new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync(); })
    : null;
  const sizing = typeof ResizeObserver === "function" ? new ResizeObserver(resize) : null;
  visibility?.observe(canvas);
  sizing?.observe(canvas);
  if (mark) sizing?.observe(mark);
  mark?.addEventListener("load", queueMark);
  mark?.addEventListener("error", queueMark);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", sync);
  surface.addEventListener("pointermove", move, { passive: true });
  surface.addEventListener("pointerdown", click, { passive: true });
  surface.addEventListener("pointerleave", leave);
  window.addEventListener("blur", leave);
  motion.addEventListener("change", motionChanged);
  document.fonts?.ready.then(resize);
  resize();
  sync();

  return () => {
    disposed = true;
    stop();
    cancelAnimationFrame(layoutFrame);
    mark?.removeEventListener("load", queueMark);
    mark?.removeEventListener("error", queueMark);
    mark?.classList.remove("ascii-ready");
    window.removeEventListener("scroll", onScroll);
    visibility?.disconnect();
    sizing?.disconnect();
    window.removeEventListener("resize", resize);
    document.removeEventListener("visibilitychange", sync);
    surface.removeEventListener("pointermove", move);
    surface.removeEventListener("pointerdown", click);
    surface.removeEventListener("pointerleave", leave);
    window.removeEventListener("blur", leave);
    motion.removeEventListener("change", motionChanged);
  };
}

let disposePreviews = () => {};

/** Rebind after grid replacement, releasing even observers of detached old cards. */
export function refreshPreviews(grid) {
  disposePreviews();
  disposePreviews = () => {};
  if (!grid) return;
  const preference = matchMedia("(hover: none), (prefers-reduced-motion: reduce)");
  let stopCurrent = () => {};
  let disposed = false;

  function activate() {
    stopCurrent();
    stopCurrent = () => {};
    if (disposed || preference.matches) return;
    const colors = palette(grid);
    const sample = document.createElement("canvas");
    const sampleCtx = getContext(sample, { willReadFrequently: true });
    if (!sampleCtx) return;
    const entries = [];
    const byArt = new Map();
    let frame = 0;
    let active = true;

    function fallback(entry) {
      entry.art.classList.remove("ascii-ready");
      entry.canvas.remove();
    }

    function render(entry) {
      const { img, art, canvas } = entry;
      if (!img.isConnected || !img.complete || !img.naturalWidth) return;
      const width = Math.round(art.getBoundingClientRect().width);
      if (!width) return;
      const height = width * 10 / 16;
      const ratio = Math.min(devicePixelRatio || 1, 2);
      const cols = Math.max(1, Math.floor(width / 6));
      const rows = Math.max(1, Math.floor(height / 10));
      try {
        const ctx = getContext(canvas);
        if (!ctx) { fallback(entry); return; }
        sample.width = cols;
        sample.height = rows;
        sampleCtx.fillStyle = colors.bg;
        sampleCtx.fillRect(0, 0, cols, rows);
        // Crop in image space to 16:10, not to the non-square character grid.
        const sourceWidth = Math.min(img.naturalWidth, img.naturalHeight * 16 / 10);
        const sourceHeight = sourceWidth * 10 / 16;
        sampleCtx.drawImage(img,
          (img.naturalWidth - sourceWidth) / 2, (img.naturalHeight - sourceHeight) / 2,
          sourceWidth, sourceHeight, 0, 0, cols, rows);
        const pixels = sampleCtx.getImageData(0, 0, cols, rows).data;
        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        ctx.fillStyle = colors.bg;
        ctx.fillRect(0, 0, width, height);
        ctx.font = `10px ${colors.font}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = colors.text;
        const cellWidth = width / cols;
        const cellHeight = height / rows;
        for (let y = 0; y < rows; y += 1) {
          for (let x = 0; x < cols; x += 1) {
            const offset = (y * cols + x) * 4;
            const luminance = (0.2126 * pixels[offset] + 0.7152 * pixels[offset + 1] + 0.0722 * pixels[offset + 2]) / 255;
            const glyph = GLYPHS[Math.round(luminance * (GLYPHS.length - 1))];
            if (glyph === " ") continue;
            ctx.globalAlpha = 0.45 + luminance * 0.45;
            ctx.fillText(glyph, (x + 0.5) * cellWidth, (y + 0.5) * cellHeight);
          }
        }
        ctx.globalAlpha = 1;
        if (!canvas.isConnected) img.after(canvas);
        art.classList.add("ascii-ready");
      } catch {
        // Cross-origin/undecodable covers must never hide the real image.
        fallback(entry);
      }
    }

    function flush() {
      frame = 0;
      if (!active || document.hidden) return;
      for (const entry of entries) {
        if (!entry.visible || !entry.dirty) continue;
        entry.dirty = false;
        render(entry);
      }
    }

    function schedule() {
      if (active && !document.hidden && !frame) frame = requestAnimationFrame(flush);
    }

    const visibility = typeof IntersectionObserver === "function"
      ? new IntersectionObserver((changes) => {
        for (const change of changes) {
          const entry = byArt.get(change.target);
          if (entry) entry.visible = change.isIntersecting;
        }
        schedule();
      }, { rootMargin: "160px" })
      : null;
    const sizing = typeof ResizeObserver === "function"
      ? new ResizeObserver((changes) => {
        for (const change of changes) {
          const entry = byArt.get(change.target);
          if (entry) entry.dirty = true;
        }
        schedule();
      })
      : null;

    function resizeAll() {
      for (const entry of entries) entry.dirty = true;
      schedule();
    }

    for (const img of grid.querySelectorAll(".build-art.has-cover > img")) {
      const art = img.parentElement;
      const canvas = document.createElement("canvas");
      canvas.className = "preview-ascii";
      canvas.setAttribute("aria-hidden", "true");
      const entry = { img, art, canvas, dirty: true, visible: !visibility };
      entry.load = () => { entry.dirty = true; schedule(); };
      entry.error = () => { entry.dirty = false; fallback(entry); };
      entries.push(entry);
      byArt.set(art, entry);
      img.addEventListener("load", entry.load);
      img.addEventListener("error", entry.error);
      visibility?.observe(art);
      sizing?.observe(art);
    }
    document.addEventListener("visibilitychange", schedule);
    window.addEventListener("resize", resizeAll);
    document.fonts?.ready.then(() => { if (active) resizeAll(); });
    schedule();

    stopCurrent = () => {
      active = false;
      cancelAnimationFrame(frame);
      visibility?.disconnect();
      sizing?.disconnect();
      document.removeEventListener("visibilitychange", schedule);
      window.removeEventListener("resize", resizeAll);
      for (const entry of entries) {
        entry.img.removeEventListener("load", entry.load);
        entry.img.removeEventListener("error", entry.error);
        fallback(entry);
      }
    };
  }

  preference.addEventListener("change", activate);
  disposePreviews = () => {
    disposed = true;
    preference.removeEventListener("change", activate);
    stopCurrent();
  };
  activate();
}
