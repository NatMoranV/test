import { StyleSheet, Text, TextInput, View } from "react-native";
import { useTheme } from "../ThemeContext";
import getSemanticTextStyles from "../semanticTextStyles";

export default function StyledInput({ label, type, keyboard, placeholder }) {
  const { theme } = useTheme();
  const textStyles = getSemanticTextStyles(theme);
  return (
    <View style={[styles.container]}>
      <Text style={[textStyles.buttonText]}>{label}</Text>
      <TextInput style={[styles.textBox, {borderColor: theme.outline.neutral.primary,}]}
        keyboardType={keyboard}
        placeholder={placeholder}
        placeholderTextColor={theme.text.neutral.placeholder}

         secureTextEntry={type === 'password' ? true : false}
      />
    </View>
  );
}


  const styles = StyleSheet.create({
  
  container: {
    width: "100%",
    gap: 8,
  },

  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingLeft: 10,
    fontSize: 16,
    fontFamily: 'Roboto', // Estilo para el texto ingresado
  },

  placeholder: {
    fontFamily: 'Roboto',
    fontSize: 40,
  },

  textBox: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
});
