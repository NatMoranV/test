import React from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const PaginationDots = ({ data, scrollX, itemWidth }) => {
  const dotWidth = 10; // Ancho de cada dot
  const spacing = 5; // Espaciado entre dots

  // Calcular la posición del dot activo
  const translateX = scrollX.interpolate({
    inputRange: data.map((_, index) => index * itemWidth),
    outputRange: data.map((_, index) => index * (dotWidth + spacing)),
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      {/* Dots estáticos */}
      {data.map((_, index) => (
        <View key={index} style={styles.dot} />
      ))}

      {/* Dot animado que se mueve */}
      <Animated.View
        style={[styles.activeDot, { transform: [{ translateX }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    position: "relative",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
    position: "absolute",
    left: 0,
  },
});

export default PaginationDots;
