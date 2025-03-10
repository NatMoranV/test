import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions, Platform } from "react-native";
import  getSemanticTextStyles from "../semanticTextStyles";

const { width } = Dimensions.get("window");
const isMobile = width <= 1024 && Platform.OS !== "web";

const StyledButton = ({ label, type = "primary", onPress, icon }) => {
  const { theme } = useTheme();
  const textStyles = getSemanticTextStyles(theme);

  const backgroundColor =
    type === "disabled"
      ? theme.surface.action.disabled
      : type === "secondary" || type === "ghost"
      ? "transparent"
      : theme.surface.action.primary;

  const textColor =
    type === "secondary" || type === "ghost"
      ? theme.text.neutral.primary
      : type === "disabled"
      ? theme.text.neutral.disabled
      : theme.text.neutral.contrast;

  return (
    <TouchableOpacity
      onPress={type !== "disabled" ? onPress : null}
      activeOpacity={0.8}
      style={[
        styles.container,
        { backgroundColor },
        isMobile && type !== "icon"
          ? { width: "100%" }
          : { paddingHorizontal: 12 },
        type === "secondary" && {
          borderColor: theme.outline.action.primary,
          borderWidth: 1,
        },
      ]}
    >
      {type !== "icon" && (
        <Text style={[styles.text, textStyles.buttonText, { color: textColor }]}>{label}</Text>
      )}
      {icon && <MaterialIcons name={icon} size={textStyles.icon.fontSize} color={textColor} />}
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

export default StyledButton;
