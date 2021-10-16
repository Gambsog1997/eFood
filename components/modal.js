import { StyleSheet, Text, View } from "react-native";
import { Portal, Modal, Paragraph } from "react-native-paper";
import React from "react";

const CustomModal = ({ children, showModal, hideModal, visible }) => {
  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          children={children}
          dismissable={true}
        />
      </Portal>
      <Button style={styles.button} onPress={showModal}>
        Show
      </Button>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    elevation: 20,
  },
});
