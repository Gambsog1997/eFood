import * as Location from "expo-location";

const currentLocation = async () => {
  const permission = await Location.requestForegroundPermissionsAsync();

  if (!permission.granted) {
    return;
  }
  const loc = await Location.getLastKnownPositionAsync();
  return loc;
};

export default currentLocation;
