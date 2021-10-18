import { StyleSheet, Text, View } from "react-native";
import FormikForm from "./formikForm";
import React, { useEffect, useState } from "react";
import CustomFormField from "./customFormField";
import CustomButton from "./customButton";
// import ImagePickerCloudinary from "../../services/cloudinary/imagePicker";

const UpdateFoodForm = ({ handleAdd, handleChange }) => {
  //   const [url, setUrl] = useState("");
  const [disabled, setDisabled] = useState(true);

  return (
    <FormikForm
      initialValues={{
        food: "",
        count: "",
        url: "",
      }}
      onsubmit={(values) => {
        console.log(values);
      }}
    >
      <CustomFormField name="food" placeholder="food name" icon="food" />
      <CustomFormField
        name="price"
        placeholder="count"
        icon="cash"
        keyboardType="number-pad"
      />
      {/* <ImagePickerCloudinary
        name="url"
        getUrl={(url) => {
          console.log(url, "inForm");
          setDisabled(false);
        }}
      /> */}
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

export default UpdateFoodForm;

const styles = StyleSheet.create({});
