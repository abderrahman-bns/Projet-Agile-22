import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AccountCard from "../../../components/Accounts/AccountCard";
import Fonts from "../../../constant/Font";
import Colors from "../../../constant/Colors";
import ButtonUi from "../../../components/ui/ButtonUi";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";
import { ACCOUNTS } from "../../../data/AccountData";
import { USER } from "../../../data/UserData";

const RibAccountScreen = ({ navigation }) => {
  const idAccount = navigation.getParam("id");
  const accountSelected = ACCOUNTS.find(
    (account) => account.idAccount === idAccount
  );
  return (
    <LayoutScreenColor>
      <View style={{ flex: 1 }}>
        <View style={styles.accountWrapper}>
          <AccountCard
            typeAccount={accountSelected.typeAccount}
            numAccount={accountSelected.RIB}
            devis={accountSelected.devis}
            montant={accountSelected.amount}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoTextTitle}>Titulaire</Text>
            <Text style={styles.infoText}>Madame {USER.nomUser}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoTextTitle}>RIB</Text>
            <Text style={styles.infoText}>{accountSelected.RIB}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoTextTitle}>Code Swift</Text>
            <Text style={styles.infoText}>{accountSelected.codeSwift}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoTextTitle}>Agence</Text>
            <Text style={styles.infoText}>{USER.agenceUser}</Text>
          </View>
          <ButtonUi
            title="Télécharger en Pdf"
            nameIcon={"cloud-download-alt"}
            iconStyle={styles.iconStyle}
            iconColor={Colors.iconColor}
            sizeIcon={15}
            icon={true}
          />
          <ButtonUi
            title="Partager"
            nameIcon={"share-alt"}
            iconStyle={styles.iconStyle}
            iconColor={Colors.iconColor}
            sizeIcon={15}
            icon={true}
          />
        </View>
      </View>
    </LayoutScreenColor>
  );
};

const styles = StyleSheet.create({
  accountWrapper: {
    marginTop: 10,
  },
  infoContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  infoItemWrapper: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.cardBackgroundColor,
    marginBottom: 30,
    paddingVertical: 5,
  },
  infoTextTitle: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 16,
  },
  infoText: {
    fontFamily: Fonts.OpenSansMedium,
    fontSize: 16,
  },
  customViewButtonWrapper: {
    width: "80%",
  },
  customViewButton: {
    overflow: "hidden",
    borderRadius: 12,
    borderColor: Colors.iconBackgroundColor,
    borderWidth: 1,
    height: 35,
    marginVertical: 10,
    backgroundColor: Colors.iconBackgroundColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textButton: {
    fontFamily: Fonts.OpenSansBold,
    color: Colors.iconColor,
  },
  iconStyle: {
    marginRight: 10,
  },
});
export default RibAccountScreen;
