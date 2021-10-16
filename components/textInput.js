import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { colors } from "../assets/theme/colors";

const CustomTextInput = ({
  icon,
  placeholder,
  containerStyle,
  onChangeText,
  handleBlur,
  value,
  keyboardType,
  ref,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <MaterialCommunityIcons
        name={icon}
        size={25}
        style={styles.label}
        value={value}
        color={colors.primary}
      />
      <TextInput
        placeholderTextColor={colors.secondary}
        placeholder={placeholder}
        style={styles.input}
        autoCompleteType="off"
        onChangeText={onChangeText}
        handleBlur={handleBlur}
        keyboardType={keyboardType}
        color={colors.primary}
        ref={ref}
        {...rest}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 45,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgba(207, 216, 204, 0.501)",
    borderRadius: 10,
    marginVertical: 15,
  },
  label: {
    marginLeft: 5,
  },
  input: { margin: 2, fontSize: 15, marginLeft: 5 },
});
