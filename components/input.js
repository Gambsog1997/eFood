import React, { useState } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomInput = ({ name }) => {
  const [value, setvalue] = useState("");
  const [size, setsize] = useState(20);

  const onChangeText = (value) => {
    setsize(0);
    if (value === "") {
      setsize(20);
    }
    setvalue(value);
  };

  return (
    <View style={styles.inputContainer}>
      <MaterialCommunityIcons size={size} name={name} style={styles.label} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(value) => {
          onChangeText(value);
        }}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 5,
    padding: 10,
  },
  input: {
    borderColor: "green",
    borderWidth: 1,
    flex: 1,
    borderRadius: 5,
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "courier",
    padding: 6,
    height: 40,
  },
  label: {
    color: "green",
    left: 25,
  },
});
