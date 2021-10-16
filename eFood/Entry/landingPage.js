import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDimensions } from "@react-native-community/hooks";
import { Paragraph, Title, useTheme } from "react-native-paper";
import { colors } from "../../assets/theme/colors";
import CustomPromptModal from "../CompononentsNew/CustomPromptModal";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../Navigation/routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import cache from "../Cache/cache";

const LandingPage = () => {
  const { height, width } = useDimensions().screen;
  const { fonts } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const { navigate } = useNavigation();
  const { entry } = routes;

  const checkIfLoggedIn = () => {
    cache.getItem("vendor").then((result) => {
      if (result.value) {
        console.log(result);
        navigate(routes.vendor.home);
      }
    });
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <View style={[styles.container]}>
      <CustomPromptModal
        visible={modalVisible}
        setModalVisible={(visible) => {
          setModalVisible(visible);
        }}
        prompt="Do you have an account"
        onReject={() => {
          navigate(entry.register.customer);
        }}
        onAccept={() => {
          navigate(entry.login);
        }}
      />
      <View
        style={[
          styles.image,
          {
            height: height * 0.5,
            width: width * 0.9,
            left: width * 0.05,
            marginTop: height * 0.05,
            borderRadius: 10,
            elevation: 4,
          },
        ]}
      >
        <Image
          source={require("../../assets/images/variety.jpg")}
          style={[
            {
              height: height * 0.5,
              width: width * 0.9,
              borderRadius: 10,
            },
          ]}
        />
      </View>
      <View
        style={[
          {
            height: height * 0.3,
            width: width * 0.9,
            left: width * 0.05,
            marginTop: height * 0.025,
            borderRadius: 5,
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          },
        ]}
      >
        <Title
          style={{
            fontFamily: fonts.light.fontFamily,
            color: colors.background,
            fontSize: 30,
          }}
        >
          eFood
        </Title>
        <Paragraph
          style={{
            fontFamily: fonts.thin.fontFamily,
            textAlign: "justify",
            color: colors.text,
          }}
        >
          Et et nulla fugiat elit est qui mollit cillum fugiat. Dolore in enim
          proident cillum adipisicing irure laboris culpa deserunt excepteur ut
          ex velit in. Consectetur dolor ea ex sint mollit ea. In aliquip dolore
          et magna ad id proident duis elit elit.
        </Paragraph>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: colors.background,
              width: width * 0.7,
              padding: 15,
              borderRadius: 6,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              elevation: 2,
            }}
            onPress={() => {
              console.log("red");
              setModalVisible(true);
            }}
          >
            <Text
              style={{
                color: colors.primary,
                fontSize: 20,
                fontFamily: fonts.thin.fontFamily,
              }}
            >
              PROCEED
            </Text>
            <MaterialCommunityIcons
              name="forward"
              color={colors.primary}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar barStyle="default" />
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.primary,
  },
  image: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
