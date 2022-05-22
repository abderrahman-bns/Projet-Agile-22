import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const RightSwipe = ({ onUpdateFunction, onDeleteFunction }) => {
  return (
    <View style={styles.viewswipe}>
      <View style={styles.iconEdite}>
        <AntDesign
          name="edit"
          size={28}
          color="black"
          onPress={onUpdateFunction}
        />
      </View>
      <View style={styles.IconDelete}>
        <AntDesign
          name="delete"
          size={28}
          color="black"
          onPress={onDeleteFunction}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewswipe: {
    flexDirection: "row",
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    borderRadius: 5,
  },
  iconEdite: {
    width: "50%",
    alignItems: "center",
    backgroundColor: "#5F9EA0",
    height: "100%",
    justifyContent: "center",
    borderRadius: 5,
  },
  IconDelete: {
    width: "50%",
    alignItems: "center",
    backgroundColor: "#B22222",
    height: "100%",
    justifyContent: "center",
    borderRadius: 5,
    margin: 2,
  },
});

export default RightSwipe;
