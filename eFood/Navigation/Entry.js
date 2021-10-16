import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "../Entry/landingPage";
import { routes } from "./routes";
import Login from "../../components/forms/login";
import Register from "../Entry/registerCustomer";
import HomeCustomer from "../Vendor/homeVendor";
import cache from "../Cache/cache";
import NotFound from "../Vendor/Food/NotFound";
import Food from "../Vendor/Food/FoodItem";

const Stack = createStackNavigator();

const Landing = () => {
  return <LandingPage />;
};

const CustomerReg = () => {
  return <Register />;
};

const LoginPage = ({ navigation }) => {
  return (
    <Login
      header="I-VENDORS"
      icon="account"
      login={(res) => {
        if (res.data.role === "customer") {
          cache.store(`cust`, res.data);
          navigation.navigate("homeCustomer");
        } else if (res.data.role === "vendor") {
          cache.store(`vendor`, res.data);
          navigation.navigate("vendorHome");
        } else {
          console.log("====================================");
          console.log("Not found");
          console.log("====================================");
        }
      }}
      register={() => {
        navigation.navigate(routes.entry.register.customer);
      }}
    />
  );
};

const EntryStack = (params) => {
  const { entry, vendor } = routes;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={entry.landing}
        component={Landing}
        options={{
          header: () => {
            return null;
          },
        }}
      />
      <Stack.Screen
        name={entry.login}
        component={LoginPage}
        options={{
          header: () => {
            return null;
          },
        }}
      />
      <Stack.Screen
        name={entry.register.customer}
        component={CustomerReg}
        options={{
          header: () => {
            return null;
          },
        }}
      />
      <Stack.Screen name={vendor.home} component={HomeCustomer} />
      <Stack.Screen name={vendor.foodList} component={Food} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    width: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "space-around",
  },
});
export default EntryStack;
