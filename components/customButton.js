import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  title,
  fontSize,
  color,
  backColor,
  moreStyle,
  ...restProps
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: backColor },
        { ...moreStyle },
      ]}
      onPress={onPress}
      {...restProps}
    >
      <Text
        style={[styles.text, { fontSize: fontSize, color: color }]}
        {...restProps}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "40%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "dodgerblue",
    paddingHorizontal: 10,
    alignItems: "center",
    marginVertical: 3,
  },
});
