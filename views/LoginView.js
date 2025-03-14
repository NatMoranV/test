import { View, Text, StyleSheet, Image, } from "react-native";

import {getSemanticTextStyles, CDSButton, CDSInput, useTheme, CDSSwitch} from "cds-library-test";
import { CDSOnboarding } from "../components/CDSOnboarding";


export default function LoginScreen() {
  const { theme, isDarkMode } = useTheme();
 

  
  const textStyles = getSemanticTextStyles(theme);

  return (
    <View
      style={[
        styles.container,
      ]}
    >
    
      <Image
        source={
          isDarkMode
            ? require("../assets/logoMonteTW.png")
            : require("../assets/logoMonte.png")
        }
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

      <View style={styles.inputsContainer}>
        <CDSInput
          label={"Correo electrónico"}
          keyboard={"email-address"}
          placeholder={"ejemplo@mail.com"}
        />
        <View style={styles.bottomInputContainer}>
          <CDSInput
            label={"Contraseña"}
            type={"password"}
            placeholder={"N caracteres"}
          />
          <CDSButton
            type="link"
            size="small"
            flexend={true}
            label={"Olvidé mi contraseña "}
          />
        </View>
        <CDSSwitch label={"Recordar correo"} />
      </View>

      <CDSButton
        label="Iniciar sesión "
        onPress={() => alert("Iniciado sesión")}
      />
      <CDSButton
        label="Crear cuenta "
        type="secondary"
        onPress={() => alert("Crear cuenta")}
      />
      <CDSButton
        style={{
          marginTop: 80}}
        label="Simular empeño "
        type="ghost"
        onPress={() => alert("Crear cuenta")}
      />
      <View style={styles.footer}>
        <View style={styles.helpContainer}>
          <Text style={textStyles.regular.sm}>Teléfonos de atención:</Text>
          <CDSButton type="link" size="small" label={"55 2629 2790 "} />
          <Text style={textStyles.regular.sm}>y</Text>
          <CDSButton type="link" size="small" label={"55 8890 9717 "} />
        </View>
        <Text style={textStyles.regular.xs}>Versión 11.8.0</Text>
      </View>
      {/* <CDSOnboarding /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  inputsContainer: {
    marginTop: 250,
    gap: 12,
    width: "100%",
    paddingBottom: 24,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 16,
  },

  bottomInputContainer: {
    gap: 12,
    marginBottom: 16,
  },

  footer: {
    marginTop: "auto",
    marginBottom: 24,
    gap: 8,
    alignItems: "center",
  },

  helpContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
