import React from "react";

import { StyleSheet } from "react-native";
import ChoiceAccount from "../../../components/Accounts/ChoiceAccount";

const ChoixAccountScreenCommandeCarte = ({ navigation }) => {
  return <ChoiceAccount navigation={navigation} route={"CommandeCard"} />;
};

ChoixAccountScreenCommandeCarte.navigationOptions = {
  headerTitle: "Choix du compte",
};
const styles = StyleSheet.create({});

export default ChoixAccountScreenCommandeCarte;
