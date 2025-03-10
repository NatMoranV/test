const primitiveColors = {
  brand: {
    50: "#FEF5F8",
    100: "#FEECF2",
    150: "#FBB1C9",
    200: "#F98BAE",
    300: "#F76492",
    400: "#F53D77",
    500: "#F3165C",
    600: "#D50B4E",
    700: "#AE0940",
    800: "#880732",
    900: "#610524",
  },
  neutral: {
    0: "#FFFFFF",
    100: "#F9F9F9",
    200: "#F1F3F3",
    300: "#E8EAEB",
    400: "#D8DCDE",
    500: "#9DA5A9",
    600: "#586061",
    700: "#40484D",
    800: "#283238",
    850: "#36383B",
    900: "#0E1319",
    950: "#292B2D",
    975: "#1E1E1E",
    1000: "#000000",
  },
  blue: {
    100: "#EFF5FD",
    200: "#B1D1FB",
    250: "#A0BFE8",
    275: "#3780DF",
    300: "#0B63D5",
    350: "#063674",
  },
  green: {
    100: "#EFFDF5",
    200: "#A2EAC2",
    250: "#B5D0C1",
    300: "#0E8142",
    350: "#0A5C2F",
  },
  scarlet: {
    100: "#FCF0F0",
    200: "#F3BAB6",
    250: "#D9B5B5",
    300: "#C02121",
    350: "#831616",
  },
  marigold: {
    100: "#FFF7F0",
    200: "#FFD3AD",
    250: "#E7C3A6",
    300: "#E06900",
    350: "#A34D00",
  },
  brown: {
    100: "#F6F4F5",
    150: "#DAD2D3",
    200: "#C8BCBE",
    300: "#B6A5A8",
    400: "#A38F92",
    500: "#91787C",
    600: "#7B6568",
    700: "#655255",
    800: "#4F4043",
    900: "#3D292C",
    950: "#382E2F",
  },
  overlay: "rgba(0, 0, 0, 0.50)",
};




const primitiveFontValues = {
  
  family: {
    interRegular: 'Inter_400Regular',
    interSemiBold: 'Inter_600Semibold',
    interBold: 'Inter_700Bold',
    materialIcons: "Material Symbols Rounded",
  },

  size: {
    typography: {
      mobile: {
        xs: 12,
        sm: 14,
        md: 17,
        lg: 21,
        xl: 25,
        "2xl": 30,
        "3xl": 36,
      },
      desktop: {
        xs: 14,
        sm: 16,
        md: 21,
        lg: 27,
        xl: 36,
        "2xl": 47,
        "3xl": 61,
      },
    },
    iconography: {
      mobile: {
        xs: 14,
        sm: 18,
        md: 22,
        lg: 40,
      },
      desktop: {
        xs: 16,
        sm: 20,
        md: 24,
        lg: 48,
      },
    },
  },

  lineHeight: {
    mobile: {
      xs: 18,
      sm: 20,
      md: 24,
      lg: 28,
      xl: 31,
      "2xl": 38,
      "3xl": 44,
    },
    desktop: {
      xs: 18,
      sm: 22,
      md: 28,
      lg: 35,
      xl: 43,
      "2xl": 56,
      "3xl": 71,
    },
  },
};

export { primitiveColors, primitiveFontValues };
