import React, { useState, useEffect } from "react";
import { Image, View, Platform, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../../../assets/theme/colors";
import { Button, ActivityIndicator } from "react-native-paper";
import { useFormikContext } from "formik";
import { useDimensions } from "@react-native-community/hooks";
import { config } from "../../CompononentsNew/formik/config";

export default function ImagePickerCloudinary({ name, getUrl }) {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imageObject, setImageObject] = useState({});
  const [visible, setVisible] = useState(false);
  const { width } = useDimensions().screen;
  const { setFieldValue } = useFormikContext();
  const { CLOUDINARY_URL, preBase64Img, upload_preset } = config;

  const CustomerActivityIndicator = ({ animating }) => {
    return (
      <ActivityIndicator
        animating={animating}
        color={colors.primary}
        style={{
          position: "absolute",
          left: width * 0.5,
          zIndex: 1,
        }}
        size="large"
      />
    );
  };

  const getImgUrl = (image) => {
    let base64Img = `${preBase64Img},${image.base64}`;
    setVisible(true);

    let data = {
      file: base64Img,
      upload_preset: upload_preset,
    };

    fetch(CLOUDINARY_URL, {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
      method: "POST",
    })
      .then(async (r) => {
        let data = await r.json();
        setImageUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  useEffect(() => {
    getImgUrl(imageObject);
  }, [imageObject]);

  useEffect(() => {
    console.log(imageUrl);
    setFieldValue(name, imageUrl);
    setVisible(false);
    getUrl(imageUrl);
  }, [imageUrl]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setImageObject(result);
    }
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        position: "relative",
      }}
    >
      <Button
        mode="contained"
        color={colors.primary}
        onPress={() => {
          pickImage();
        }}
      >
        Pick Image
      </Button>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 150, height: 100, borderRadius: 10 }}
        />
      )}
      <CustomerActivityIndicator animating={visible} />
    </View>
  );
}
