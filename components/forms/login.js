import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import CustomButton from "../customButton";
import * as Yup from "yup";
import { Text, useTheme } from "react-native-paper";
import AppFormField from "../appFormField";
import axios from "axios";
import request from "../../eFood/services/http/request";
import cache from "../../eFood/services/Cache/cache";
import { useDimensions } from "@react-native-community/hooks";
import { colors as color } from "../../assets/theme/colors";

const validateSchema = Yup.object().shape({
  whatsupNo: Yup.string().required(),
  password: Yup.string().required().min(4),
});

const Login = ({ register, login, role }) => {
  const { fonts, colors } = useTheme();
  const { height, width } = useDimensions().screen;

  return (
    <Formik
      initialValues={{
        whatsupNo: "",
        password: "",
      }}
      onSubmit={(values) => {
        console.log(values);

        axios({
          method: "post",
          data: values,
          url: `${request.baseUrl}${request.authenticate.authentication}`,
        })
          .then((res) => {
            cache.store("vendor", res.data);
            login(res);
            console.log(res.data);
          })
          .catch((err) => {
            console.log("====================================");
            console.log(
              err,
              `${request.baseUrl}${request.authenticate.authentication}`
            );
            console.log("====================================");
          });
      }}
      validationSchema={validateSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <View style={[styles.header]}>
            <Text
              style={{
                fontSize: 40,
                fontFamily: fonts.light.fontFamily,
                color: color.primary,
              }}
            >
              Welcome to e-Food
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontFamily: fonts.thin.fontFamily,
                bottom: 20,
                color: color.secondary,
              }}
            >
              Lets get You Signed in
            </Text>
          </View>
          <View style={styles.row}>
            <View>
              <AppFormField name="whatsupNo" icon="phone" />
              <AppFormField name="password" secureTextEntry icon="security" />
            </View>
            <View>
              <CustomButton
                onPress={() => {
                  handleSubmit();
                }}
                title="LOGIN"
                fontSize={15}
                color={color.text}
                backColor={color.background}
                moreStyle={{
                  marginLeft: width / 4,
                  marginTop: 20,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: fonts.thin.fontFamily,
                  textDecorationLine: "underline",
                  textAlign: "center",
                  marginTop: 30,
                  color: color.secondary,
                }}
                onPress={register}
              >
                Don't have an account,register now
              </Text>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    flexDirection: "column",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "space-around",
    // backgroundColor:,
  },
  header: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  btnContainer: {},
});
