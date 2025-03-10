import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useRef, useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "../ThemeContext";

export default function SplashScreen({ navigation }) {
  const { theme } = useTheme();
  const animation = useRef(null);
  const translateY = useSharedValue(0); // Definir un sharedValue para la posición vertical.
  const size = useSharedValue(200); // Definir un sharedValue para el tamaño inicial.
  const backgroundOpacity = useSharedValue(1);
  useEffect(() => {
    // Después de 6 segundos, mover la animación hacia arriba y cambiar el tamaño.
    setTimeout(() => {
      translateY.value = withTiming(-350, { duration: 1000 }); // Mover hacia arriba
      size.value = withTiming(120, { duration: 1000 }); // Reducir el tamaño
      backgroundOpacity.value = withTiming(0, { duration: 1000 });
      // Esperar 1 segundo más antes de hacer el cambio de pantalla
      setTimeout(() => {
        navigation.replace("Login");
      }, 600);
    }, 6000); // Esperar 6 segundos antes de la animación
  }, [translateY, size]);

  // Aplicar el estilo animado para la animación
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      width: size.value, // Usar el tamaño animado
      height: size.value, // Usar el tamaño animado
    };
  });

  return (
    <View style={styles.background}>
      <View
        style={[
          styles.animationContainer,
          { backgroundColor: theme.surface.special.progress },
        ]}
      >
        <Animated.View
          style={[
            { justifyContent: "center", alignItems: "center" },
            animatedStyle,
          ]}
        >
          <LottieView
            autoPlay
            loop={false}
            source={require("../assets/animation.json")}
            style={{ width: "100%", height: "100%" }} // Usar 100% del tamaño del contenedor
          />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animationContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
});
