import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SingleListWithIcon = ({ desc, iconName, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} underlayColor="black">
        <MaterialCommunityIcons size={30} name={iconName} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={onPress}>
        <Text style={styles.text}>{desc}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SingleListWithIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 5,
    // backgroundColor: "rgb(179, 243, 200)",
    marginRight: 10,
  },
  iconContainer: {
    width: "20%",
    height: 50,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(179, 243, 245)",
    borderRadius: 20,
  },
  icon: {
    color: "rgb(66, 192, 27)",
  },
  textContainer: {
    flex: 1,
    height: 50,
    alignItems: "flex-start",
    justifyContent: "center",
    margin: 4,
    padding: 10,
    backgroundColor: "rgb(179, 243, 245)",
    paddingLeft: 20,
    borderRadius: 20,
  },
  text: {
    fontStyle: "normal",
    fontSize: 16,
  },
});
