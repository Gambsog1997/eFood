import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MyList = ({ direction, Component, data, ...restProps }) => {
  const renderRightActions = (params) => {
    return (
      <View style={styles.delete}>
        <MaterialCommunityIcons size={50} name="delete-circle" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={description}
        keyExtractor={(dataValue) => {
          return dataValue.id.toString();
        }}
        renderItem={({ item, separators }) => {
          return <Component {...restProps} />;
        }}
        horizontal={direction}
        renderRightActions={renderRightActions}
      />
    </View>
  );
};

export default MyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 10,
  },
  delete: {
    width: "25%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
