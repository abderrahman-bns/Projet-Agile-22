import React, { useRef, useState } from "react";
import {
  Alert,
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../../../constant/Colors";
import Fonts from "../../../constant/Font";
import ChequeCardOpposer from "../../../components/Cheque/ChequeCardOpposer";
import DecorationLine from "../../../components/ui/DecorationLine";
import InputTextUi from "../../../components/ui/InputTextUi";
import ButtonUi from "../../../components/ui/ButtonUi";
import AccountCard from "../../../components/Accounts/AccountCard";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";
import { ACCOUNTS } from "../../../data/AccountData";
import { CHEQUE } from "../../../data/ChequeData";
import { removeByAttr } from "../../../helpers/RemoveByAttr";
const { width } = Dimensions.get("window");

const OpposerChequierScreen = ({ navigation }) => {
  const idAccount = navigation.getParam("id");
  const [refreshing, setRefreshing] = useState(false);
  const fullData = useRef(CHEQUE);
  const accountSelected = ACCOUNTS.find(
    (account) => account.idAccount === idAccount
  );
  const [numAccount, setNumAccount] = useState("");

  const onHandledDeleteCheque = (idCheque) => {
    Alert.alert("Opposer Cheque", "Voulez vous Opposer le cheque " + idCheque, [
      {
        text: "Annuler",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Opposer",
        onPress: () => {
          removeByAttr(CHEQUE, "idCheque", idCheque);
        },
      },
    ]);
  };
  const onHandleChange = (text) => {
    setNumAccount(text);
  };
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await (fullData.current = CHEQUE);
    setRefreshing(false);
  }, [refreshing]);
  return (
    <LayoutScreenColor>
      <ScrollView
        style={styles.opposerContainerWrapper}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.opposerContainerWrapper__row1}>
          <AccountCard
            typeAccount={accountSelected.typeAccount}
            numAccount={accountSelected.RIB}
            devis={accountSelected.devis}
            montant={accountSelected.amount}
          />
        </View>
        <View style={styles.container_row2_row3}>
          <View style={styles.opposerContainerWrapper__row2}>
            <View style={styles.titleWrapper}>
              <Text style={styles.titleText}>Opposer un chéquier</Text>
              <DecorationLine style={{ width: 48 }} />
            </View>
            <View>
              {fullData.current.map((cheque) => {
                return (
                  <View key={cheque.idCheque}>
                    <ChequeCardOpposer
                      titleCheque={cheque.idCheque}
                      numCheque={`${accountSelected.RIB} CH ${CHEQUE.length}`}
                      onHandledDeleteCheque={onHandledDeleteCheque.bind(
                        this,
                        cheque.idCheque
                      )}
                    />
                  </View>
                );
              })}
              {fullData.current.length === 0 && (
                <View>
                  <Text style={styles.textStyle}>
                    Vous n'avez aucun cheque a opposer
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View
            style={{
              // marginTop: 30,
              borderBottomColor: Colors.cardBackgroundColor,
              borderBottomWidth: 2,
              borderRadius: 8,
              width: width / 2,
              marginLeft: width / 4,
            }}
          />
          <View style={styles.opposerContainerWrapper__row3}>
            <View style={styles.titleWrapper}>
              <Text style={styles.titleText}>Opposer un chèque</Text>
              <DecorationLine style={{ width: 48 }} />
            </View>
            <View style={styles.opposerChequeContainer}>
              <View>
                <InputTextUi
                  placeholder={"N° de série du chèque"}
                  valueInput={numAccount}
                  onChangeText={onHandleChange}
                />
              </View>
              <View style={{ width: "100%" }}>
                <ButtonUi
                  title={"Opposer"}
                  widthStyle={{ width: 250, marginLeft: 55 }}
                  heightStyle={{ height: 40 }}
                  icon={false}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LayoutScreenColor>
  );
};

OpposerChequierScreen.navigationOptions = () => {
  return {
    headerTitle: "Opposition du cheque",
    headerTitleStyle: {
      fontFamily: Fonts.OpenSansBold,
      fontSize: 20,
      letterSpacing: 1,
    },
  };
};
const styles = StyleSheet.create({
  opposerContainerWrapper: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
  },
  opposerContainerWrapper__row1: {
    marginTop: 15,
    // height: "20%",
  },
  opposerContainerWrapper__row2: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 15,
    // height: "60%",
  },
  opposerContainerWrapper__row3: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: "100%",
    // height: "40%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  titleText: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 14,
  },
  container_row2_row3: {
    marginTop: 20,
    // height: "80%",
    width: "100%",
  },
  opposerChequeContainer: {
    width: "100%",
    justifyContent: "space-between",
    marginTop: 20,
    // height: "60%",
  },
  textStyle: {
    fontSize: 19,
    fontFamily: Fonts.OpenSansMedium,
    textAlign: "center",
    padding: 15,
  },
});

export default OpposerChequierScreen;
