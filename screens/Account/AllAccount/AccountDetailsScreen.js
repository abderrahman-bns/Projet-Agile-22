import React, { useRef, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RenderDetails from "../../../components/Accounts/RenderDetails";
import AccountCard from "../../../components/Accounts/AccountCard";
import { ACCOUNTS } from "../../../data/AccountData";
import { Switch } from "react-native-elements";
import CustomViewWrapper from "../../../components/ui/CustomViewWrapper";
import CustomViewBorderedWrapper from "../../../components/ui/CustomViewBorderedWrapper";
import Fonts from "../../../constant/Font";
import filter from "lodash/filter";
import SearchCustom from "../../../components/ui/SearchCustom";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";

const AccountDetailsScreen = ({ navigation }) => {
  const idAccount = navigation.getParam("id");
  const accountSelected = ACCOUNTS.find(
    (account) => account.idAccount === idAccount
  );
  const [checked, setChecked] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [query, setQuery] = useState("");
  const [operations, setOperations] = useState([]);
  const fullData = useRef(accountSelected.operations);

  const contains = ({ description }, query) => {
    return description.toLowerCase().includes(query);
  };

  const updateSearchHandler = (query) => {
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(operations, (operation) => {
      return contains(operation, formattedQuery);
    });
    setQuery(formattedQuery);
    filteredData.length > 0
      ? setOperations(filteredData)
      : setOperations(fullData.current);
  };
  const toggleSwitch = () => {
    setChecked(!checked);
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await setOperations(fullData.current);
    setRefreshing(false);
  }, [refreshing]);

  return (
    <LayoutScreenColor>
      <ScrollView
        style={styles.containerScrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ flex: 1 }}>
          <View style={styles.accountDetailsPartWrapper}>
            <AccountCard
              typeAccount={accountSelected.typeAccount}
              numAccount={accountSelected.RIB}
              devis={accountSelected.devis}
              montant={accountSelected.amount}
            />
            <CustomViewWrapper>
              <SearchCustom
                query={query}
                updateSearchHandler={updateSearchHandler}
              />
            </CustomViewWrapper>
            <CustomViewBorderedWrapper style={styles.operationSwitchWrapper}>
              <Text style={styles.operationText}>
                Opérations prévisionnelles
              </Text>
              <Switch value={checked} onValueChange={toggleSwitch} />
            </CustomViewBorderedWrapper>
            <RenderDetails
              fullData={fullData.current}
              operations={operations}
            />
          </View>
        </View>
      </ScrollView>
    </LayoutScreenColor>
  );
};

const styles = StyleSheet.create({
  containerScrollView: {},
  containerSearchBar: {
    borderRadius: 20,
  },
  accountDetailsPartWrapper: {
    marginTop: 10,
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  operationSwitchWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },

  operationText: {
    fontFamily: Fonts.OpenSansMedium,
    fontSize: 16,
  },
});
export default AccountDetailsScreen;
