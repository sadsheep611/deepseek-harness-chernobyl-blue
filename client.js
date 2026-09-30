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
          "  display: none;",
          "  position: fixed;",
          "  inset: 0;",
          "  z-index: 2147483000;",
          "  pointer-events: none;",
          "  user-select: none;",
          "  background:",
          "    radial-gradient(ellipse 58% 56% at 70% 116%, rgba(74, 137, 220, 0.20), transparent 72%),",
          "    radial-gradient(ellipse 54% 42% at 46% 108%, rgba(74, 137, 220, 0.10), transparent 82%);",
          "  mix-blend-mode: screen;",
          "}",
          "body:not([data-ds-dark-theme]) > #dsh-chernobyl-blue-glow {",
          "  display: block;",
          "  background:",
          "    radial-gradient(ellipse 60% 54% at 72% 112%, rgba(69, 134, 220, 0.24), transparent 72%),",
          "    radial-gradient(ellipse 56% 42% at 44% 108%, rgba(96, 157, 232, 0.16), transparent 82%);",
          "  mix-blend-mode: multiply;",
          "}",
          "body[data-ds-dark-theme] > #dsh-chernobyl-blue-glow {",
          "  display: block;",
          "}"
        ].join("\n");

        document.head.appendChild(glowStyle);
        document.body.appendChild(glow);
        return () => {
          glow.remove();
          glowStyle.remove();
        };
      }, "chernobyl-blue: visible glow");
    }

    module.exports.apply = apply;
    module.exports.inject = inject;
    return module.exports;
  }
});

