# Install
Install peerDependencies as devDependencie
```
npm i -D tw-colors
```
Install as devDependencie
```
npm i -D @amj7/nativescript-tailwind-preset
```


## Example usage

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