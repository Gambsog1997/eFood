import { StyleSheet, Text, View } from "react-native";
import FormikForm from "./formikForm";
import React, { useState } from "react";
import CustomFormField from "./customFormField";
import CustomButton from "./customButton";
import ImagePickerCloudinary from "../../services/cloudinary/imagePicker";
import { useFormikContext } from "formik";

const AddFoodForm = ({ handleAdd, handleChange }) => {
  const [url, setUrl] = useState("");

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
        }}
      />
      <CustomButton
        title="add"
        handleAdd={() => {
          handleAdd();
        }}
      />
    </FormikForm>
  );
};

export default AddFoodForm;

const styles = StyleSheet.create({});
