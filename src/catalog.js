import {
  categories,
  normalize,
  filterBuilds,
  sortBuilds,
  readFilters,
  writeFilters,
} from "./catalog-data.js";

const $ = (id) => document.getElementById(id);
const grid = $("build-grid");
let builds = [];
let state;
let searchTimer;

const icons = {
  games:
    '<rect x="8" y="34" width="84" height="34" rx="17"/><path d="M30 44v14M23 51h14"/><circle cx="67" cy="47" r="3.5"/><circle cx="78" cy="56" r="3.5"/>',
};

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

const SVG_NS = "http://www.w3.org/2000/svg";

function scoreboardSymbol() {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 96 64");
  svg.setAttribute("aria-hidden", "true");
  svg.classList.add("empty-symbol");
  svg.innerHTML =
    '<rect class="board" x="6" y="6" width="84" height="52" rx="9"/>' +
    '<rect class="digit" x="24" y="21" width="13" height="22" rx="6.5"/>' +
    '<rect class="digit" x="59" y="21" width="13" height="22" rx="6.5"/>' +
    '<circle class="colon" cx="48" cy="28" r="2.6"/>' +
    '<circle class="colon" cx="48" cy="36" r="2.6"/>';
  return svg;
}

function warningSymbol() {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.classList.add("empty-symbol", "is-icon");
  svg.innerHTML =
    '<path d="M12 3.5 22 20.5H2Z"/><path d="M12 10v4.5"/><circle cx="12" cy="17.2" r="0.3"/>';
  return svg;
}
function pluralRu(n, [one, few, many]) {
  const abs = Math.abs(n) % 100;
  const d = abs % 10;
  if (abs > 10 && abs < 20) return many;
  if (d > 1 && d < 5) return few;
  if (d === 1) return one;
  return many;
}

function makeCard(build) {
  const category = categories.find((c) => c.id === build.category);
  const article = element("article", "build-card");
  article.dataset.slug = build.slug;
  article.style.setProperty(
    "--build-accent",
    /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(build.accent ?? "")
      ? build.accent
      : "var(--accent)",
  );
  const link = element("a", "card-link");
  link.href = build.path;
  link.setAttribute(
    "aria-label",
    `Открыть ${build.title}${build.model ? `, ${build.model}` : ""}`,
  );
  const art = element("div", "build-art");
  art.setAttribute("aria-hidden", "true");
  if (build.cover) {
    const img = element("img");
    img.src = build.cover;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", () => {
      img.remove();
      art.classList.remove("has-cover");
    });
    art.append(img);
    art.classList.add("has-cover");
  }
  const symbol = document.createElementNS(SVG_NS, "svg");
  symbol.setAttribute("viewBox", "0 0 100 100");
  symbol.classList.add("art-symbol");
  symbol.setAttribute("aria-hidden", "true");
  symbol.innerHTML = icons[build.category] ?? ""; // fixed local SVG paths only
  const launch = element("span", "art-launch");
  launch.setAttribute("aria-hidden", "true");
  const arrow = document.createElementNS(SVG_NS, "svg");
  arrow.setAttribute("viewBox", "0 0 24 24");
  arrow.innerHTML = '<path d="M7 7h10v10M7 17 17 7"/>';
  launch.append(arrow);
  art.append(symbol, element("span", "art-label", category.name), launch);
  const body = element("div", "card-body");
  body.append(
    element(
      "p",
      build.model ? "model-badge" : "model-badge is-unknown",
      build.model ?? "Модель не указана",
    ),
    element("h3", "build-title", build.title),
  );
  if (build.version && !normalize(build.model ?? "").endsWith(normalize(build.version)))
    body.append(element("span", "build-version", build.version));
  body.append(
    element(
      "p",
      "build-description",
      build.summary || build.description || "Интерактивная AI-сборка.",
    ),
  );
  if (build.omp?.session) {
    const extras = element("div", "omp-extras");
    if (build.omp.logo) {
      const mark = element("img", "omp-mark");
      mark.src = build.omp.logo;
      mark.alt = "";
      mark.loading = "lazy";
      mark.decoding = "async";
      mark.title = "Создано в Oh My Pi";
      mark.addEventListener("error", () => mark.remove());
      extras.append(mark);
    }
    const download = element("a", "omp-download");
    extras.append(download);
    download.href = build.omp.session;
    download.download = "";
    download.textContent = "Скачать OMP-сессию";
    const metrics = [
      build.omp.requests != null ? `user: ${build.omp.requests}` : null,
      build.omp.toolCalls != null ? `тулколлы: ${build.omp.toolCalls}` : null,
      build.omp.minutes != null
        ? build.omp.minutes >= 60
          ? `${Math.floor(build.omp.minutes / 60)} ч ${build.omp.minutes % 60} мин`
          : `${build.omp.minutes} мин`
        : null,
    ].filter(Boolean);
    if (metrics.length) extras.append(element("span", "omp-stats", metrics.join(" · ")));
    body.append(extras);
  }
  link.append(art, body);
  article.append(link);
  const bottom = element("div", "card-bottom");
  const tags = element("div", "card-tags");
  const modelName = build.model ? normalize(build.model) : "";
  for (const tag of (build.tags ?? [])
    .filter((t) => !modelName || normalize(t) !== modelName)
    .slice(0, 3))
    tags.append(element("span", "tag-pill", tag));
  bottom.append(tags);
  if (build.description) {
    const details = element("details", "build-notes");
    details.append(
      element("summary", "", "Заметки о сборке"),
      element("p", "", build.description),
    );
    bottom.append(details);
  }
  if (build.omp?.session) article.classList.add("has-omp");
  article.append(bottom);
  return article;
}

