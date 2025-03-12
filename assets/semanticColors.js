import { primitiveColors } from "./primitiveTokens";
import { Dimensions, Platform } from "react-native";
const { width } = Dimensions.get("window");

const semanticColors = {
  light: {
    logo:{
      source:"../assets/logoMonte.png"
    },
    icon: {
      neutral: {
        primary: primitiveColors.neutral[800],
        secondary: primitiveColors.neutral[0],
        tertiary: primitiveColors.neutral[200],
        primaryVariant: primitiveColors.neutral[300],
        tertiaryVariant: primitiveColors.neutral[600],
        secondaryVariant: primitiveColors.neutral[100],
      },
      brand: {
        primary: primitiveColors.brand[600],
      },
      feedback: {
        info: primitiveColors.blue[300],
        success: primitiveColors.green[300],
        warning: primitiveColors.marigold[300],
        error: primitiveColors.scarlet[300],
      },
    },
    surface: {
      action: {
        disabled: primitiveColors.neutral[400],
        primary: primitiveColors.neutral[800],
        pressed: primitiveColors.neutral[200],
      },
      feedback: {
        info: primitiveColors.blue[100],
        success: primitiveColors.green[100],
        warning: primitiveColors.marigold[100],
        error: primitiveColors.scarlet[100],
      },
      neutral: {
        primary: primitiveColors.neutral[0],
        tertiary: primitiveColors.neutral[200],
        primaryVariant: primitiveColors.neutral[300],
        tertiaryVariant: primitiveColors.neutral[600],
        secondary: primitiveColors.neutral[100],
      },
      background: {
        default: primitiveColors.brown[100],
      },
      special: {
        overlay: primitiveColors.overlay[100],
        scroll: primitiveColors.neutral[400],
        tooltip: primitiveColors.neutral[500],
        progress: primitiveColors.brand[600],
        progressbarBg: primitiveColors.neutral[400],
        display: primitiveColors.neutral[800],
        footer: primitiveColors.neutral[800],
        illustrationIdCardDevice: primitiveColors.neutral[400],
        illustrationIdCard: primitiveColors.neutral[500],
      },
    },
    outline: {
      brand: {
        primary: primitiveColors.brand[600],
        secondary: primitiveColors.brand[400],
        tertiary: primitiveColors.brand[50],
      },
      action: {
        disabled: primitiveColors.neutral[400],
        primary: primitiveColors.neutral[800],
      },
      neutral: {
        focus: primitiveColors.neutral[800],
        tertiary: primitiveColors.neutral[600],
        primary: primitiveColors.neutral[300],
        secondary: primitiveColors.neutral[400],
        primaryVariant: primitiveColors.neutral[200],
        tertiaryVariant: primitiveColors.neutral[500],
      },
      feedback: {
        info: primitiveColors.blue[300],
        success: primitiveColors.green[300],
        warning: primitiveColors.marigold[300],
        error: primitiveColors.scarlet[300],
      },
    },
    text: {
      neutral: {
        primary: primitiveColors.neutral[800],
        contrast: primitiveColors.neutral[0],
        disabled: primitiveColors.neutral[500],
        secondary: primitiveColors.neutral[600],
        tertiary: primitiveColors.neutral[900],
        placeholder: primitiveColors.neutral[500],
      },
      brand: {
        primary: primitiveColors.brand[600],
        secondary: primitiveColors.brand[400],
        tertiary: primitiveColors.brand[800],
      },
      feedback: {
        info: primitiveColors.blue[300],
        success: primitiveColors.green[300],
        warning: primitiveColors.marigold[300],
        error: primitiveColors.scarlet[300],
      },
    },
  },
  dark: {
    logo:{
      source:'../assets/logoMonteW.png'
    },
    icon: {
      neutral: {
        primary: primitiveColors.neutral[200],
        secondary: primitiveColors.neutral[1000],
        tertiary: primitiveColors.neutral[200],
        primaryVariant: primitiveColors.neutral[700],
        tertiaryVariant: primitiveColors.neutral[600],
        secondaryVariant: primitiveColors.neutral[975],
      },
      brand: {
        primary: primitiveColors.brand[150],
      },
      feedback: {
        info: primitiveColors.blue[350],
        success: primitiveColors.green[350],
        warning: primitiveColors.marigold[350],
        error: primitiveColors.scarlet[350],
      },
    },
    surface: {
      action: {
        disabled: primitiveColors.neutral[600],
        primary: primitiveColors.neutral[200],
      },
      feedback: {
        info: primitiveColors.blue[250],
        success: primitiveColors.green[250],
        warning: primitiveColors.marigold[250],
        error: primitiveColors.scarlet[250],
      },
      neutral: {
        primary: primitiveColors.neutral[950],
        tertiary: primitiveColors.neutral[200],
        primaryVariant: primitiveColors.neutral[700],
        tertiaryVariant: primitiveColors.neutral[600],
        secondary: primitiveColors.neutral[975],
      },
      background: {
        default: primitiveColors.neutral[950],
      },
      special: {
        overlay: primitiveColors.overlay[100],
        scroll: primitiveColors.neutral[400],
        tooltip: primitiveColors.neutral[500],
        progress: primitiveColors.brand[600],
        progressbarBg: primitiveColors.neutral[400],
        display: primitiveColors.neutral[800],
        footer: primitiveColors.neutral[800],
        illustrationIdCardDevice: primitiveColors.neutral[400],
        illustrationIdCard: primitiveColors.neutral[500],
      },
    },
    outline: {
      brand: {
        primary: primitiveColors.brand[500],
        secondary: primitiveColors.brand[150],
        tertiary: primitiveColors.brand[900],
      },
      action: {
        disabled: primitiveColors.neutral[600],
        primary: primitiveColors.neutral[200],
      },
      neutral: {
        focus: primitiveColors.neutral[0],
        tertiary: primitiveColors.neutral[200],
        primary: primitiveColors.neutral[700],
        secondary: primitiveColors.neutral[800],
        primaryVariant: primitiveColors.neutral[600],
        tertiaryVariant: primitiveColors.neutral[500],
      },
      feedback: {
        info: primitiveColors.blue[350],
        success: primitiveColors.green[350],
        warning: primitiveColors.marigold[350],
        error: primitiveColors.scarlet[350],
      },
    },
    text: {
      neutral: {
        primary: primitiveColors.neutral[200],
        contrast: primitiveColors.neutral[1000],
        disabled: primitiveColors.neutral[850],
        secondary: primitiveColors.neutral[400],
        tertiary: primitiveColors.neutral[100],
        placeholder: primitiveColors.neutral[300],
      },
      brand: {
        primary: primitiveColors.brand[150],
        secondary: primitiveColors.brand[700],
        tertiary: primitiveColors.brand[900],
      },
      feedback: {
        info: primitiveColors.blue[350],
        success: primitiveColors.green[350],
        warning: primitiveColors.marigold[350],
        error: primitiveColors.scarlet[350],
      },
    },
  },
};

export { semanticColors };
