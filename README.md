This is just my personal quick mini theme for quick NativeScript proof-of-concepts.  
It adds some quick Minimalist Color Layers for dark/light mode.  
`*-base-[100/200/300]` for backgrounds. (Ex: `bg-base-200`)  
`*-[high/low/focus]` for text. (Ex: `text-high`)  
And defines some handy NS based responsive modifiers:   
```js
                                        // Example usage:
addVariant("l", ".ns-light &");         // l:bg-base-200
addVariant("d", ".ns-dark &");          // d:bg-base-100
addVariant("ios", ".ns-ios &");         // ios:py-10
addVariant("android", ".ns-android &"); // android:border-none
addVariant("tablet", ".ns-tablet &");   // tablet:w-48
```

# Install
Install peerDependencies as devDependencie
```
npm i -D tw-colors
```
Install as devDependencie
```
npm i -D @amj7/nativescript-tailwind-preset
```


### Example usage

In `tailwind.config.js`:
```js
const { colors, plugins } = require('@amj7/nativescript-tailwind-preset')()

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{css,xml,html,vue,svelte,ts,tsx}'],
  darkMode: ['class', '.ns-dark'],
  theme: {
    colors, // <-- THIS
  },
  plugins, // <-- THIS
  corePlugins: {
    preflight: false, // disables browser-specific resets
  },
}
```

Or use spread operator to mix with your stuff:

In `tailwind.config.js`:
```js
const { colors, plugins } = require('@amj7/nativescript-tailwind-preset')()

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{css,xml,html,vue,svelte,ts,tsx}'],
  darkMode: ['class', '.ns-dark'],
  theme: {
    colors: {
      ...colors, // <-- THIS
      ...yourStuff,
    },
  },
  plugins: [
    ...plugins, // <-- THIS
    yourPluginHere,
  ],
  corePlugins: {
    preflight: false,
  },
}
```

### Change theme
Use your own theme (see `default-theme.js` for example)

In `tailwind.config.js`:
```js
// define your theme file somewhere 
const { colors, plugins } = require('@amj7/nativescript-tailwind-preset')(
  require('./default-theme').ThemeColors
)
```
```js
// or inline
const { colors, plugins } = require('@amj7/nativescript-tailwind-preset')({
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
})
```