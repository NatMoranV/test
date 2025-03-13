import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, Dimensions, StyleSheet } from "react-native";
import CDSButton from "./CDSButton";

import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../assets/ThemeContext";
import getSemanticTextStyles from "../assets/semanticTextStyles";

const { height } = Dimensions.get("window");

const CDSBottomSheet = ({
  type,
  isVisible,
  hasClose,
  title = "title",
  description = "desc",
  customSlot,
  primaryButtonLabel,
  primaryButtonOnPress,
  secondaryButtonLabel = "Cancelar",
  onFinish,
}) => {
  const { theme } = useTheme();
  const textStyles = getSemanticTextStyles(theme);

  const [modalVisible, setModalVisible] = useState(isVisible);
  const [modalOpacity] = useState(new Animated.Value(0));
  const [slidePosition] = useState(new Animated.Value(height));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(modalOpacity, {
        toValue: modalVisible ? 1 : 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slidePosition, {
        toValue: modalVisible ? 0 : height,
        duration: modalVisible ? 500 : 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [modalVisible]);

  return (
    <Animated.View
      style={[
        styles.overlay,
        {
          opacity: modalOpacity,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.surface.special.overlay
        },
      ]}
      onPress={() => setModalVisible(!modalVisible)}
    >
      <Animated.View
        style={[
          styles.centeredView,
          { transform: [{ translateY: slidePosition }] },
        ]}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, {backgroundColor: theme.surface.neutral.primary}]}>
            {hasClose && (
              <MaterialIcons
                name={"close"}
                size={textStyles.icon.fontSize}
                color={"red"}
                style={{ position: "absolute", right: 16, top: 16 }}
              />
            )}
            {title && <Text style={textStyles.bold.lg}>{title}</Text>}
            {description && (
              <Text style={textStyles.regular.md}>{description}</Text>
            )}
            {customSlot && <View>{customSlot}</View>}
            {type !== "informative" && (
              <View style={styles.actionsContainer}>
                <CDSButton
                  label={primaryButtonLabel}
                  onPress={
                    onFinish
                      ? () => setModalVisible(!modalVisible)
                      : primaryButtonOnPress
                  }
                />
                <CDSButton
                  label={secondaryButtonLabel}
                  type="ghost"
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
            )}
          </View>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "110%",
    height: "104.4%",
    zIndex: 100,
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 16,
  },
  actionsContainer: {
    flex: "row",
    width: "100%",
    gap: 8,
  },

});

export default CDSBottomSheet;
