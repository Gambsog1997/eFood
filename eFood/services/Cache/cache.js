import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedItem = moment(item.timeStamp);
  return now.diff(storedItem, "days") > 188;
};

const store = async (key, value) => {
  try {
    const item = {
      value,
      timeStamp: Date.now(),
    };
    await AsyncStorage.setItem(`${prefix} ${key}`, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const getItem = async (key) => {
  try {
    let value = await AsyncStorage.getItem(`${prefix} ${key}`);
    const items = JSON.parse(value);

    if (isExpired(items)) {
      await AsyncStorage.removeItem(`${prefix} ${key}`);
    }

    return items;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  getItem,
};
