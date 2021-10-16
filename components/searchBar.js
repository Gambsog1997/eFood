import React, { useRef } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import { Searchbar, useTheme } from "react-native-paper";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { width } = useDimensions().screen;
  const { fonts } = useTheme();

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={[styles.container, { width: width - 20 }]}>
      <Searchbar
        placeholder="Search food / vendors"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          fontFamily: fonts.thin.fontFamily,
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(243, 227, 219, 0.61)",
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 5,
  },
});
