import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import VendorTodoItem from "./vendorTodoItem";
import { routes } from "../Navigation/routes";

const vendorActivities = [
  {
    image: require("../../assets/images/variety.jpg"),
    title: "Food",
    subtitle: "Add Food to the List",
    label: "F",
    nextPage: routes.vendor.foodList,
    btnText: "Add",
    icon: "plus-outline",
  },
  {
    image: require("../../assets/images/10-common-mistakes-waiters-make-6a4a88eeb1852ea87d0744184570263a.jpg"),
    title: "Orders",
    subtitle: "Check the orders",
    label: "O",
    nextPage: "",
    btnText: "View",
    icon: "eye",
  },
];

const HomeVendor = () => {
  return (
    <View style={[styles.container]}>
      <FlatList
        data={vendorActivities}
        renderItem={({ item }) => {
          return (
            <VendorTodoItem
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              label={item.label}
              nextPage={item.nextPage}
              btnText={item.btnText}
              icon={item.icon}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeVendor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
