import React from "react";
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import { Card, Button, Avatar, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const CustomCard = ({ image, title, icon, id }) => {
  const { height, width } = useDimensions().screen;
  const { colors, roundness, fonts } = useTheme();
  const navigation = useNavigation();

  const LeftContent = (props) => (
    <Avatar.Icon
      {...props}
      icon={icon}
      size={25}
      style={{
        backgroundColor: colors.surface,
      }}
    />
  );
  return (
    <View style={[styles.container, { height: "auto", width: width / 2 }]}>
      <Card
        style={{
          backgroundColor: colors.background,
        }}
      >
        <Card.Cover
          style={{
            margin: 10,
            borderRadius: roundness,
            height: height / 6,
          }}
          source={image}
        />

        <Card.Actions
          style={{
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <Button
              mode="contained"
              onPress={(e) => {
                console.log("contained");
                navigation.navigate("purchase", {
                  id: id,
                  name: title,
                });
              }}
              color="teal"
            >
              <Text style={{ fontFamily: fonts.light.fontFamily }}>Order</Text>
            </Button>
            <Button>
              <Text
                style={{
                  fontFamily: fonts.light.fontFamily,
                  color: colors.backdrop,
                }}
              >
                {title}
              </Text>
            </Button>
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  img: {
    height: 250,
    margin: 10,
    overflow: "hidden",
    padding: 5,
    borderRadius: 10,
  },
  desc: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
