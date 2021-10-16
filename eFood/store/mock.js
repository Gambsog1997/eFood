import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { appendName } from "./slice";
// import LottieView from "lottie-react-native";

const Mock = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => dispatch(appendName("hehe"))}
      >
        {user.user}
      </Button>
    </View>
  );
};

export default Mock;

const styles = StyleSheet.create({});
