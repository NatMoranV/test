import React, { act, useRef, useState } from "react";
import { Dimensions } from "react-native";
import CDSBottomSheet from "./CDSBottomSheet";
import CDSCarousel from "./CDSCarousel";



const { width } = Dimensions.get("window");

const images = [
  "../assets/onboarding/image1.png",
  "../assets/onboarding/image2.png",
  "../assets/onboarding/image3.png",
];

export const CDSOnboarding = () => {
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
    setIsLastSlide(index === images.length - 1);
  };

  console.log(activeIndex);

  const handleNext = () =>
    !isLastSlide &&
    scrollViewRef.current.scrollTo({
      x: (activeIndex + 1) * width,
      animated: true,
    });

  return (
    <CDSBottomSheet
      isVisible
      customSlot={
        <CDSCarousel
          activeIndex={activeIndex}
          scrollViewRef={scrollViewRef}
          onScroll={handleScroll}
        />
      }
      title={
        (activeIndex === 0 && "Tus boletas en un solo lugar") ||
        (activeIndex === 1 && "Realiza tus pagos") ||
        (activeIndex === 2 && "Tu eliges cuánto pagar")
      }
      description={
        (activeIndex === 0 &&
          "Conoce el estado general de tus boletas y dales seguimiento desde la aplicación.") ||
        (activeIndex === 1 &&
          "Puedes refrendar o pagar tus desempeños con diferentes métodos de pago.") ||
        (activeIndex === 2 &&
          "Con “Pagos libres” elige la cantidad, reduce los intereses y abona a capital desde el primer día.")
      }
      primaryButtonLabel={!isLastSlide ? "Siguiente" : "Finalizar"}
      primaryButtonOnPress={handleNext}
      onFinish={isLastSlide && true}
      secondaryButtonLabel="Ahora no"
    />
  );
};
