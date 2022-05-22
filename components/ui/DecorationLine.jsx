import React from "react";
import { View } from "react-native";

const DecorationLine = ({ style }) => {
  return (
    <View
      style={{
        borderBottomColor: "green",
        borderBottomWidth: 4,
        borderRadius: 8,
        width: 29,
        ...style,
      }}
    />
  );
};

export default DecorationLine;
