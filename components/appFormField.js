import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ErrorMsg from "./errorMsg";
import CustomTextInput from "./textInput";

const AppFormField = ({ name, icon, keyboardType, ref, ...rest }) => {
  const { handleChange, values, errors, setFieldTouched, touched } =
    useFormikContext();
  return (
    <View>
      <CustomTextInput
        icon={icon}
        onChangeText={handleChange(name)}
        placeholder={name}
        handleBlur={() => {
          setFieldTouched(name);
        }}
        value={values[name]}
        keyboardType={keyboardType}
        ref={ref}
        {...rest}
      />
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppFormField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorMsg: {
    marginVertical: 2,
  },
});
