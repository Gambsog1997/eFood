import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const CustomList = ({
  title,
  subtitle,
  image,
  renderRightActions,
  children,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={image} style={styles.img} resizeMode="contain" />
        </View>
        {children}
        <View style={styles.desc}>
          <Text style={styles.descTitle}>{title}</Text>
          <Text style={styles.descSubTitle}>{subtitle}</Text>
        </View>
        <StatusBar barStyle="dark-content" />
      </View>
    </Swipeable>
  );
};

export default CustomList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    margin: 5,
    borderRadius: 10,
  },
  img: {
    borderRadius: 70,
    width: 120,
    height: 80,
  },
  imgContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  desc: {
    flex: 3,
    margin: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 10,
  },
  descTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    margin: 5,
    overflow: "scroll",
  },
  descSubTitle: {
    color: "skyblue",
    padding: 10,
    margin: 5,
    overflow: "scroll",
  },
});
