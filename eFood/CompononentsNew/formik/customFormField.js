import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../../../assets/theme/colors";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDimensions } from "@react-native-community/hooks";
import { useTheme } from "react-native-paper";

const CustomFormField = ({ name, placeholder, icon, keyboardType }) => {
  const { handleChange } = useFormikContext();
  const { height, width } = useDimensions().screen;
  const { fonts } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          width: width * 0.8,
          height: height * 0.053,
        },
      ]}
    >
      <MaterialCommunityIcons
        name={icon}
        // name="high-definition"
        size={25}
        color={colors.primary}
        style={{
          padding: 10,
        }}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.secondary}
        style={{
          color: colors.background,
          fontFamily: fonts.light.fontFamily,
          fontSize: 18,
        }}
        onChangeText={handleChange(name)}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomFormField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.error,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    color: colors.primary,
  },
});
