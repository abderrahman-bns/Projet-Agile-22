import React, { useRef, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AccountCard from "../../../components/Accounts/AccountCard";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";
import DecorationLine from "../../../components/ui/DecorationLine";
import AccountCounselorInfo from "../../../components/Accounts/AccountCounselorInfo";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/ui/HeaderButton";
import Fonts from "../../../constant/Font";
import Choices from "../../../helpers/Choices";
import { ACCOUNTS } from "../../../data/AccountData";

const AccueilScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const fullData = useRef(ACCOUNTS);
  const onRefresh = async () => {
    setRefreshing(true);
    await (fullData.current = ACCOUNTS);
    setRefreshing(false);
  };
  const handleAccountClick = (id) => {
    navigation.navigate({
      routeName: Choices.AccountDetail,
      params: { id: id },
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <LayoutScreenColor>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.account}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Comptes</Text>
              <DecorationLine />
            </View>
            {fullData.current.map((account) => {
              return (
                <View key={account.idAccount}>
                  <AccountCard
                    onPress={handleAccountClick.bind(this, account.idAccount)}
                    typeAccount={account.typeAccount}
                    numAccount={account.RIB}
                    devis={account.devis}
                    montant={account.amount}
                  />
                </View>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.counselorWrapper}>
          <AccountCounselorInfo navigation={navigation} />
        </View>
      </LayoutScreenColor>
    </View>
  );
};

AccueilScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Accueil",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="account"
          iconName="user-circle"
          onPress={() =>
            navData.navigation.navigate({
              routeName: Choices.PROFILE,
            })
          }
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="bars"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  titleWrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.OpenSansBold,
  },
  account: {
    height: "50%",
  },
  counselorWrapper: {
    height: "50%",
  },
});
export default AccueilScreen;
