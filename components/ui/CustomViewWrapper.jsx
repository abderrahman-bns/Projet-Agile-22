import React from "react";
import { StyleSheet, View } from "react-native";

const CustomViewWrapper = ({ children, style }) => {
  return (
    <View style={{ ...styles.CustomViewWrapper, ...style }}>{children}</View>
  );
};

const styles = StyleSheet.create({
  CustomViewWrapper: {
    paddingHorizontal: 6,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});
export default CustomViewWrapper;
