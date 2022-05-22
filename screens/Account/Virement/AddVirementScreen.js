import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AccountCard from "../../../components/Accounts/AccountCard";

const AddVirementScreen = () => {
  return (
    <View>
      <Text> Choix Compte : </Text>
      <AccountCard
        typeAccount={"Compte Cheque"}
        numAccount={"12365487745"}
        devis={"MAD"}
        montant="1235487"
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default AddVirementScreen;
