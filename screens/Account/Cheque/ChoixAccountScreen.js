import React from "react";

import {StyleSheet} from "react-native";
import ChoiceAccount from "../../../components/Accounts/ChoiceAccount";

const ChoixAccountScreenCheque = ({ navigation }) => {
  return <ChoiceAccount navigation={navigation} route={"ChequeOverview"} />;
};

ChoixAccountScreenCheque.navigationOptions = {
  headerTitle: "Choix du compte",
};
const styles = StyleSheet.create({});

export default ChoixAccountScreenCheque;
