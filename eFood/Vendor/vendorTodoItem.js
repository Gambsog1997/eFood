import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card, Avatar, Button, useTheme } from "react-native-paper";
import { useDimensions } from "@react-native-community/hooks";
import { useNavigation, useRoute } from "@react-navigation/native";
import { colors } from "../../assets/theme/colors";

const VendorTodoItem = ({
  image,
  title,
  subtitle,
  label,
  nextPage,
  btnText,
  icon,
}) => {
  const { width, height } = useDimensions().screen;
  const navigation = useNavigation();
  const route = useRoute();
  const { roundness } = useTheme();

  return (
    <View style={styles.container}>
      <Card
        style={{
          width: width - 10,
          marginHorizontal: 5,
          elevation: 20,
        }}
      >
        <Card.Title
          title={title}
          subtitle={subtitle}
          left={(props) => {
            return (
              <Avatar.Text
                label={label}
                size={props.size}
                color="white"
                style={{
                  backgroundColor: colors.primary,
                }}
              />
            );
          }}
          style={{
            backgroundColor: "rgb(248, 245, 245)",
          }}
        />
        <Card.Cover
          source={image}
          style={{
            margin: 5,
            borderRadius: roundness,
          }}
        />
        <Card.Actions
          style={{
            marginBottom: 10,
            marginTop: -5,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              color="white"
              icon={icon}
              style={{
                backgroundColor: colors.primary,
                width: width - 40,
                elevation: 10,
              }}
              onPress={() => {
                navigation.setParams({ yah: "exactly" });
                navigation.navigate(nextPage);
                console.log(route.path);
              }}
            >
              {btnText}
            </Button>
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default VendorTodoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    borderRadius: 10,
  },
});
