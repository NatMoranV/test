import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import React from "react";
import  {ThemeProvider, useTheme } from "cds-library-test";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import SplashView from "./views/SplashView";
import LoginView from "./views/LoginView";
const Stack = createStackNavigator();


const AppContent = () => {

  const { theme } = useTheme();
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }




  return (
    <NavigationContainer theme={{ colors: { background: theme.surface.background.default } }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen
          name="Splash"
          component={SplashView}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        /> */}
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            transitionSpec: {
              open: {
                animation: "timing",
                config: {
                  duration: 100,
                },
              },
              close: {
                animation: "timing",
                config: {
                  duration: 150,
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

export default App;
