import React from "react";
import { View, Image, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const images = [
  require("../assets/onboarding/image1.png"),
  require("../assets/onboarding/image2.png"),
  require("../assets/onboarding/image3.png"),
];

const SwipeableCarousel = ({ activeIndex, scrollViewRef, onScroll }) => {
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={{ width }} // Asegurar que el ScrollView ocupe toda la pantalla
        contentContainerStyle={{ width: width * images.length }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={{ width, height: 353, resizeMode: "contain" }}
          />
        ))}
      </ScrollView>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: activeIndex === index ? "black" : "gray",
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default SwipeableCarousel;
