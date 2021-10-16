import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button, useTheme } from "react-native-paper";
import AppFormField from "../../components/appFormField";
import { Formik } from "formik";
import uuid from "react-native-uuid";
import * as Yup from "yup";
import { useDimensions } from "@react-native-community/hooks";
import cache from "../Cache/cache";
import axios from "axios";
import request from "../services/http/request";
import { colors as color } from "../../assets/theme/colors";

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
              <Image
                source={require("../../assets/images/foodIcon.png")}
                style={{ width: 100, height: 100 }}
              />
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: fonts.thin.fontFamily,
                }}
              >
                Sign Up
              </Text>
            </View>
            <View style={styles.fieldContainer}>
              <ScrollView>
                <AppFormField name="name" icon="account" />
                <AppFormField name="email" icon="email" />
                <AppFormField name="whatsupNo" icon="phone" />
                <AppFormField name="password" secureTextEntry icon="security" />
                <Button
                  mode="contained"
                  color={color.background}
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
    justifyContent: "center",
    flexDirection: "column",
    // backgroundColor: col,
  },
  iconContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: "red",
  },
  fieldContainer: {
    flex: 3,
    justifyContent: "flex-start",
    padding: 20,
  },
});
