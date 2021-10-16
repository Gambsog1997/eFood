import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDimensions } from "@react-native-community/hooks";
import { useFormikContext } from "formik";

const CustomPicker = ({ prompt, items, food }) => {
  const { width } = useDimensions().screen;
  const { handleChange, setFieldValue } = useFormikContext();

  return (
    <View style={[styles.container, { width: width - width / 5 }]}>
      <Picker
        mode="dialog"
        prompt={prompt}
        itemStyle={{
          marginHorizontal: 20,
        }}
        onValueChange={({ itemValue, itemIndex }) => {
          handleChange(itemValue);
          setFieldValue(food.value);
          setItem(itemValue);
        }}
        style={styles.picker}
      >
        {items.map((item) => {
          return (
            <Picker.Item
              label={item.label}
              value={item.value}
              style={styles.picker}
            />
          );
        })}
      </Picker>
    </View>
  );
};

export default CustomPicker;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 35,
    borderColor: "rgb(202, 215, 224)",
    alignItems: "stretch",
    borderRadius: 5,
    backgroundColor: "rgba(207, 216, 204, 0.501)",
    justifyContent: "center",
    marginBottom: 5,
  },
  picker: {
    fontSize: 18,
  },
});
