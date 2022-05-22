import React, { useState } from "react";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";
import { Input } from "react-native-elements";
import IconWrapper from "../../../components/ui/IconWrapper";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../../constant/Colors";
import Font from "../../../constant/Font";
import ButtonUi from "../../../components/ui/ButtonUi";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import DecorationLine from "../../../components/ui/DecorationLine";
import virementsModel from "../../../models/virementsModel";
import { VIREMENTS } from "../../../data/virementData";
import { ACCOUNTS } from "../../../data/AccountData";
const PassVirementScreen = ({ navigation }) => {
  const [inputForm, setInputForm] = useState({
    montant: "",
    msg: "",
  });

  const handleChangeText = (field, text) => {
    setInputForm((prevState) => {
      return {
        ...prevState,
        [field]: text,
      };
    });
  };
  const onValideVirement = () => {
    const idAccount1 = navigation.getParam("idAccount1");
    const idAccount2 = navigation.getParam("idAccount2");
    const selectedAccount1 = ACCOUNTS.find(
      (account) => account.idAccount === idAccount1
    );
    const selectedAccount2 = ACCOUNTS.find(
      (account) => account.idAccount === idAccount2
    );
    const newVirement = new virementsModel(
      "v" + VIREMENTS.length + 1,
      idAccount1,
      selectedAccount1.idCarte,
      "",
      selectedAccount1.RIB,
      selectedAccount1.typeAccount,
      selectedAccount2.typeAccount,
      selectedAccount2.RIB,
      new Date(),
      inputForm.montant,
      "MAD"
    );
    VIREMENTS.push(newVirement);
    selectedAccount1.amount =
      Number(selectedAccount1.amount) - Number(inputForm.montant);
    selectedAccount2.amount =
      Number(selectedAccount2.amount) + Number(inputForm.montant);
    navigation.navigate("Virement");
  };
  return (
    <LayoutScreenColor>
      <ScrollView>
        <View style={styles.containerScreen}>
          <View style={styles.textTilteContainer}>
            <Text style={styles.textTitleStyle}>
              Saisir un virement entre vos comptes
            </Text>
            <DecorationLine style={{ width: 180, paddingTop: 9 }} />
          </View>
          <View style={styles.inputsContainer}>
            <Input
              keyboardType={"numeric"}
              placeholder="MONTANT"
              leftIcon={
                <IconWrapper>
                  <MaterialIcons
                    name="attach-money"
                    size={20}
                    color={Colors.iconColor}
                  />
                </IconWrapper>
              }
              style={styles.textInputStyle}
              value={inputForm.montant}
              onChangeText={handleChangeText.bind(this, "montant")}
            />
          </View>
          <View>
            <Input
              placeholder="INTITULE POUR LE COMPTE A CREDITER"
              leftIcon={
                <IconWrapper>
                  <Ionicons name="text" size={20} color={Colors.iconColor} />
                </IconWrapper>
              }
              style={styles.textInputStyle}
              value={inputForm.msg}
              onChangeText={handleChangeText.bind(this, "msg")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <ButtonUi title={"VALIDER"} onPress={onValideVirement} />
            <ButtonUi title={"ABANDONNER"} />
          </View>
        </View>
      </ScrollView>
    </LayoutScreenColor>
  );
};

PassVirementScreen.navigationOptions = () => {
  return {
    headerTitle: "Envoyer Virement",
  };
};
const styles = StyleSheet.create({
  textTitleStyle: {
    fontSize: 18,
    fontFamily: Font.OpenSansMedium,
  },
  textInputStyle: {
    fontSize: 15,
  },
  containerScreen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
  },
  textTilteContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  inputsContainer: {
    marginTop: 60,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 80,
    alignItems: "center",
  },
});
export default PassVirementScreen;
