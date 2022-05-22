import React, { useRef, useState } from "react";
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import CardCards from "../../../components/Card/TypeCard";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";
import Choices from "../../../helpers/Choices";
import ButtonUi from "../../../components/ui/ButtonUi";
import Colors from "../../../constant/Colors";
import { CARTES } from "../../../data/CarteData";
import { ACCOUNTS } from "../../../data/AccountData";

const { width } = Dimensions.get("window");
const CardScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [carteData, setCarteData] = useState(CARTES);
  const fullData = useRef(CARTES);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await setCarteData(fullData.current);
    setRefreshing(false);
  }, [refreshing]);
  const handleAccountClick = (idC, idA) => {
    navigation.navigate({
      routeName: Choices.CARD_DETAIL,
      params: { idCarte: idC, idAccount: idA },
    });
  };
  return (
    <LayoutScreenColor>
      <View style={styles.layoutContainer}>
        <ScrollView
          style={styles.screenContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {carteData.map((carte) => {
            return (
              <View key={carte.idCarte}>
                <CardCards
                  typeAccount={carte.typeCarte}
                  numAccount={
                    ACCOUNTS.find(
                      (account) => account.idAccount === carte.idAccount
                    ).RIB
                  }
                  onPress={handleAccountClick.bind(
                    this,
                    carte.idCarte,
                    carte.idAccount
                  )}
                  uriImage={carte.imageCarte}
                  status={carte.status}
                />
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <ButtonUi
            onPress={() => navigation.navigate("ChoixAccountCarte")}
            title={"Commander Carte"}
            widthStyle={{ width: width - 30 }}
            heightStyle={{ height: 60 }}
            icon={true}
            nameIcon="shipping-fast"
            sizeIcon={24}
            iconColor={Colors.iconColor}
            textStyle={{ marginLeft: 10, fontSize: 17 }}
          />
        </View>
      </View>
    </LayoutScreenColor>
  );
};

CardScreen.navigationOptions = () => {
  return {
    headerTitle: "Les Cartes",
  };
};
const styles = StyleSheet.create({
  layoutContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  screenContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    alignSelf: "center",
  },
});

export default CardScreen;
