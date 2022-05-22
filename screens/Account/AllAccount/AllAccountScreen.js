import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AccountCard from "../../../components/Accounts/AccountCard";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";
import Fonts from "../../../constant/Font";
import DecorationLine from "../../../components/ui/DecorationLine";
import { ACCOUNTS } from "../../../data/AccountData";

const AllAccountScreen = () => {
  let sum = 0;
  for (let account of ACCOUNTS) {
    sum += account.amount;
  }
  return (
    <View style={{ flex: 1 }}>
      <LayoutScreenColor>
        <View style={styles.accountsWrapperRow1}>
          <View>
            <Text style={styles.title}>Total des comptes</Text>
            <DecorationLine style={{ width: 70 }} />
          </View>

          <Text style={styles.amount}>{sum}</Text>
        </View>
        <View style={styles.accountsWrapperRow2}>
          {ACCOUNTS.map((account) => {
            return (
              <View key={account.idAccount}>
                <AccountCard
                  typeAccount={account.typeAccount}
                  numAccount={account.RIB}
                  devis={account.devis}
                  montant={account.amount}
                />
              </View>
            );
          })}
        </View>
      </LayoutScreenColor>
    </View>
  );
};

AllAccountScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Comptes",
  };
};
const styles = StyleSheet.create({
  accountsWrapperRow1: {
    width: "100%",
    height: "15%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  accountsWrapperRow2: {
    width: "100%",
    height: "85%",
    marginTop: 10,
  },
  title: {
    fontFamily: Fonts.OpenSansMedium,
    fontSize: 22,
  },
  amount: {
    fontFamily: Fonts.OpenSansLight,
    fontSize: 22,
    letterSpacing: 1,
  },
});
export default AllAccountScreen;
