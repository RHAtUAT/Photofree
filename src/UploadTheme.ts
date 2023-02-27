import { Theme } from "@aws-amplify/ui-react";

export const UploadTheme: Theme = {
  name: 'upload-theme',
  tokens: {
    colors: {
      neutral: {
        10: { value: "hsl(210, 5%, 98%)" },
        20: { value: "hsl(210, 5%, 94%)" },
        40: { value: "hsl(210, 5%, 87%)" },
        60: { value: "hsl(210, 6%, 70%)" },
        80: { value: "hsl(210, 10%, 40%)" },
        90: { value: "hsl(210, 25%, 25%)" },
        100: { value: "hsl(210, 50%, 10%)" },
      },
      brand: {
        primary: {
          10: { value: "{colors.teal.10.value}" },
          20: { value: "{colors.teal.20.value}" },
          40: { value: "{colors.teal.40.value}" },
          60: { value: "{colors.teal.60.value}" },
          80: { value: "{colors.teal.80.value}" },
          90: { value: "{colors.teal.90.value}" },
          100: { value: "{colors.teal.100.value}" },
        },
        secondary: {
          10: { value: "{colors.purple.10.value}" },
          20: { value: "{colors.purple.20.value}" },
          40: { value: "{colors.purple.40.value}" },
          60: { value: "{colors.purple.60.value}" },
          80: { value: "{colors.purple.80.value}" },
          90: { value: "{colors.purple.90.value}" },
          100: { value: "{colors.purple.100.value}" },
        },
      },
      font: {
        primary: { value: "{colors.neutral.100.value}" },
        secondary: { value: "{colors.neutral.90.value}" },
        tertiary: { value: "{colors.neutral.80.value}" },
        disabled: { value: "{colors.font.tertiary.value}" },
        inverse: { value: "{colors.white.value}" },
        interactive: { value: "{colors.brand.primary.80.value}" },
        hover: { value: "{colors.brand.primary.90.value}" },
        focus: { value: "{colors.brand.primary.100.value}" },
        active: { value: "{colors.brand.primary.100.value}" },
        info: { value: "{colors.blue.90.value}" },
        warning: { value: "{colors.orange.90.value}" },
        error: { value: "{colors.red.90.value}" },
        success: { value: "{colors.green.90.value}" },
      },
      background: {
        primary: { value: "{colors.neutral.20.value}" },
        secondary: { value: "{colors.neutral.10.value}" },
        tertiary: { value: "{colors.neutral.20.value}" },
        disabled: { value: "{colors.background.tertiary.value}" },
        info: { value: "{colors.blue.20.value}" },
        warning: { value: "{colors.orange.20.value}" },
        error: { value: "{colors.red.20.value}" },
        success: { value: "{colors.green.20.value}" },
      },
      border: {
        primary: { value: "{colors.neutral.60.value}" },
        secondary: { value: "{colors.neutral.40.value}" },
        tertiary: { value: "{colors.neutral.20.value}" },
        disabled: { value: "{colors.border.tertiary.value}" },
        focus: { value: "{colors.brand.primary.100.value}" },
        error: { value: "{colors.red.80.value}" },
      },
      shadow: {
        primary: { value: "hsla(210, 50%, 10%, 0.25)" },
        secondary: { value: "hsla(210, 50%, 10%, 0.15)" },
        tertiary: { value: "hsla(210, 50%, 10%, 0.05)" },
      },
      overlay: {
        10: { value: "hsla(0, 0%, 0%, 0.1)" },
        20: { value: "hsla(0, 0%, 0%, 0.2)" },
        30: { value: "hsla(0, 0%, 0%, 0.3)" },
        40: { value: "hsla(0, 0%, 0%, 0.4)" },
        50: { value: "hsla(0, 0%, 0%, 0.5)" },
        60: { value: "hsla(0, 0%, 0%, 0.6)" },
        70: { value: "hsla(0, 0%, 0%, 0.7)" },
        80: { value: "hsla(0, 0%, 0%, 0.8)" },
        90: { value: "hsla(0, 0%, 0%, 0.9)" },
      },
      black: { value: "hsl(0, 0%, 0%)" },
      white: { value: "hsl(0, 0%, 100%)" },
      transparent: { value: "transparent" },
    },
    borderWidths: {
      small: { value: '2px' },
      medium: { value: '4px' },
      // large: { value: '8px' },
    },
    radii: {
      // xs: { value: '1rem' },
      small: { value: '1.5rem' },
      // medium: { value: '2rem' },
      // large: { value: '2rem' },
      // xl: { value: '3rem' },
    },
  },
};