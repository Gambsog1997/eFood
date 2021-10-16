import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Animated, Platform, StatusBar } from "react-native";
import {
  Button,
  Text,
  Subheading,
  Title,
  useTheme,
  Paragraph,
  Card,
  Avatar,
} from "react-native-paper";
import { useDimensions } from "@react-native-community/hooks";
import { useNavigation } from "@react-navigation/native";
import CustomDialog from "./CustomDialog";

const LandingPage = () => {
  const { colors, fonts, roundness } = useTheme();
  const { width, height } = useDimensions().screen;
  const anime = useRef(new Animated.Value(0)).current;
  const { navigate } = useNavigation();

  const [visible, setVisible] = useState(false);

  const ChoiceDialog = () => {
    return (
      <CustomDialog
        visible={visible}
        title="Sign Up Option"
        header="Hi,"
        content="What would you want to sign up as?"
        yesBtn="Customer"
        noBtn="Vendor"
        handleNo={handleNo}
        handleYes={handleYes}
        onDismiss={hideDialog}
      />
    );
  };

  const handleNo = () => {
    console.log("no");
    navigate("Sign-Up-Vendor", { role: "vendor" });
  };

  const handleYes = () => {
    console.log("yes");
    navigate("Sign-Up-Customer", { role: "customer" });
  };

  const showDialog = () => {
    console.log("log");
    setVisible(true);
  };

  const hideDialog = (s) => {
    setVisible(false);
  };

  const fadeIn = () => {
    Animated.timing(anime, {
      toValue: height / 2,
      duration: 5000,
      useNativeDriver: false,
      delay: 8000,
    }).start((o) => {
      if (o.finished) {
        fadeOut();
      }
    });
  };

  const fadeOut = () => {
    Animated.timing(anime, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: false,
      delay: 8000,
    }).start((o) => {
      if (o.finished) {
        fadeIn();
      }
    });
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.header,
          {
            backgroundColor: "teal",
            width: width,
            borderRadius: roundness,
            zIndex: 0,
            height: height / 4,
          },
        ]}
      >
        <Avatar.Image
          source={require("../assets/logo.jpeg")}
          style={{
            marginVertical: 10,
          }}
        />
        <Title
          style={{
            fontFamily: fonts.regular.fontFamily,
            fontSize: 30,
            color: "white",
          }}
        >
          Welcome to e-Food
        </Title>
      </View>
      <View style={[styles.msgContainer, { height: height / 2, width: width }]}>
        <View
          style={[
            styles.customer,
            {
              height: height / 2,
              width: width,
              backgroundColor: "rgb(44, 54, 54) ",
            },
          ]}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: fonts.medium.fontFamily,
              fontSize: 18,
              color: "white",
              flex: 1,
            }}
          >
            Customer
          </Text>
          <Paragraph
            style={{
              textAlign: "justify",
              fontFamily: fonts.thin.fontFamily,
              fontSize: 14,
              margin: 10,
              color: "white",
              flex: 3,
              alignSelf: "flex-start",
            }}
          >
            Elit velit sit anim ut nulla tempor dolore excepteur culpa veniam
            magna tempor eu voluptate. Tempor sint labore cillum ea quis commodo
            sunt cupidatat do. Reprehenderit incididunt commodo Lorem consequat.
            In consectetur laborum veniam sunt deserunt amet dolor elit minim
            laborum. Elit velit sit anim ut nulla tempor dolore excepteur culpa
            veniam magna tempor eu voluptate. Tempor sint labore cillum ea quis
            commodo sunt cupidatat do. Reprehenderit incididunt commodo Lorem
            consequat. In consectetur laborum veniam sunt deserunt amet dolor
            elit minim laborum.
          </Paragraph>
        </View>

        <Animated.View
          style={[
            styles.vendor,
            {
              height: anime,
              width: width,
              zIndex: 0,
              opacity: anime.interpolate({
                inputRange: [0, height / 2],
                outputRange: [0, 1],
              }),
              backgroundColor: anime.interpolate({
                inputRange: [0, height / 2],
                outputRange: [colors.background, "white"],
              }),
            },
          ]}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: fonts.medium.fontFamily,
              fontSize: 18,
              flex: 1,
            }}
          >
            Vendors
          </Text>
          <Paragraph
            style={{
              textAlign: "justify",
              fontFamily: fonts.light.fontFamily,
              fontSize: 14,
              margin: 10,
              flex: 3,
            }}
          >
            Non Lorem consectetur Lorem cupidatat. Laborum deserunt aute
            deserunt quis sint eiusmod cillum quis pariatur voluptate eiusmod.
            Mollit ut pariatur nulla reprehenderit quis eiusmod Lorem veniam.
          </Paragraph>
        </Animated.View>
      </View>
      <Animated.View
        style={[
          styles.footer,
          {
            width: width,
            height: height / 4,
            backgroundColor: "teal",
            zIndex: 4,
          },
        ]}
      >
        <Button
          mode="outlined"
          onPress={(e) => {
            navigate("Sign-In");
          }}
          style={{
            fontSize: 18,
            fontFamily: fonts.thin.fontFamily,
            fontWeight: "bold",
            margin: 5,
            padding: 10,
            width: width / 3,
          }}
          color="white"
        >
          Login
        </Button>
      </Animated.View>
      <ChoiceDialog />
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
  msgContainer: {
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  vendor: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "space-around",
    opacity: 0,
    alignItems: "center",
    paddingVertical: 40,
  },
  customer: {
    position: "absolute",
    top: 0,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 40,
  },
  footer: {
    color: "teal",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 3,
    flexDirection: "row",
  },
});
