import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import axios from "axios";
import request from "../../services/http/request";
import cache from "../../services/Cache/cache";
import { useTheme, FAB, Button, Portal, Modal } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { colors as color } from "../../../assets/theme/colors";
import AddFoodModal from "./addFoodModal";

const Food = () => {
  const { height, width } = useDimensions().screen;
  const [food, setFood] = useState([]);
  const { fonts, colors } = useTheme();
  const { navigate } = useNavigation();
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    getFood();
  }, []);

  const getFood = () => {
    axios({
      baseURL: request.baseUrl,
      url: request.foodPath.get,
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        setFood(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const FoodItem = ({ food, count, price }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.foodContainer,
          {
            width: width,
            height: height / 6,
            marginVertical: 5,
            backgroundColor: "rgb(227, 241, 241)",
          },
        ]}
        onPress={() => {
          setVisible(true);
          console.log(food);
          setValue(food);
        }}
      >
        <Image
          source={require("../../../assets/images/variety.jpg")}
          style={[
            styles.avatar,
            {
              width: width * 0.25,
              position: "absolute",
              left: width * 0.05,
              borderRadius: width * 0.15,
            },
          ]}
        />

        <View
          style={[
            styles.food,
            {
              width: width * 0.8,
              position: "absolute",
              right: 0,
              backgroundColor: color.error,
            },
          ]}
        >
          <View
            style={[
              styles.description,
              {
                paddingLeft: width * 0.2,
                paddingRight: width * 0.02,
              },
            ]}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: color.background,
                  fontWeight: "100",
                  padding: 2,
                  letterSpacing: 1.5,
                }}
              >
                {food}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: color.background,
                  fontFamily: fonts.thin.fontFamily,
                  padding: 2,
                  letterSpacing: 1.5,
                }}
              >
                Count:{count}
              </Text>
            </View>
            <View
              style={[
                styles.avatar,
                {
                  width: width * 0.23,
                  position: "absolute",
                  right: width * 0.05,
                  borderRadius: width * 0.1,
                  backgroundColor: "rgba(114, 91, 74, 0.233)",
                  height: "70%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: color.background,
                  fontFamily: fonts.regular.fontFamily,
                  padding: 2,
                }}
              >
                Tshs {price}/=
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const CustomFab = () => {
    return (
      <FAB
        style={[
          styles.fab,
          {
            backgroundColor: color.background,
          },
        ]}
        icon="plus"
        onPress={() => {
          //   navigate("food-list");
          setVisible(true);
        }}
      />
    );
  };

  return (
    <View style={[styles.container]}>
      <CustomFab />
      <FlatList
        data={food.length === 0 ? null : food}
        renderItem={({ item }) => {
          return (
            <FoodItem
              count={item.vendorLists[0].count}
              food={item.name ? item.name : null}
              price={item.vendorLists[0].price}
            />
          );
        }}
      />
      <AddFoodModal
        visible={visible}
        setModalVisible={() => {
          setVisible(!visible);
        }}
        onAccept={() => {
          setVisible(false);
        }}
        onReject={() => {
          setVisible(false);
        }}
      />
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  foodItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    height: "70%",
    zIndex: 1,
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
    borderTopLeftRadius: 25,
  },
  fab: {
    position: "absolute",
    margin: 50,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  food: {
    height: "90%",
    borderTopLeftRadius: 25,
  },
  foodContainer: {
    marginVertical: 10,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  notFoodFound: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modalStyle: { backgroundColor: "white", padding: 20 },
});
