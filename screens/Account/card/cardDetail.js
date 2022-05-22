import React, {useRef, useState} from "react";
import {RefreshControl, ScrollView, StyleSheet} from "react-native";
import CardCards from "../../../components/Card/TypeCard";
import {ACCOUNTS} from "../../../data/AccountData";
import {CARTES} from "../../../data/CarteData";
import filter from "lodash/filter";
import RenderDetails from "../../../components/Accounts/RenderDetails";
import SearchCustom from "../../../components/ui/SearchCustom";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";

const CardDetail = ({ navigation }) => {
  const idCarte = navigation.getParam("idCarte");
  const idAccount = navigation.getParam("idAccount");
  console.log(idCarte);
  console.log(idAccount);

  const accountSelected = ACCOUNTS.find(
    (account) => account.idAccount === idAccount
  );
  const carteSelected = CARTES.find((carte) => carte.idCarte === idCarte);
  console.log("account : " + accountSelected);
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
        <CardCards
          typeAccount={carteSelected.typeCarte}
          numAccount={accountSelected.RIB}
          uriImage={carteSelected.imageCarte}
          status={carteSelected.status}
        />
        <SearchCustom query={query} updateSearchHandler={updateSearchHandler} />
        <RenderDetails operations={operations} fullData={fullData.current} />
      </ScrollView>
    </LayoutScreenColor>
  );
};
const styles = StyleSheet.create({
  containerSearchBar: {
    borderRadius: 20,
  },
  containerScrollView: {},
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
});

export default CardDetail;
