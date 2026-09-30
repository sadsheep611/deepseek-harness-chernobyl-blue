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
      "--dsw-menu-surface-fill": { light: "#f7faff66", dark: "#15171a33" },
      "--dsw-menu-backdrop-filter": {
        light: "saturate(120%) blur(20px) brightness(1.02)",
        dark: "saturate(120%) blur(20px) brightness(0.85)"
      },
      "--dsw-specific-menu": { light: "#f7faff66", dark: "#15171a33" },
      "--dsw-specific-sidebar-fill": { light: "#e8f0fb", dark: "#101113" },
      "--dsw-specific-sidebar-nav-item-active": { light: "#d2e3f8", dark: "#21252b" },
      "--dsw-specific-sidebar-nav-item-hover": { light: "#dae8f8", dark: "#1c1e21" },
      "--dsw-specific-sidebar-nav-item-active-accent": { light: "#286cb8", dark: "#4a89dc" }
    };

    // The glow ellipse is anchored to the composer: cx is recomputed from the
    // composer's own rectangle so it always sits under the input box, no matter
    // how the sidebar, panels or window size change the chat column's offset.
    const COMPOSER_SEAT = "[data-composer-seat]";
    const GLOW_CENTER_DROP = 1.12; // ellipse centre y = composer bottom * this, so the halo bleeds up from below the viewport
    const GLOW_MIN_WIDTH = 560; // px; keeps the glow from collapsing on narrow windows
    const GLOW_WIDTH_RATIO = 0.78; // glow width relative to the composer's own width

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
          "body[data-ds-dark-theme] {",
          "  background-image: radial-gradient(circle at 50% 110%, #2a3139 0%, #15171a 58%, #101113 100%);",
          "  background-attachment: fixed;",
          "}",
          "body:not([data-ds-dark-theme]) {",
          "  background-image: radial-gradient(circle at 70% 112%, #cfe2fb 0%, #eaf2fc 48%, #f6f9ff 100%);",
          "  background-attachment: fixed;",
          "}",
          "body[data-ds-dark-theme] ::selection {",
          "  background: #4a89dc;",
          "  color: #ffffff;",
          "}"
        ].join("\n");
        document.head.appendChild(style);
        return () => style.remove();
      }, "chernobyl-blue: atmospheric background");

      ctx.effect(() => {
        const glow = document.createElement("div");
        glow.id = "dsh-chernobyl-blue-glow";
        glow.setAttribute("aria-hidden", "true");

        const glowStyle = document.createElement("style");
        glowStyle.id = "dsh-chernobyl-blue-glow-style";
        glowStyle.textContent = [
          "#dsh-chernobyl-blue-glow {",
          "  --dsh-cb-glow-cx: 50vw;",
          "  --dsh-cb-glow-width: 78vw;",
          "  --dsh-cb-glow-height: 130vh;",
          "  display: none;",
          "  position: fixed;",
          "  inset: 0;",
          "  z-index: 2147483000;",
          "  pointer-events: none;",
          "  user-select: none;",
          "  background: radial-gradient(ellipse var(--dsh-cb-glow-width) var(--dsh-cb-glow-height) at var(--dsh-cb-glow-cx) 112%, rgba(74, 137, 220, 0.20), transparent 72%);",
          "  mix-blend-mode: screen;",
          "}",
          "body:not([data-ds-dark-theme]) > #dsh-chernobyl-blue-glow {",
          "  display: block;",
          "  background:",
          "    radial-gradient(ellipse var(--dsh-cb-glow-width) var(--dsh-cb-glow-height) at var(--dsh-cb-glow-cx) 112%, rgba(69, 134, 220, 0.24), transparent 72%),",
          "    radial-gradient(ellipse calc(var(--dsh-cb-glow-width) * 0.92) calc(var(--dsh-cb-glow-height) * 0.78) at var(--dsh-cb-glow-cx) 108%, rgba(96, 157, 232, 0.16), transparent 82%);",
          "  mix-blend-mode: multiply;",
          "}",
          "body[data-ds-dark-theme] > #dsh-chernobyl-blue-glow {",
          "  display: block;",
          "}"
        ].join("\n");

        document.head.appendChild(glowStyle);
        document.body.appendChild(glow);

        let frame = 0;

        const layout = () => {
          frame = 0;
          const seat = document.querySelector(COMPOSER_SEAT);
          if (seat === null) return;
          const rect = seat.getBoundingClientRect();
          if (rect.width <= 0 || rect.height <= 0) return;
          const width = Math.max(GLOW_MIN_WIDTH, Math.round(rect.width * GLOW_WIDTH_RATIO));
          glow.style.setProperty("--dsh-cb-glow-cx", Math.round(rect.left + rect.width / 2) + "px");
          glow.style.setProperty("--dsh-cb-glow-width", Math.round(width) + "px");
          glow.style.setProperty("--dsh-cb-glow-height", (Math.round(rect.height) + window.innerHeight) + "px");
        };

        const schedule = () => {
          if (frame !== 0) return;
          frame = window.requestAnimationFrame(layout);
        };

        schedule();

        const observer = new ResizeObserver(schedule);
        observer.observe(document.documentElement);
        const seatObserver = new ResizeObserver(schedule);
        const watchSeat = () => {
          const seat = document.querySelector(COMPOSER_SEAT);
          if (seat !== null) seatObserver.observe(seat);
        };
        watchSeat();

        window.addEventListener("resize", schedule);
        // The chat column moves when panels open/close or a session is switched,
        // which changes the composer's x without firing a window resize.
        const mutation = new MutationObserver(() => {
          schedule();
          watchSeat();
        });
        mutation.observe(document.body, { childList: true, subtree: true });

        return () => {
          if (frame !== 0) window.cancelAnimationFrame(frame);
          window.removeEventListener("resize", schedule);
          observer.disconnect();
          seatObserver.disconnect();
          mutation.disconnect();
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
