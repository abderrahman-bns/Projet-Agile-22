import React from "react";
import LayoutScreenColor from "../ui/LayoutScreenColor";
import { StyleSheet, View } from "react-native";
import { ACCOUNTS } from "../../data/AccountData";
import AccountCard from "./AccountCard";

const ChoiceAccount = ({ handleChoiceAccount }) => {
  return (
    <LayoutScreenColor>
      <View style={styles.screenWrapper}>
        {ACCOUNTS.map((account) => {
          return (
            <View key={account.idAccount}>
              <AccountCard
                typeAccount={account.typeAccount}
                montant={account.amount}
                numAccount={account.RIB}
                devis={account.devis}
                onPress={handleChoiceAccount.bind(this, account.idAccount)}
              />
            </View>
          );
        })}
      </View>
    </LayoutScreenColor>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    marginTop: 30,
  },
});
export default ChoiceAccount;
