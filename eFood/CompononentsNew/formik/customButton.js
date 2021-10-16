import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../../assets/theme/colors";
import { useFormikContext } from "formik";
import React from "react";

const CustomButton = ({ title, handleAdd }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      color={colors.primary}
      mode="contained"
      onPress={() => {
        handleSubmit();
        handleAdd();
      }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
