export interface ThemeColors {
  [themeName: string]: {
    [colorName: string]: string;
  };
}

export interface NativeScriptTailwindConfig {
  colors: {
    [key: string]: string;
  };
  plugins: any[];
}

declare function createNativeScriptTailwindConfig(
  themeColors?: ThemeColors
): NativeScriptTailwindConfig;

export = createNativeScriptTailwindConfig;
