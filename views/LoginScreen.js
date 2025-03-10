import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
// import getSemanticTextStyles from "./semanticTextStyles";
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logoMonte.png")}
        style={{
          width: 120,
          aspectRatio: 1,
          resizeMode: "contain",
          position: "absolute",
          top: 90,
          alignSelf: "center",
        }}
        resizeMode="contain"
      />

      <StyledInput label={"Correo electrónico"} type={"email-address"} placeholder={'ejemplo@mail.com'} />
      <StyledInput label={"Contraseña"} type={"password"} placeholder={'N caracteres'} />

      <StyledButton
        label="Iniciar sesión "
        onPress={() => alert("Iniciado sesión")}
      />
      <StyledButton
        label="Crear cuenta "
        type="secondary"
        onPress={() => alert("Crear cuenta")}
      />
      <StyledButton
        label="Simular empeño "
        type="ghost"
        onPress={() => alert("Crear cuenta")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    maxWidth: 400,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 16,
  },
});

// <View
//   style={[
//     styles.container,
//     { backgroundColor: theme.surface.neutral.primary },
//   ]}
// >
//   <Text>
//     Esto es un{" "}
//     <Text style={{ color: textStyles.highlightText.color }}>
//       texto especial
//     </Text>{" "}
//     dentro de un Text.
//   </Text>

//   <Text style={textStyles.h1}>Esto es un h1</Text>
//   <Text style={textStyles.h2}>Esto es un h2</Text>
//   <Text style={textStyles.h3}>Esto es un h3</Text>
//   <Text style={textStyles.h4}>Esto es un h4</Text>

//   <StyledButton
//     label={"text"}
//     type="primary"
//     onPress={() => alert("test")}
//   />
//   <StyledButton
//     label={"Button 2"}
//     type="icon"
//     onPress={() => alert("test")}
//     icon={"home"}
//   />
// </View>
