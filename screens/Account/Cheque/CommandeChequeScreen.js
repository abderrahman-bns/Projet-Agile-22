import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Fonts from "../../../constant/Font";
import AccountCard from "../../../components/Accounts/AccountCard";
import DecorationLine from "../../../components/ui/DecorationLine";
import Colors from "../../../constant/Colors";
import RadioButtonRN from "radio-buttons-react-native";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";
import ButtonUi from "../../../components/ui/ButtonUi";
import { ACCOUNTS } from "../../../data/AccountData";
import { CHEQUE } from "../../../data/ChequeData";
import chequeModel from "../../../models/chequeModel";

const dataTypeChequier = [
  {
    label: "Cheques",
  },
  {
    label: "LCN",
  },
];

const dataNumChequier = [
  {
    label: "25 Pages",
  },
  {
    label: "50 Pages",
  },
  {
    label: "100 Pages",
  },
];

const CommandeChequeScreen = ({ navigation }) => {
  const idAccount = navigation.getParam("id");
  const accountSelected = ACCOUNTS.find(
    (account) => account.idAccount === idAccount
  );
  const [nombrePages, setNombrePages] = useState("");
  const [typeCheque, setTypeCheque] = useState("");
  const [nombreChequier, setNombreChequier] = useState("");
  const handleCommandeClick = () => {
    Alert.alert("Commander Cheque", "Voulez vous commandez le cheque", [
      {
        text: "Annuler",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Commander",
        onPress: () => {
          const newCheque = new chequeModel(
            "cheque" + (CHEQUE.length + 1),
            idAccount,
            nombreChequier,
            typeCheque,
            nombrePages,
            new Date()
          );
          CHEQUE.push(newCheque);
          navigation.navigate("ChequeOverview");
          console.log(JSON.stringify({ CHEQUE }));
        },
      },
    ]);
  };

  return (
    <LayoutScreenColor>
      <ScrollView>
        <View style={styles.containerScreen}>
          <View style={styles.accountPart}>
            <AccountCard
              typeAccount={accountSelected.typeAccount}
              numAccount={accountSelected.RIB}
              devis={accountSelected.devis}
              montant={accountSelected.amount}
            />
          </View>

          <View style={styles.chequePart}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Commander un nouveau chéquier</Text>
              <DecorationLine style={{ width: 110, marginTop: 5 }} />
            </View>
            <View style={styles.champContainer}>
              <Text style={styles.titleForm}>Nombre de chéquiers</Text>
              <DecorationLine />
            </View>
            <View style={styles.champContainer}>
              <TextInput
                placeholder="Nombre de chéquier"
                keyboardType="numeric"
                style={styles.champTextInput}
                value={nombreChequier}
                onChangeText={(text) => setNombreChequier(text)}
              />
            </View>
            <View style={styles.champContainer}>
              <Text style={styles.titleForm}>Type de chéquier</Text>
              <DecorationLine />
            </View>
            <View style={styles.champContainer}>
              <RadioButtonRN
                data={dataTypeChequier}
                selectedBtn={(e) => setTypeCheque(e["label"])}
                style={styles.radioButtons}
                textStyle={{
                  fontFamily: Fonts.OpenSansBold,
                  marginLeft: 10,
                }}
                boxStyle={{ width: 150, height: 50 }}
                boxDeactiveBgColor={Colors.cardBackgroundColor}
                boxActiveBgColor={Colors.secondary}
              />
            </View>
            <View style={styles.champContainer}>
              <Text style={styles.titleForm}>Nombre de pages ?</Text>
              <DecorationLine />
            </View>
            <View style={styles.champContainer}>
              <RadioButtonRN
                data={dataNumChequier}
                selectedBtn={(e) => setNombrePages(e["label"])}
                style={styles.radioButtons}
                textStyle={{ fontFamily: Fonts.OpenSansBold, marginLeft: 10 }}
                boxStyle={{ width: 100, height: 50 }}
                boxDeactiveBgColor={Colors.cardBackgroundColor}
                boxActiveBgColor={Colors.secondary}
              />
            </View>
            <View style={styles.buttonContainer}>
              <ButtonUi
                title={"COMMANDER"}
                heightStyle={50}
                textStyle={{ marginLeft: 10 }}
                icon={true}
                nameIcon="shipping-fast"
                sizeIcon={24}
                iconColor={Colors.iconColor}
                onPress={handleCommandeClick}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </LayoutScreenColor>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    flexDirection: "column",
    marginTop: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: Fonts.OpenSansBold,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
    marginBottom: 10,
  },
  titleForm: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 16,
  },
  accountPart: {},
  chequePart: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  champContainer: {
    padding: 10,
  },
  champTextInput: {
    borderBottomColor: Colors.cardBackgroundColor,
    borderBottomWidth: 1,
    paddingTop: 0,
    paddingBottom: 10,
    paddingHorizontal: 20,
    fontFamily: Fonts.OpenSansMedium,
    fontSize: 16,
    textAlign: "left",
    marginHorizontal: 10,
  },
  radioButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});

CommandeChequeScreen.navigationOptions = () => {
  return {
    headerTitle: "Commander Cheque",
    headerTitleStyle: {
      fontFamily: Fonts.OpenSansBold,
      fontSize: 20,
    },
  };
};
export default CommandeChequeScreen;
