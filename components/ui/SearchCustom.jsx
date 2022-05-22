import React from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";

const SearchCustom = ({ query, updateSearchHandler }) => {
  return (
    <View>
      <SearchBar
        value={query}
        onChangeText={updateSearchHandler}
        placeholder="Search..."
        lightTheme
        round
        containerStyle={styles.containerSearchBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerSearchBar: {
    borderRadius: 20,
  },
});
export default SearchCustom;
