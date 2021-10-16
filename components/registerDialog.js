import { StyleSheet, Text } from "react-native";
import React from "react";

import {
  Dialog,
  Portal,
  useTheme,
  TextInput,
  Button,
  Subheading,
} from "react-native-paper";
import { useDimensions } from "@react-native-community/hooks";

const RegisterDialog = ({ visible, onDismiss }) => {
  const theme = useTheme();
  const { height, width } = useDimensions().screen;

  return (
    <Portal theme={theme}>
      <Dialog
        dismissable={true}
        visible={visible}
        onDismiss={onDismiss}
        style={{
          height: height / 3,
        }}
      >
        <Dialog.Title
          style={{
            fontFamily: theme.fonts.thin.fontFamily,
            color: "teal",
          }}
        >
          Sign Up Options
        </Dialog.Title>
        <Dialog.Content>
          <Subheading></Subheading>
        </Dialog.Content>
        <Dialog.Actions
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            margin: 15,
          }}
        >
          <Button
            mode="contained"
            onPress={() => {
              console.log("vendor");
            }}
            color="teal"
          >
            Vendor
          </Button>
          <Button
            mode="contained"
            color="teal"
            onPress={() => {
              console.log("customer");
            }}
          >
            Customer
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default RegisterDialog;

const styles = StyleSheet.create({});
