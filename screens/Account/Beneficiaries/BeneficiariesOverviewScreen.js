import React, { useRef, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { BENEFICIARIES } from "../../../data/BeneficiariesData";
import BeneficiaryItem from "../../../components/Beneficiary/BeneficiaryItem";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/ui/HeaderButton";
import { removeByAttr } from "../../../helpers/RemoveByAttr";
const BeneficiariesOverviewScreen = ({ navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const fullData = useRef(BENEFICIARIES);
  const fetchDate = async () => {
    setIsRefreshing(true);
    await (fullData.current = BENEFICIARIES);
    setIsRefreshing(false);
  };
  const handleDeleteAction = (idBeneficiaire) => {
    const benefSelected = BENEFICIARIES.find(
      (benef) => benef.id === idBeneficiaire
    );

    Alert.alert(
      "Supprimer Beneficiare",
      "Voulez vous Supprimer " + benefSelected.Nom + " " + benefSelected.Prenom,
      [
        {
          text: "Annuler",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Supprimer",
          onPress: () => {
            setIsRefreshing(true);
            removeByAttr(BENEFICIARIES, "id", idBeneficiaire);
            fullData.current = BENEFICIARIES;
            setIsRefreshing(false);
          },
        },
      ]
    );
  };

  const handleUpdateAction = (idBeneficiaire) => {
    navigation.navigate({
      routeName: "UpdateBeneficiaryScreen",
      params: {
        id: idBeneficiaire,
      },
    });
  };
  return (
    <LayoutScreenColor>
      <View style={styles.screen}>
        <FlatList
          refreshing={isRefreshing}
          onRefresh={fetchDate}
          data={fullData.current.reverse()}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <BeneficiaryItem
              nom={itemData.item.Nom}
              prenom={itemData.item.Prenom}
              rib={itemData.item.RIB}
              Tel={itemData.item.Tel}
              email={itemData.item.Email}
              onDeleteFunction={handleDeleteAction.bind(this, itemData.item.id)}
              onUpdateFunction={handleUpdateAction.bind(this, itemData.item.id)}
            />
          )}
        />
      </View>
    </LayoutScreenColor>
  );
};

BeneficiariesOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Bénéficiaires",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="bars"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="add"
          iconName="plus-circle"
          onPress={() =>
            navData.navigation.navigate({
              routeName: "AddBeneficiaryScreen",
            })
          }
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 20,
  },
  iconNouveaux: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 20,
  },
});
export default BeneficiariesOverviewScreen;
