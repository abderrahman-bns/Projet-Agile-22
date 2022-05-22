import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonUi from "../../../components/ui/ButtonUi";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";
import Font from "../../../constant/Font";
import DecorationLine from "../../../components/ui/DecorationLine";

const VirementMenuScreen = ({ navigation }) => {
  return (
    <LayoutScreenColor>
      <View style={styles.screenWrapper}>
        <View style={styles.virementPart}>
          <Text style={styles.titleText}>FAIRE UN VIREMENT</Text>
          <DecorationLine style={{ width: 80 }} />
        </View>
        <View style={styles.virementPartButton}>
          <ButtonUi
            title={"ENTRE VOS COMPTES"}
            onPress={() =>
              navigation.navigate({
                routeName: "ChoixAccountVirement",
              })
            }
          />
          <ButtonUi title={"VERS UN BENEFICIARE"} />
        </View>
        <View style={styles.beneficiaryPart}>
          <Text style={styles.titleText}>GERER VOS BENEFICIAIRES</Text>
          <DecorationLine style={{ width: 80 }} />
        </View>
        <View style={styles.beneficiaryPartButton}>
          <ButtonUi title={"VOS BENEFICIARES"} />
        </View>
        <View style={styles.historiquePart}>
          <Text style={styles.titleText}>HISTORIQUE DE VOS VIREMENT</Text>
          <DecorationLine style={{ width: 80 }} />
        </View>
        <View style={styles.historiquePartButton}>
          <ButtonUi title={"VOS VIREMENTS"} />
        </View>
      </View>
    </LayoutScreenColor>
  );
};

VirementMenuScreen.navigationOptions = () => {
  return {
    headerTitle: "VIREMENTS",
  };
};
const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    alignSelf: "center",
  },
  virementPart: {},
  virementPartButton: {
    marginBottom: 30,
  },
  beneficiaryPart: {},
  beneficiaryPartButton: {
    marginBottom: 30,
  },
  historiquePart: {},
  historiquePartButton: {
    marginBottom: 30,
  },
  titleText: {
    fontSize: 18,
    fontFamily: Font.OpenSansMedium,
  },
});
export default VirementMenuScreen;