function option(value, text) {
  const opt = element("option", "", text);
  opt.value = value;
  return opt;
}

function initializeControls() {
  const models = [...new Set(builds.map((b) => b.model).filter(Boolean))].sort(
    (a, b) => a.localeCompare(b, "en", { numeric: true }),
  );
  $("model").replaceChildren(
    option("", "Все модели"),
    ...models.map((m) =>
      option(m, `${m} (${builds.filter((b) => b.model === m).length})`),
    ),
  );
  if (builds.some((b) => !b.model))
    $("model").append(option("unknown", "Не указана"));
  const tags = new Map();
  for (const build of builds)
    for (const tag of build.tags ?? [])
      if (!tags.has(normalize(tag))) tags.set(normalize(tag), tag);
  $("tag").replaceChildren(
    option("", "Все теги"),
    ...[...tags.values()]
      .sort((a, b) => a.localeCompare(b))
      .map((t) => option(t, t)),
  );
  $("categories").replaceChildren();
  for (const category of [{ id: "", name: "Все сборки" }, ...categories]) {
    const button = element("button", "category-button");
    button.type = "button";
    button.dataset.category = category.id;
    button.append(
      element("span", "", category.name),
      element("span", "category-count"),
    );
    $("categories").append(button);
  }
  for (const id of ["search", "model", "tag", "sort"]) $(id).disabled = false;
  $("total-builds").textContent = builds.length;
  $("total-models").textContent = models.length;
  $("total-sections").textContent = categories.filter((c) =>
    builds.some((b) => b.category === c.id),
  ).length;
  $("build-count").textContent =
    `${builds.length} ${pluralRu(builds.length, ["сборка", "сборки", "сборок"])}`;
}

function syncControls() {
  for (const key of ["model", "tag", "sort"]) $(key).value = state[key];
  $("search").value = state.q;
}

function render() {
  const visible = sortBuilds(filterBuilds(builds, state), state.sort);
  const candidates = filterBuilds(builds, state, { ignoreCategory: true });
  for (const button of $("categories").children) {
    const id = button.dataset.category;
    button.setAttribute("aria-pressed", String(id === state.category));
    button.querySelector(".category-count").textContent = id
      ? candidates.filter((b) => b.category === id).length
      : candidates.length;
  }
  $("clear-search").hidden = !state.q;
  $("reset").hidden = !(
    state.q ||
    state.category ||
    state.model ||
    state.tag ||
    state.sort !== "name"
  );
  $("results-status").textContent = `Показано ${visible.length} из ${
    builds.length
  } сборок${state.q ? ` по запросу «${state.q}»` : ""}`;
  grid.replaceChildren();
  if (!visible.length) {
    const empty = element("div", "empty-state");
    empty.append(
      scoreboardSymbol(),
      element(
        "h3",
        "",
        builds.length ? "Сборки не найдены." : "Коллекция начинается здесь.",
      ),
      element(
        "p",
        "",
        builds.length
          ? "Попробуйте другой запрос или сбросьте фильтры."
          : "Новые сборки появятся здесь, когда их добавят.",
      ),
    );
    if (builds.length) {
      const reset = element("button", "reset-button");
      reset.type = "button";
      reset.textContent = "Сбросить фильтры";
      reset.addEventListener("click", resetFilters);
      empty.append(reset);
    }
    grid.append(empty);
    return;
  }
  for (const category of categories) {
    const items = visible.filter((b) => b.category === category.id);
    if (!items.length) continue;
    const section = element("section", "catalog-section");
    section.setAttribute("aria-labelledby", `section-${category.id}`);
    const heading = element("div", "section-heading");
    const title = element("h3", "", category.name);
    title.id = `section-${category.id}`;
    title.append(
      element("span", "section-count", String(items.length).padStart(2, "0")),
    );
    heading.append(title, element("p", "", category.description));
    const cards = element("div", "build-cards");
    cards.append(
      ...items.map((build, index) => {
        const card = makeCard(build);
        card.style.setProperty("--i", String(index));
        return card;
      }),
    );
    section.append(heading, cards);
    grid.append(section);
  }
}

