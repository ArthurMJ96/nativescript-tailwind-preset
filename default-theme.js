const ThemeColors = {
  "ns-light": {
    base: {
      // Shades of off-white/light grey for backgrounds and surfaces (lightest to darkest)
      100: "#F9FAFB", // Main background
      200: "#F2F2F7", // Secondary surfaces (cards, modals)
      300: "#E5E5E5", // Subtle dividers, very light accents
    },
    high: "#000000", // Primary, high contrast text
    low: "#b2becd", // Secondary, lower contrast text (hints, captions)
    focus: "#fb923c", // Accent color for focus states, interactive elements
  },
  "ns-dark": {
    base: {
      100: "#121212",
      200: "#1E1E1E",
      300: "#2D2D2D",
    },
    high: "#ffffff",
    low: "#b2becd",
    focus: "#fb923c",
  },
};
exports.ThemeColors = ThemeColors;
