import { StyleSheet, Text, View } from "react-native";
import FormikForm from "./formikForm";
import React, { useEffect, useState } from "react";
import CustomFormField from "./customFormField";
import CustomButton from "./customButton";
import ImagePickerCloudinary from "../../services/cloudinary/imagePicker";

const AddFoodForm = ({ handleAdd, handleChange }) => {
  const [url, setUrl] = useState("");
  const [disabled, setDisabled] = useState(true);

  return (
    <FormikForm
      initialValues={{
        food: "",
        price: "",
        url: "",
      }}
      onsubmit={(values) => {
        console.log(values);
      }}
    >
      <CustomFormField name="food" placeholder="food name" icon="food" />
      <CustomFormField
        name="price"
        placeholder="price"
        icon="cash"
        keyboardType="number-pad"
      />
      <ImagePickerCloudinary
        name="url"
        getUrl={(url) => {
          console.log(url, "inForm");
          setDisabled(false);
        }}
      />
      <CustomButton
        title="add"
        handleAdd={() => {
          handleAdd();
        }}
        disabled={disabled}
      />
    </FormikForm>
  );
};

export default AddFoodForm;

const styles = StyleSheet.create({});
