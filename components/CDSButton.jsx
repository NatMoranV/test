import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Dimensions, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../assets/ThemeContext";
import getSemanticTextStyles from "../assets/semanticTextStyles";

const { width } = Dimensions.get("window");
const isMobile = width <= 878 && Platform.OS !== "web";

const CDSButton = ({
  label,
  type = "primary",
  size,
  onPress,
  icon,
  flexend,
}) => {
  const { theme } = useTheme();
  const textStyles = getSemanticTextStyles(theme);

  const backgroundColor =
    type === "disabled"
      ? theme.surface.action.disabled
      : type === "secondary" || type === "ghost" || type === "link"
      ? "transparent"
      : theme.surface.action.primary;

  const textColor =
    type === "secondary" || type === "ghost" || type === "link"
      ? theme.text.neutral.primary
      : type === "disabled"
      ? theme.text.neutral.disabled
      : theme.text.neutral.contrast;

  return (
    <TouchableOpacity
      onPress={type !== "disabled" ? onPress : null}
      activeOpacity={0.7}
      style={[
        styles.container,
        { backgroundColor },
        flexend && { justifyContent: "flex-end", paddingHorizontal: 0 },
        isMobile && type !== "icon"
          ? { width: "100%" }
          : { paddingHorizontal: 12 },
        type === "secondary" && {
          borderColor: theme.outline.action.primary,
          borderWidth: 1,
        },
        type === 'link' && {
          paddingHorizontal: 0,
          paddingVertical: 0,
          width: 'auto',
        }
      ]}
    >
      {type !== "icon" && (
        <Text
          style={[
            styles.text,
            type === "link"
              ? size === "small"
                ? textStyles.link.small
                : textStyles.link.regular
              : textStyles.buttonText,
            { color: textColor },
          ]}
        >
          {label}
        </Text>
      )}
      {icon && (
        <MaterialIcons
          name={icon}
          size={textStyles.icon.fontSize}
          color={textColor}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    gap: 8,
  },
});

export default CDSButton;
