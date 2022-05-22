import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonUi from "../../../components/ui/ButtonUi";
import Choices from "../../../helpers/Choices";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";

const ChequeOverviewScreen = ({ navigation }) => {
  const idAccount = navigation.getParam("id");
  return (
    <LayoutScreenColor>
      <View style={{ flex: 1 }}>
        <View></View>
        <View style={styles.buttonsWrapper}>
          <ButtonUi
            title={"Opposition sur chèque"}
            onPress={() => {
              navigation.navigate({
                routeName: Choices.OPPOSER_CHEQUE,
                params: { id: idAccount },
              });
            }}
          />
          <ButtonUi
            title={"Commander un chèque"}
            onPress={() => {
              navigation.navigate({
                routeName: Choices.COMMANDER_CHEQUE,
                params: { id: idAccount },
              });
            }}
          />
          <ButtonUi
            title={"Vos Commandes"}
            onPress={() => {
              navigation.navigate({
                routeName: Choices.COMMANDER_CHEQUE,
                params: { id: idAccount },
              });
            }}
          />
        </View>
      </View>
    </LayoutScreenColor>
  );
};

ChequeOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Chèques",
  };
};
const styles = StyleSheet.create({
  buttonsWrapper: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
  },
});

export default ChequeOverviewScreen;
