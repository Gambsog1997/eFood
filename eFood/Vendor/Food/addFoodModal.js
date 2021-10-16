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
import { colors } from "../../../assets/theme/colors";
import { Formik } from "formik";
import AppFormField from "../../../components/appFormField";
import AddFoodForm from "../../CompononentsNew/formik/addFoodForm";
import CustomButton from "../../CompononentsNew/formik/customButton";
import ImagePickerCloudinary from "../../services/cloudinary/imagePicker";

export default function AddFoodModal({ visible, setModalVisible }) {
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
                height: height * 0.5,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.light.fontFamily,
                color: colors.background,
              }}
            >
              Add New Food to the List
            </Text>
            <AddFoodForm
              handleAdd={() => {
                setModalVisible();
              }}
            />
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
    flexDirection: "column",
    justifyContent: "space-evenly",
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
