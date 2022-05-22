import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomViewBorderedWrapper = ({ children, style }) => {
  return (
    <View style={{ ...styles.CustomViewWrapper, ...style }}>{children}</View>
  );
};

const styles = StyleSheet.create({
  CustomViewWrapper: {
    paddingHorizontal: 6,
    paddingVertical: 20,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ffff",
  },
});
export default CustomViewBorderedWrapper;
