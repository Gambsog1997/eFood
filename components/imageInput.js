import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

const CustomImageInput = () => {
  const [imgUrl, setImgUrl] = useState("");

  const onPress = async () => {
    const request = await Location.requestPermissionsAsync();
    if (request.granted) {
      console.log(await Location.getLastKnownPositionAsync());
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name="camera"
        size={50}
        color="rgb(82, 158, 58)"
      />
    </TouchableOpacity>
  );
};

export default CustomImageInput;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(82, 58, 58)",
    borderRadius: 20,
  },
});
