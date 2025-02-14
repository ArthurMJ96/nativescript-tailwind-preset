// index.js
const { createThemes } = require("./tailwind-color/createThemes");
const { toUpperCamelCase } = require("./tailwind-color/toUpperCamelCase");
// const { ThemeColors } = require("./default-theme/theme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

function createNativeScriptTailwindConfig(
  themeColors = require("./default-theme").ThemeColors
) {
  const directThemeColors = Object.fromEntries(
    Object.entries(themeColors)
      .map(([key, value]) =>
        Object.entries(value).map(([key2, value2]) => [
          toUpperCamelCase(`${key}-${key2}`),
          value2,
        ])
      )
      .flat()
  );

  return {
    colors: {
      ...colors,
      ...directThemeColors,
    },
    plugins: [
      plugin(function ({ addVariant }) {
        addVariant("l", ".ns-light &");
        addVariant("d", ".ns-dark &");
        addVariant("ios", ".ns-ios &");
        addVariant("android", ".ns-android &");
        addVariant("tablet", ".ns-tablet &");
      }),
      createThemes(themeColors),
    ],
  };
}

module.exports = createNativeScriptTailwindConfig;
