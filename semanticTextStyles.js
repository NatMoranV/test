import { primitiveFontValues} from "./primitiveTokens";
import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const isMobile = width <= 1024 && Platform.OS !== 'web'; 

const getSemanticTextStyles = (theme) => ({

  h1: {
    fontFamily: primitiveFontValues.family.interBold,
    fontSize: isMobile ? primitiveFontValues.size.typography.mobile["3xl"] : primitiveFontValues.size.typography.desktop["3xl"],
    color: theme.text.neutral.primary,
  },
  h2: {
    fontFamily: primitiveFontValues.family.interBold,
    fontSize: isMobile ? primitiveFontValues.size.typography.mobile["2xl"] : primitiveFontValues.size.typography.desktop["2xl"],
    color: theme.text.neutral.primary,
  },
  h3: {
    fontFamily: primitiveFontValues.family.interBold,
    fontSize: isMobile ? primitiveFontValues.size.typography.mobile.xl : primitiveFontValues.size.typography.desktop.xl,
    color: theme.text.neutral.primary,
  },
  h4: {
    fontFamily: primitiveFontValues.family.interBold,
    fontSize: isMobile ? primitiveFontValues.size.typography.mobile.lg : primitiveFontValues.size.typography.desktop.lg,
    color: theme.text.neutral.primary,
  },

  buttonText:{
    fontFamily: primitiveFontValues.family.interBold,
    fontSize: isMobile ? primitiveFontValues.size.typography.mobile.md : primitiveFontValues.size.typography.desktop.md,
  },

  icon:{
    fontSize: isMobile ? primitiveFontValues.size.iconography.mobile.sm : primitiveFontValues.size.iconography.desktop.sm,
  },

  highlightText:{
    color: theme.text.brand.primary,
  },
  // h5: {
  //   fontFamily: primitiveFontValues.family.interBold,
  //   fontSize: isMobile ? primitiveFontValues.size.typography.mobile.md : primitiveFontValues.size.typography.desktop.md,
  // },
  // h6: {
  //   fontFamily: primitiveFontValues.family.interBold,
  //   fontSize: isMobile ? primitiveFontValues.size.typography.mobile.sm : primitiveFontValues.size.typography.desktop.sm,
  // },

})


export default getSemanticTextStyles

