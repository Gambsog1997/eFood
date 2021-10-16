import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Button, useTheme } from "react-native-paper";
import { useDimensions } from "@react-native-community/hooks";
import { colors } from "../../assets/theme/colors";

export default function CustomPromptModal({
  visible,
  setModalVisible,
  prompt,
  onAccept,
  onReject,
}) {
  const { fonts } = useTheme();
  const { height, width } = useDimensions().screen;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        // }}
      >
        <View style={[styles.centeredView]}>
          <View
            style={[
              styles.modalView,
              {
                width: width,
              },
            ]}
          >
            <Text
              style={[
                styles.modalText,
                {
                  fontFamily: fonts.thin.fontFamily,
                  fontSize: 20,
                },
              ]}
            >
              {prompt}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <Button
                onPress={() => {
                  setModalVisible(!visible);
                  onAccept();
                }}
                mode="contained"
                color={colors.secondary}
              >
                Yes
              </Button>
              <Button
                onPress={() => {
                  setModalVisible(!visible);
                  onReject();
                }}
                mode="contained"
                color={colors.error}
              >
                No
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 3,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
