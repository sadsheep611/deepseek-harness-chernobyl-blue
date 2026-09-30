window.__ModuleLoader__.load({
  id: "dsh-chernobyl-blue-local",
  factory: () => {
    const module = { exports: {} };

    const palette = {
      "--dsw-alias-bg-base": { light: "#f1f6fd", dark: "#15171a" },
      "--dsw-alias-bg-layer-1": { light: "#ffffff", dark: "#21252b" },
      "--dsw-alias-bg-layer-2": { light: "#e8f0fb", dark: "#1c1e21" },
      "--dsw-alias-bg-layer-3": { light: "#dbe8f8", dark: "#2a3139" },
      "--dsw-alias-bg-overlay": { light: "#ffffff", dark: "#101113" },
      "--dsw-alias-border-l1": { light: "#c8d8ec", dark: "#333a44" },
      "--dsw-alias-border-l2": { light: "#afc6e3", dark: "#455264" },
      "--dsw-alias-border-l3": { light: "#93afd2", dark: "#516078" },
      "--dsw-alias-brand-primary": { light: "#286cb8", dark: "#4a89dc" },
      "--dsw-alias-brand-text": { light: "#286cb8", dark: "#7fb0ee" },
      "--dsw-alias-label-primary": { light: "#17212e", dark: "#f7f9fc" },
      "--dsw-alias-label-secondary": { light: "#536275", dark: "#b7bec8" },
      "--dsw-alias-label-tertiary": { light: "#6e7f94", dark: "#8d9bad" },
      "--dsw-alias-link": { light: "#286cb8", dark: "#6da4e9" },
      "--dsw-alias-bg-document-selection": { light: "#4a89dc4d", dark: "#4a89dc66" },
      "--dsw-alias-markdown-code-block": { light: "#e8f1fc", dark: "#21252b" },
      "--dsw-alias-markdown-code-block-banner": { light: "#d6e5f8", dark: "#2a3139" },
      "--dsw-alias-button-info-fill": { light: "#286cb8", dark: "#4a89dc" },
      "--dsw-alias-button-ghost-active-fill": { light: "#e0ecfa", dark: "#2a3139" },
      "--dsw-menu-surface-fill": { light: "#f7faffed", dark: "#15171ae8" },
      "--dsw-specific-menu": { light: "#f7faffed", dark: "#15171ae8" },
      "--dsw-specific-sidebar-fill": { light: "#e8f0fb", dark: "#101113" },
      "--dsw-specific-sidebar-nav-item-active": { light: "#d2e3f8", dark: "#21252b" },
      "--dsw-specific-sidebar-nav-item-hover": { light: "#dae8f8", dark: "#1c1e21" },
      "--dsw-specific-sidebar-nav-item-active-accent": { light: "#286cb8", dark: "#4a89dc" }
    };

    const inject = ["theme"];

    function apply(ctx) {
      ctx.effect(
        () => ctx.theme.overrideTokens("dsh-chernobyl-blue-local", palette),
        "chernobyl-blue: palette"
      );

      ctx.effect(() => {
        const style = document.createElement("style");
        style.id = "dsh-chernobyl-blue-local-style";
        style.textContent = [
          "body[data-ds-dark-theme] ::selection {",
          "  background: #4a89dc;",
          "  color: #ffffff;",
          "}"
        ].join("\n");
        document.head.appendChild(style);
        return () => style.remove();
      }, "chernobyl-blue: selection color");

      ctx.effect(() => {
        const glow = document.createElement("div");
        glow.id = "dsh-chernobyl-blue-glow";
        glow.setAttribute("aria-hidden", "true");

        const glowStyle = document.createElement("style");
        glowStyle.id = "dsh-chernobyl-blue-glow-style";
        glowStyle.textContent = [
          "#dsh-chernobyl-blue-glow {",
          "  display: none;",
          "  position: fixed;",
          "  left: 50%;",
          "  top: 70vh;",
          "  width: min(900px, 96vw);",
          "  height: 240px;",
          "  transform: translateX(-50%);",
          "  z-index: 2147483000;",
          "  pointer-events: none;",
          "  user-select: none;",
          "  background: radial-gradient(ellipse 70% 92% at 50% 42%, rgba(74, 137, 220, 0.22), transparent 74%);",
          "  mix-blend-mode: screen;",
          "}",
          "body[data-ds-dark-theme] > #dsh-chernobyl-blue-glow,",
          "body:not([data-ds-dark-theme]) > #dsh-chernobyl-blue-glow {",
          "  display: block;",
          "}",
          "body:not([data-ds-dark-theme]) > #dsh-chernobyl-blue-glow {",
          "  background: radial-gradient(ellipse 72% 94% at 50% 42%, rgba(69, 134, 220, 0.24), transparent 74%);",
          "  mix-blend-mode: multiply;",
          "}"
        ].join("\n");

        document.head.appendChild(glowStyle);
        document.body.appendChild(glow);

        let trackedTarget = null;
        let resizeObserver = null;
        let animationFrame = 0;

        const findComposer = () => {
          const candidates = Array.from(document.querySelectorAll('textarea, [contenteditable="true"], [role="textbox"]'));
          const visible = candidates.map((element) => {
            const rect = element.getBoundingClientRect();
            const style = getComputedStyle(element);
            return { element, rect, style };
          }).filter(({ rect, style }) =>
            rect.width >= Math.min(320, window.innerWidth * 0.34) &&
            rect.height >= 18 && rect.bottom > window.innerHeight * 0.55 &&
            style.display !== "none" && style.visibility !== "hidden" &&
            Number(style.opacity || 1) > 0
          );

          const boxes = visible.map(({ element, rect }) => {
            let target = element;
            let bounds = rect;
            let parent = element.parentElement;
            for (let depth = 0; parent && depth < 7; depth += 1, parent = parent.parentElement) {
              const parentRect = parent.getBoundingClientRect();
              if (parentRect.width >= Math.max(rect.width + 48, 520) &&
                  parentRect.width <= window.innerWidth * 0.94 &&
                  parentRect.height >= 64 && parentRect.height <= 300 &&
                  parentRect.bottom > window.innerHeight * 0.55) {
                target = parent;
                bounds = parentRect;
                break;
              }
            }
            return { target, bounds };
          });

          boxes.sort((a, b) => b.bounds.bottom - a.bounds.bottom || b.bounds.width - a.bounds.width);
          return boxes[0] || null;
        };

        const updatePosition = () => {
          animationFrame = 0;
          const composer = findComposer();
          if (!composer) {
            glow.style.display = "none";
            return;
          }

          glow.style.display = "block";
          glow.style.left = `${composer.bounds.left + composer.bounds.width / 2}px`;
          glow.style.top = `${composer.bounds.bottom - 70}px`;
          glow.style.width = `${Math.min(Math.max(composer.bounds.width * 1.2, 520), window.innerWidth * 0.96)}px`;

          if (composer.target !== trackedTarget) {
            if (resizeObserver) resizeObserver.disconnect();
            trackedTarget = composer.target;
            resizeObserver = new ResizeObserver(() => scheduleUpdate());
            resizeObserver.observe(trackedTarget);
          }
        };

        const scheduleUpdate = () => {
          if (!animationFrame) animationFrame = requestAnimationFrame(updatePosition);
        };

        const mutationObserver = new MutationObserver(scheduleUpdate);
        mutationObserver.observe(document.body, { childList: true, subtree: true });
        window.addEventListener("resize", scheduleUpdate);
        window.addEventListener("scroll", scheduleUpdate, true);
        const refreshTimer = window.setInterval(scheduleUpdate, 1200);
        scheduleUpdate();

        return () => {
          mutationObserver.disconnect();
          if (resizeObserver) resizeObserver.disconnect();
          if (animationFrame) cancelAnimationFrame(animationFrame);
          window.clearInterval(refreshTimer);
          window.removeEventListener("resize", scheduleUpdate);
          window.removeEventListener("scroll", scheduleUpdate, true);
          glow.remove();
          glowStyle.remove();
        };
      }, "chernobyl-blue: composer-anchored glow");
    }

    module.exports.apply = apply;
    module.exports.inject = inject;
    return module.exports;
  }
});

