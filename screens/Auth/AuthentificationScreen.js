import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import IconWrapper from "../../components/ui/IconWrapper";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../constant/Colors";
import Font from "../../constant/Font";
import Fonts from "../../constant/Font";
import ButtonUi from "../../components/ui/ButtonUi";
import { LinearGradient } from "expo-linear-gradient";
import { USER } from "../../data/UserData";

const AuthentificationScreen = ({ navigation }) => {
  const [identifiant, setIdentifiant] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeText = (text) => {
    setIdentifiant(text);
  };
  const handleChangePassword = (password) => {
    setPassword(password);
  };

  const handleAuthRequest = () => {
    if (USER.idantifiant === identifiant && USER.password === password) {
      navigation.navigate("App");
    } else {
      setIdentifiant("");
      setPassword("");
      Alert.alert(
        "Authentification Erroné",
        "La combinaison identifiant et mot de passe saisie ne correspond à aucun compte. Veuillez réessayer. ",
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
  return (
    <View style={styles.screenWrapper}>
      <LinearGradient
        colors={[Colors.primaryGradient, Colors.secondaryGradient]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.firstRow}>
          <Text style={styles.principalTitleStyle}>Bienvenue</Text>
          <Text style={styles.secondaryTitleStyle}>
            Connectez-vous pour continuer!
          </Text>
        </View>
        <View style={styles.secondRowWrapper}>
          <View style={styles.secondRow}>
            <Input
              placeholder="Identifiant"
              leftIcon={
                <IconWrapper>
                  <Entypo name="user" size={20} color={Colors.iconColor} />
                </IconWrapper>
              }
              style={styles.textInputStyle}
              value={identifiant}
              onChangeText={handleChangeText}
              keyboardType={"numeric"}
            />
            <Input
              placeholder="Mot de passe"
              leftIcon={
                <IconWrapper>
                  <Entypo name="lock" size={20} color={Colors.iconColor} />
                </IconWrapper>
              }
              secureTextEntry={true}
              style={styles.textInputStyle}
              value={password}
              onChangeText={handleChangePassword}
            />
            <ButtonUi title={"SE CONNECTER"} onPress={handleAuthRequest} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

AuthentificationScreen.navigationOptions = () => {
  return {
    headerTitle: "",
    headerTintColor: "white",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontFamily: Fonts.OpenSansBold,
      fontSize: 20,
      letterSpacing: 3,
    },
  };
};
const styles = StyleSheet.create({
  textInputStyle: {
    marginLeft: 18,
  },
  screenWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  firstRow: {
    marginTop: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
  },
  secondRowWrapper: {
    height: "80%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    backgroundColor: Colors.iconColor,
  },
  secondRow: {
    width: "80%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 150,
  },
  principalTitleStyle: {
    fontSize: 34,
    fontFamily: Font.OpenSansBold,
    color: Colors.iconColor,
  },
  secondaryTitleStyle: {
    fontFamily: Font.OpenSansLight,
    color: Colors.iconColor,
  },
});

export default AuthentificationScreen;
