/* global SITE_CONTENT */
(() => {
  const content = window.SITE_CONTENT;
  if (!content) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const setText = (el, value) => {
    if (!el) return;
    el.textContent = value == null ? "" : String(value);
  };

  const setAttr = (el, attr, value) => {
    if (!el) return;
    if (value == null || value === "") el.removeAttribute(attr);
    else el.setAttribute(attr, String(value));
  };

  const renderList = (items) => items.map((t) => `<li>${escapeHtml(t)}</li>`).join("");

  const renderPills = (tags = []) => tags.map((t) => `<span class="pill">${escapeHtml(t)}</span>`).join("");

  const renderLinks = (links = []) => {
    if (!links.length) return "";
    return links
      .map((l) => {
        const disabled = l.disabled ? "aria-disabled=\"true\"" : "";
        const href = l.disabled ? "#" : l.href;
        const target = l.external ? " target=\"_blank\" rel=\"noreferrer\"" : "";
        return `<a class="miniLink" href="${escapeHtml(href)}" ${disabled}${target}>${escapeHtml(l.label)} →</a>`;
      })
      .join("");
  };

  const bindTextFields = () => {
    $$("[data-bind]").forEach((el) => {
      const path = el.getAttribute("data-bind");
      const value = path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), content);
      if (Array.isArray(value)) {
        el.innerHTML = value.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
        return;
      }
      setText(el, value);
    });
  };

  const cardTemplate = ({ title, kicker, lede, tags }) => `
    <article class="card card--clickable reveal" tabindex="0">
      <div class="card__kicker">${escapeHtml(kicker || "")}</div>
      <h3 class="card__title">${escapeHtml(title || "")}</h3>
      <p class="card__text">${escapeHtml(lede || "")}</p>
      <div class="pillRow">${renderPills(tags)}</div>
      <div class="card__hint">Open details →</div>
    </article>
  `;

  const renderCards = (container, items, kind) => {
    if (!container) return;
    container.innerHTML = items.map(cardTemplate).join("");
    const cards = $$(".card--clickable", container);
    cards.forEach((card, index) => {
      const item = items[index];
      const open = () => openDialog(item, kind);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });
  };

  const dialog = $("#detailDialog");
  const dialogTitle = $("#dialogTitle");
  const dialogKicker = $("#dialogKicker");
  const dialogLede = $("#dialogLede");
  const dialogPills = $("#dialogPills");
  const dialogBody = $("#dialogBody");
  const dialogLinks = $("#dialogLinks");

  const openDialog = (item, kind) => {
    if (!dialog) return;
    const fallbackKicker = kind ? kind.toUpperCase() : "";
    setText(dialogTitle, item.title);
    setText(dialogKicker, item.kicker || fallbackKicker);
    setText(dialogLede, item.lede || "");
    dialogPills.innerHTML = renderPills(item.tags || []);
    dialogLinks.innerHTML = renderLinks(item.links || []);
    dialogBody.innerHTML = (item.details || []).map((p) => `<p>${escapeHtml(p)}</p>`).join("");

    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  };

  const initTheme = () => {
    const toggle = $("#themeToggle");
    if (!toggle) return;

    const key = "aaa-theme";
    const apply = (mode) => {
      document.documentElement.dataset.theme = mode;
      localStorage.setItem(key, mode);
      toggle.setAttribute("aria-label", mode === "light" ? "Switch to dark theme" : "Switch to light theme");
      toggle.querySelector(".btn__label").textContent = mode === "light" ? "Light" : "Dark";
    };

    const stored = localStorage.getItem(key);
    const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    apply(stored || (prefersLight ? "light" : "dark"));

    toggle.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
      apply(current === "light" ? "dark" : "light");
    });
  };

  const initNav = () => {
    const toggle = $("#navToggle");
    const mobileNav = $("#mobileNav");
    if (!toggle || !mobileNav) return;

    const close = () => {
      mobileNav.hidden = true;
      toggle.setAttribute("aria-label", "Open menu");
      toggle.setAttribute("aria-expanded", "false");
    };

    const open = () => {
      mobileNav.hidden = false;
      toggle.setAttribute("aria-label", "Close menu");
      toggle.setAttribute("aria-expanded", "true");
    };

    toggle.addEventListener("click", () => {
      if (mobileNav.hidden) open();
      else close();
    });

    $$(".mobileNav__link", mobileNav).forEach((link) => link.addEventListener("click", close));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  };

  const initReveals = () => {
    const nodes = $$(".reveal");
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("reveal--in"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal--in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((n) => obs.observe(n));
  };

  const initContactForm = () => {
    const form = $("#contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();

      const subject = encodeURIComponent(`Website inquiry from ${name || "Someone"}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}\n`);
      const to = content.contact?.email || "hello@example.com";
      window.location.href = `mailto:${encodeURIComponent(to)}?subject=${subject}&body=${body}`;
    });
  };

  const initDynamicContent = () => {
    $("#year").textContent = String(new Date().getFullYear());

    const aboutCare = $("#aboutCare");
    if (aboutCare) aboutCare.innerHTML = renderList(content.about?.careAbout || []);

    const aboutTools = $("#aboutTools");
    if (aboutTools) aboutTools.innerHTML = renderList(content.about?.tools || []);

    const advancementPills = $("#advancementPills");
    if (advancementPills) advancementPills.innerHTML = renderPills(content.advancements?.pillars || []);

    const advancementList = $("#advancementList");
    if (advancementList) advancementList.innerHTML = renderList(content.advancements?.bullets || []);

    const quickLinks = $("#quickLinks");
    if (quickLinks) {
      quickLinks.innerHTML = (content.hero?.quickLinks || [])
        .map((l) => {
          const target = l.external ? ` target="_blank" rel="noreferrer"` : "";
          return `<a class="chip" href="${escapeHtml(l.href)}"${target}>${escapeHtml(l.label)}</a>`;
        })
        .join("");
    }

    const contactLinks = $("#contactLinks");
    if (contactLinks) {
      contactLinks.innerHTML = (content.contact?.links || [])
        .map((l) => {
          const target = l.external ? ` target="_blank" rel="noreferrer"` : "";
          return `<a class="pill pill--link" href="${escapeHtml(l.href)}"${target}>${escapeHtml(l.label)}</a>`;
        })
        .join("");
    }

    const agencyTargets = $("#agencyTargets");
    if (agencyTargets) agencyTargets.innerHTML = renderList(content.agency?.targets || []);

    const moneyMapRows = $("#moneyMapRows");
    if (moneyMapRows) {
      moneyMapRows.innerHTML = (content.moneyMap?.rows || [])
        .map(
          (r) => `
            <tr>
              <td><span class="tag">${escapeHtml(r.effort)}</span></td>
              <td>${escapeHtml(r.strategy)}</td>
              <td>${escapeHtml(r.income)}</td>
            </tr>
          `
        )
        .join("");
    }

    renderCards($("#projectsGrid"), content.projects?.items || [], "Project");
    renderCards($("#experienceGrid"), content.experience?.items || [], "Experience");
    renderCards($("#researchGrid"), content.research?.items || [], "Research");
    renderCards($("#blogGrid"), content.blog?.items || [], "Blog");
    renderCards($("#writingGrid"), content.writing?.items || [], "Writing");
  };

  bindTextFields();
  initDynamicContent();
  initTheme();
  initNav();
  initReveals();
  initContactForm();
})();
