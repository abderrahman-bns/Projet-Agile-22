import React from "react";

import { StyleSheet } from "react-native";
import ChoiceAccount from "../../../components/Accounts/ChoiceAccount";

const ChoixAccountScreenVirement1 = ({ navigation }) => {
  const handleChoiceAccount = (idAccount) => {
    navigation.navigate({
      routeName: "ChoixAccountVirement2",
      params: { id: idAccount },
    });
  };
  return <ChoiceAccount handleChoiceAccount={handleChoiceAccount} />;
};

ChoixAccountScreenVirement1.navigationOptions = {
  headerTitle: "Choix du compte 1",
};
const styles = StyleSheet.create({});

export default ChoixAccountScreenVirement1;
