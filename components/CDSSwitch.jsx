import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useTheme } from "../assets/ThemeContext";
import getSemanticTextStyles from "../assets/semanticTextStyles";

export default function CDSSwitch({ label }) {
  const { theme } = useTheme();
  const textStyles = getSemanticTextStyles(theme);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={textStyles.label}>
        {label}
      </Text>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
