import React from "react";

import { Alert, StyleSheet } from "react-native";
import ChoiceAccount from "../../../components/Accounts/ChoiceAccount";
import { ACCOUNTS } from "../../../data/AccountData";
const ChoixAccountScreenVirement2 = ({ navigation }) => {
  const handleChoiceAccount = (idAccount2) => {
    const selectedAccount2 = ACCOUNTS.find(
      (account) => account.idAccount === idAccount2
    );
    const idAccount1 = navigation.getParam("id");
    if (idAccount1 !== idAccount2) {
      navigation.navigate({
        routeName: "PassVirementScreen",
        params: {
          idAccount1: idAccount1,
          idAccount2: idAccount2,
        },
      });
    } else {
      Alert.alert(
        "Vous devez choisir un different compte !!",
        "Changer le compte " + selectedAccount2.typeAccount,
        [
          {
            text: "Annuler",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ]
      );
    }
  };

  return <ChoiceAccount handleChoiceAccount={handleChoiceAccount} />;
};

ChoixAccountScreenVirement2.navigationOptions = {
  headerTitle: "Choix du compte 2",
};
const styles = StyleSheet.create({});

export default ChoixAccountScreenVirement2;
