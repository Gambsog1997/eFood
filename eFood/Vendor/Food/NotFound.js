import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../../assets/theme/colors";
import { useTheme } from "react-native-paper";

const NotFound = () => {
  const { fonts } = useTheme();
  return (
    <View style={[styles.container]}>
      <MaterialCommunityIcons name="food-off" size={100} color={colors.error} />
      <Text
        style={{
          fontFamily: fonts.light.fontFamily,
          fontSize: 20,
          color: colors.secondary,
        }}
      >
        Not Found
      </Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
