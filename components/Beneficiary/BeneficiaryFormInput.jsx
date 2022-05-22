import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Input } from "react-native-elements";
import Colors from "../../constant/Colors";
import Font from "../../constant/Font";
import IconWrapper from "../../components/ui/IconWrapper";
import ButtonUi from "../../components/ui/ButtonUi";
import LayoutScreenColor from "../../components/ui/LayoutScreenColor";
import { BENEFICIARIES } from "../../data/BeneficiariesData";
import beneficiariesModel from "../../models/beneficiariesModel";
import { removeByAttr } from "../../helpers/RemoveByAttr";

const BeneficiaryFormInput = ({ navigation, saveOrUpdate }) => {
  const idBenefToUpdate = navigation.getParam("id");
  const selectedBeneficiary = BENEFICIARIES.find(
    (benef) => benef.id === idBenefToUpdate
  );
  console.log("selectedBeneficiary" + JSON.stringify(selectedBeneficiary));
  console.log("selectedBeneficiary " + selectedBeneficiary.Nom);
  console.log("saveOrUpdate : " + saveOrUpdate);
  const [inputForm, setInputForm] = useState({
    nom: saveOrUpdate === "save" ? "" : selectedBeneficiary.Nom,
    prenom: saveOrUpdate === "save" ? "" : selectedBeneficiary.Prenom,
    rib: saveOrUpdate === "save" ? "" : selectedBeneficiary.RIB,
    tel: saveOrUpdate === "save" ? "" : selectedBeneficiary.Tel,
    mail: saveOrUpdate === "save" ? "" : selectedBeneficiary.Email,
  });
  console.log("nom : " + inputForm.nom);
  const handleFormInput = (field, text) => {
    console.log("field : " + field + " text : " + text);
    setInputForm((prevState) => {
      return {
        ...prevState,
        [field]: text,
      };
    });
  };

  const handleSaveBeneficiare = () => {
    const newBenef = new beneficiariesModel(
      "b" + BENEFICIARIES.length + 1,
      inputForm.nom,
      inputForm.prenom,
      inputForm.rib,
      inputForm.tel,
      inputForm.mail,
      "a1"
    );
    BENEFICIARIES.push(newBenef);

    navigation.navigate("BeneficiariesOverview");
  };
  const handleUpdateBeneficiare = () => {
    const addUpdateBeneficiare = new beneficiariesModel(
      selectedBeneficiary.id,
      inputForm.nom,
      inputForm.prenom,
      inputForm.rib,
      inputForm.tel,
      inputForm.mail,
      "a1"
    );
    removeByAttr(BENEFICIARIES, "id", selectedBeneficiary.id);
    BENEFICIARIES.push(addUpdateBeneficiare);
  };
  return (
    <>
      {saveOrUpdate === "save" ? (
        <LayoutScreenColor>
          <ScrollView>
            <View style={styles.screenWrapper}>
              <View style={styles.firstRow}>
                <IconWrapper>
                  <Entypo name="add-user" size={100} color={Colors.iconColor} />
                </IconWrapper>
              </View>
              <View style={styles.secondRow}>
                <Text style={styles.textSecondRow}>
                  Veuillez renseigner les details du bénéficiaire
                </Text>
              </View>
              <View style={styles.thirdRow}>
                <Input
                  placeholder="Nom"
                  leftIcon={
                    <IconWrapper>
                      <Ionicons
                        name="text"
                        size={20}
                        color={Colors.iconColor}
                      />
                    </IconWrapper>
                  }
                  style={styles.textInputStyle}
                  onChangeText={handleFormInput.bind(this, "nom")}
                  value={inputForm.nom}
                />
                <Input
                  placeholder="Prénom"
                  leftIcon={
                    <IconWrapper>
                      <Ionicons
                        name="text"
                        size={20}
                        color={Colors.iconColor}
                      />
                    </IconWrapper>
                  }
                  style={styles.textInputStyle}
                  onChangeText={handleFormInput.bind(this, "prenom")}
                  value={inputForm.prenom}
                />
                <Input
                  placeholder="RIB"
                  leftIcon={
                    <IconWrapper>
                      <Icon name="user" size={24} color={Colors.iconColor} />
                    </IconWrapper>
                  }
                  style={styles.textInputStyle}
                  onChangeText={handleFormInput.bind(this, "rib")}
                  value={inputForm.rib}
                  keyboardType={"numeric"}
                />
                <Input
                  placeholder="N° de téléphone"
                  leftIcon={
                    <IconWrapper>
                      <Icon name="phone" size={24} color={Colors.iconColor} />
                    </IconWrapper>
                  }
                  style={styles.textInputStyle}
                  onChangeText={handleFormInput.bind(this, "tel")}
                  value={inputForm.tel}
                  keyboardType={"numeric"}
                />
                <Input
                  placeholder="E-mail"
                  leftIcon={
                    <IconWrapper>
                      <Icon
                        name="envelope-open"
                        size={24}
                        color={Colors.iconColor}
                      />
                    </IconWrapper>
                  }
                  style={styles.textInputStyle}
                  onChangeText={handleFormInput.bind(this, "mail")}
                  value={inputForm.mail}
                />
                <View style={styles.buttonWrapper}>
                  <ButtonUi
                    title={"AJOUTER"}
                    nameIcon={"save"}
                    icon={true}
                    sizeIcon={24}
                    iconColor={Colors.iconColor}
                    textStyle={{ marginLeft: 10 }}
                    onPress={handleSaveBeneficiare}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </LayoutScreenColor>
      ) : (
        <LayoutScreenColor>
          <ScrollView>
            <View style={styles.screenWrapper}>
              <View style={styles.firstRow}>
                <IconWrapper>
                  <FontAwesome5
                    name="user-edit"
                    size={100}
                    color={Colors.iconColor}
                  />
                </IconWrapper>
              </View>
              <View style={styles.secondRow}>
                <Text style={styles.textSecondRow}>
                  Veuillez modifier les details du bénéficiaire
                </Text>
              </View>
              <View style={styles.thirdRow}>
                <Input
                  placeholder="Nom"
                  leftIcon={
                    <IconWrapper>
                      <Ionicons
                        name="text"
                        size={20}
                        color={Colors.iconColor}
                      />
                    </IconWrapper>
                  }
                  style={styles.textInputStyle}
                  onChangeText={handleFormInput.bind(this, "nom")}
                  value={inputForm.nom}
                />
                <Input
                  placeholder="Prénom"
                  leftIcon={
                    <IconWrapper>
                      <Ionicons
                        name="text"
                        size={20}
                        color={Colors.iconColor}
                      />
                    </IconWrapper>
                  }
                  style={styles.textInputStyle}
                  onChangeText={handleFormInput.bind(this, "prenom")}
                  value={inputForm.prenom}
                />
                <Input
                  placeholder="RIB"
                  leftIcon={
                    <IconWrapper>
                      <Icon name="user" size={24} color={Colors.iconColor} />
                    </IconWrapper>
                  }
                  style={styles.textInputStyle}
                  onChangeText={handleFormInput.bind(this, "rib")}
                  value={inputForm.rib}
                  keyboardType={"numeric"}
                />
                <Input
                  placeholder="N° de téléphone"
                  leftIcon={
                    <IconWrapper>
                      <Icon name="phone" size={24} color={Colors.iconColor} />
                    </IconWrapper>
                  }
                  style={styles.textInputStyle}
                  onChangeText={handleFormInput.bind(this, "tel")}
                  value={inputForm.tel}
                  keyboardType={"numeric"}
                />
                <Input
                  placeholder="E-mail"
                  leftIcon={
                    <IconWrapper>
                      <Icon
                        name="envelope-open"
                        size={24}
                        color={Colors.iconColor}
                      />
                    </IconWrapper>
                  }
                  style={styles.textInputStyle}
                  onChangeText={handleFormInput.bind(this, "mail")}
                  value={inputForm.mail}
                />
                <View style={styles.buttonWrapper}>
                  <ButtonUi
                    title={"MODIFIER"}
                    nameIcon={"save"}
                    icon={true}
                    sizeIcon={24}
                    iconColor={Colors.iconColor}
                    textStyle={{ marginLeft: 10 }}
                    onPress={handleUpdateBeneficiare}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </LayoutScreenColor>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "90%",
    alignSelf: "center",
  },
  firstRow: {
    alignSelf: "center",
    marginTop: 10,
    paddingBottom: 10,
  },
  secondRow: {
    alignSelf: "center",
  },
  textSecondRow: {
    fontSize: 19,
    textAlign: "center",
    fontFamily: Font.OpenSansMedium,
  },
  thirdRow: {
    marginTop: 20,
  },
  buttonWrapper: {
    alignItems: "center",
  },
  textInputStyle: {
    marginLeft: 18,
  },
});
export default BeneficiaryFormInput;
