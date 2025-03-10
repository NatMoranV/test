import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import StyledButton from "./components/StyledButton";
import { View, StyleSheet, Text } from "react-native";
import getSemanticTextStyles from "./semanticTextStyles";
import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import SplashScreen from "./views/SplashScreen";
import LoginScreen from "./views/LoginScreen";
const Stack = createStackNavigator();

const AppContent = () => {
  // const { theme } = useTheme();
  // const textStyles = getSemanticTextStyles(theme);

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            // Opciones específicas para la pantalla Splash (puedes dejar esto vacío si no quieres cambiar nada)
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid, // Transición específica para Login
            transitionSpec: {
              open: {
                animation: "timing",
                config: {
                  duration: 100, // Duración de la transición
                },
              },
              close: {
                animation: "timing",
                config: {
                  duration: 150, // Duración de la animación al cerrar
                },
              },
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <AppContent />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
});

export default App;
