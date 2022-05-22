import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Font from "../../constant/Font";

const TextView = ({ title, description }) => {
  return (
    <View style={styles.viewBloque}>
      <Text style={styles.textBloque}>{title}:</Text>
      <Text style={styles.textBloqueDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBloque: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  textBloque: {
    fontSize: 17,
    color: "black",
    fontFamily: Font.OpenSansMedium,
  },
  textBloqueDescription: {
    fontSize: 15,
    fontFamily: Font.OpenSansRegular,
    color: "black",
  },
});

export default TextView;
