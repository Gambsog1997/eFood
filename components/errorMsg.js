import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ErrorMsg = ({ error, visible }) => {
  return <View>{visible && <Text style={styles.text}>{error}</Text>}</View>;
};

export default ErrorMsg;

const styles = StyleSheet.create({
  text: {
    color: "red",
    margin: 2,
  },
});
