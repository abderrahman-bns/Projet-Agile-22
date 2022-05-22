import React from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CommandeCarteCard from "../../../components/Card/CommandeCarteCard";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";
import AccountCard from "../../../components/Accounts/AccountCard";
import { ACCOUNTS } from "../../../data/AccountData";
import { CARTES } from "../../../data/CarteData";
import carteModel from "../../../models/carteModel";
import {
  GOLD,
  PLATINUM,
  SILVER,
  TypeCarte,
} from "../../../helpers/TypeCarteImage";

const CommandeCardScreen = ({ navigation }) => {
  const idAccount = navigation.getParam("id");
  const accountSelected = ACCOUNTS.find(
    (account) => account.idAccount === idAccount
  );
  console.log(idAccount);
  const handleAlertPress = (typeCarte) => {
    let TypeCarteName;
    if (typeCarte === "Carte Silver") {
      TypeCarteName = "SILVER";
    } else if (typeCarte === "Carte Gold") {
      TypeCarteName = "GOLD";
    } else if (typeCarte === "Carte Platinum") {
      TypeCarteName = "PLATINUM";
    }
    console.log("Type : " + TypeCarteName);
    Alert.alert("Commander Carte", "Voulez vous commandez cette carte", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          const newCarte = new carteModel(
            "c" + (CARTES.length + 1),
            idAccount,
            typeCarte,
            TypeCarte[TypeCarteName],
            "",
            "",
            "",
            "En Attente"
          );
          CARTES.push(newCarte);
          navigation.navigate("CardScreen");
        },
      },
    ]);
  };
  return (
    <LayoutScreenColor>
      <ScrollView>
        <View style={styles.CommandeCardScreenWrapper}>
          <View style={styles.accountWrapper}>
            <AccountCard
              typeAccount={accountSelected.typeAccount}
              numAccount={accountSelected.RIB}
              devis={accountSelected.devis}
              montant={accountSelected.amount}
            />
          </View>
          <TouchableOpacity onPress={handleAlertPress.bind(this, SILVER)}>
            <View style={styles.commandeCardWrapper}>
              <CommandeCarteCard
                uriImage={{
                  uri: "https://www.alyousr.ma/sites/default/files/2019-08/Carte-Bidaya_0.png",
                }}
                titleCarte={SILVER}
                dureValiditer={"3 ans"}
                plafondRetrait={" 5000 MAD / Jour"}
                plafondPaiement={" 5000 MAD / Jour"}
                tarification={"60 MAD / An"}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAlertPress.bind(this, GOLD)}>
            <View style={styles.commandeCardWrapper}>
              <CommandeCarteCard
                uriImage={{
                  uri: "https://www.capitaine-banque.com/wp-content/uploads/2020/09/carte-gold-mastercard-cmne.jpg",
                }}
                titleCarte={GOLD}
                dureValiditer={"3 ans"}
                plafondRetrait={" 30000 MAD / Jour"}
                plafondPaiement={" 10000 MAD / Jour"}
                tarification={"250 MAD / An"}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAlertPress.bind(this, PLATINUM)}>
            <View style={styles.commandeCardWrapper}>
              <CommandeCarteCard
                uriImage={{
                  uri: "https://billetdebanque.panorabanques.com/wp-content/uploads/2015/12/Platinum-master-card.jpg",
                }}
                titleCarte={PLATINUM}
                dureValiditer={"3 ans"}
                plafondRetrait={" 300000 MAD / Jour"}
                plafondPaiement={" 15000 MAD / Jour"}
                tarification={"60 MAD / An"}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LayoutScreenColor>
  );
};

CommandeCardScreen.navigationOptions = () => {
  return {
    headerTitle: "Commander Carte",
  };
};
const styles = StyleSheet.create({
  CommandeCardScreenWrapper: {
    flex: 1,
    flexDirection: "column",
  },
  commandeCardWrapper: {
    // backgroundColor: Colors.secondary,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  accountWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 5,
  },
});

export default CommandeCardScreen;
