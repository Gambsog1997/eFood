import { Formik } from "formik";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FormikForm = ({ children, onsubmit, initialValues }) => {
  return (
    <Formik
      onSubmit={(values) => {
        onsubmit(values);
        // console.log(values);
      }}
      initialValues={initialValues}
    >
      {({ setFieldValue }) => {
        return <View style={[styles.container]}>{children}</View>;
      }}
    </Formik>
  );
};

export default FormikForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});
