import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

const CustomAlert = ({ title, subtitle, okText, cancelText = "Deny" }) => {
  return Alert.alert(title, subtitle, [
    {
      text: okText,
      onPress: () => {
        console.log("ok clicked");
      },
    },
    {
      text: cancelText,
      onPress: () => {
        console.log("cancel clicked");
      },
    },
  ]);
};

export default CustomAlert;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    backgroundColor: "red",
  },
});
