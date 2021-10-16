import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Mock from "./eFood/store/mock";
import { store } from "./eFood/store/store";
import { Provider as PaperProvider } from "react-native-paper";
// import LandingPage from "./eFood/Entry/landingPage";
// import { colors } from "./assets/theme/colors";
import { NavigationContainer } from "@react-navigation/native";
import EntryStack from "./eFood/Navigation/Entry";
import PushTokens from "./eFood/services/notification/PushTokens";
import cache from "./eFood/services/Cache/cache";

export default function App() {
  const getToken = async () => {
    const pushToken = await PushTokens.registerForPushNotification();
    cache.store("token", pushToken);
    console.log(pushToken);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <EntryStack />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
