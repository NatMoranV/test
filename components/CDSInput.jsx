import { StyleSheet, Text, TextInput, View } from "react-native";
import { useTheme } from "../assets/ThemeContext";
import getSemanticTextStyles from "../assets/semanticTextStyles";
import { useState } from "react";

export default function StyledInput({ label, type, keyboard, placeholder }) {
  const { theme } = useTheme();
  const textStyles = getSemanticTextStyles(theme);
  const [text, setText] = useState("");

  return (
    <View style={[styles.container]}>
      <Text
        style={[
          textStyles.label,
        ]}
      >
        {label}
      </Text>
      {text === "" && (
        <Text style={[styles.fakePlaceholder, textStyles.inputText.placeholder]}>
          {placeholder}
        </Text>
      )}
      <TextInput
        style={[styles.textBox, textStyles.inputText.value, {backgroundColor:theme.surface.neutral.primary, borderColor: theme.outline.neutral.primary }]}
        keyboardType={keyboard}
        secureTextEntry={type === "password" ? true : false}
        onChangeText={setText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
  },

  fakePlaceholder: {
    position: "absolute",
    zIndex: 1,
    left: 14,
    top: 40,
  },

  textBox: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
});
