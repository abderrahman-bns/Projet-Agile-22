import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AddButton = ({ goTo, navigation, colorButton }) => {
  return (
    <AntDesign
      name="pluscircle"
      size={55}
      color={colorButton}
      onPress={() => navigation.navigate(goTo)}
    />
  );
};

const styles = StyleSheet.create({});

export default AddButton;
