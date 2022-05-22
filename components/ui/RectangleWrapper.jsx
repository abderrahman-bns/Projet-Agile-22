import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constant/Colors";
const RectangleWrapper = ({ children }) => {
  return <View style={styles.rectangleWrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  rectangleWrapper: {
    borderColor: Colors.primary,
    borderWidth: 1,
    width: "100%",
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: Colors.secondary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
export default RectangleWrapper;
