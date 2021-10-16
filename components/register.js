import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, useTheme } from "react-native-paper";
import AppFormField from "./appFormField";
import { Formik } from "formik";
import uuid from "react-native-uuid";
import * as Yup from "yup";
import { useDimensions } from "@react-native-community/hooks";
import cache from "../services/Cache/cache";
import axios from "axios";
import request from "../services/http/request";

const validationSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  whatsupNo: Yup.string().required(),
  homeAddress: Yup.string().required(),
  password: Yup.string().required(),
});

const Register = () => {
  const { width } = useDimensions().screen;
  const { fonts, colors } = useTheme();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        whatsupNo: "",
        homeAddress: "",
        password: "",
      }}
      onSubmit={async (values) => {
        const expoPushToken = await cache.getItem("token");
        const data = {
          ...values,
          id: uuid.v4(),
          role: "customer",
          token: expoPushToken.value,
        };
        console.log(data);
        axios({
          baseURL: `${request.baseUrl}`,
          method: "post",
          data: data,
          url: `${request.register.register}`,
        })
          .then((res) => {
            console.log(res.data);
            cache.store("customer", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: fonts.thin.fontFamily,
                  bottom: 20,
                }}
              >
                Sign Up
              </Text>
            </View>
            <View style={styles.fieldContainer}>
              <ScrollView>
                <AppFormField name="name" />
                <AppFormField name="email" />
                <AppFormField name="whatsupNo" />
                <AppFormField name="homeAddress" />
                <AppFormField name="password" />
                <Button
                  mode="contained"
                  color="teal"
                  onPress={() => {
                    console.log("Press");
                    handleSubmit();
                  }}
                >
                  Register
                </Button>
              </ScrollView>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: "center",
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  fieldContainer: {
    flex: 3,
    justifyContent: "flex-start",
    padding: 20,
  },
});
