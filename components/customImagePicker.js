import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

const CustomImagePicker = () => {
  const requestPermission = async () => {
    const request = await ImagePicker.requestCameraRollPermissionsAsync();
    console.log(request);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hahaha</Text>
    </View>
  );
};

export default CustomImagePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