function showLoadError() {
  grid.setAttribute("aria-busy", "false");
  $("build-count").textContent = "ОШИБКА ЗАГРУЗКИ";
  $("results-status").textContent = "Не удалось загрузить коллекцию.";
  grid.replaceChildren();
  const box = element("div", "empty-state");
  box.classList.add("is-error");
  box.append(
    warningSymbol(),
    element("h3", "", "Не удалось загрузить коллекцию."),
    element("p", "", "Проверьте подключение и попробуйте ещё раз."),
  );
  const retry = element("button", "reset-button");
  retry.type = "button";
  retry.textContent = "Повторить";
  retry.addEventListener("click", load);
  box.append(retry);
  grid.append(box);
}

async function load() {
  const status = $("status");
  status.classList.add("is-loading");
  grid.setAttribute("aria-busy", "true");
  $("results-status").textContent = "Загрузка коллекции…";
  grid.replaceChildren(element("div", "loading-card", "Готовим сборки…"));
  try {
    const response = await fetch("./builds.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    builds = await response.json();
    state = readFilters(location.search, builds);
    initializeControls();
    syncControls();
    commit({ replace: true });
    grid.setAttribute("aria-busy", "false");
    status.classList.replace("is-loading", "is-ok");
  } catch {
    status.classList.replace("is-loading", "is-error");
    showLoadError();
  }
}

function commit({ replace = false } = {}) {
  const url = new URL(location.href);
  url.search = writeFilters(state, url.search);
  if (url.href !== location.href)
    history[replace ? "replaceState" : "pushState"]({}, "", url);
  render();
}

function resetFilters() {
  clearTimeout(searchTimer);
  state = { q: "", category: "", model: "", tag: "", sort: "name" };
  syncControls();
  commit();
  $("search").focus();
}

$("filters").addEventListener("submit", (e) => {
  e.preventDefault();
  clearTimeout(searchTimer);
  if (state) commit({ replace: true });
});
$("search").addEventListener("input", (e) => {
  if (!state) return;
  state.q = e.target.value;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => commit({ replace: true }), 120);
});
$("clear-search").addEventListener("click", () => {
  clearTimeout(searchTimer);
  state.q = "";
  $("search").value = "";
  commit({ replace: true });
  $("search").focus();
});
$("reset").addEventListener("click", resetFilters);
for (const id of ["model", "tag", "sort"])
  $(id).addEventListener("change", (e) => {
    clearTimeout(searchTimer);
    state[id] = e.target.value;
    commit();
  });
$("categories").addEventListener("click", (e) => {
  const button = e.target.closest("button[data-category]");
  if (!button || !state) return;
  clearTimeout(searchTimer);
  state.category = button.dataset.category;
  commit();
});
window.addEventListener("popstate", () => {
  if (!state) return;
  clearTimeout(searchTimer);
  state = readFilters(location.search, builds);
  syncControls();
  render();
});
window.addEventListener("keydown", (e) => {
  if (!state) return;
  if (
    e.key === "/" &&
    !e.ctrlKey &&
    !e.metaKey &&
    !e.altKey &&
    !e.target.closest("input, select, textarea, [contenteditable='true']")
  ) {
    e.preventDefault();
    $("search").focus();
  }
  if (e.key === "Escape" && e.target === $("search") && state.q) {
    e.preventDefault();
    $("clear-search").click();
  }
});

load();