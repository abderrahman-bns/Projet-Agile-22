import React, { useState, useRef } from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import VirementCard from "../../../components/Virement/VirementCard";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/ui/HeaderButton";
import { VIREMENTS } from "../../../data/virementData";

const VirementScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const fullData = useRef(VIREMENTS);
  const onRefresh = async () => {
    setRefreshing(true);
    await (fullData.current = VIREMENTS);
    setRefreshing(false);
  };
  return (
    <View style={{ flex: 1 }}>
      <LayoutScreenColor>
        <View style={{ marginTop: 15 }}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {fullData.current.map((virement) => {
              return (
                <View key={virement.idVirement}>
                  <VirementCard
                    dateVirement={`${virement.dateVirement
                      .getDate()
                      .toString()}/${virement.dateVirement
                      .getMonth()
                      .toString()}/${virement.dateVirement
                      .getFullYear()
                      .toString()}`}
                    typeCompte={virement.typeCompte}
                    numCompte={virement.RIB}
                    devis={virement.devis}
                    toName={virement.toName}
                    toRib={virement.toRib}
                    amount={virement.amount}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </LayoutScreenColor>
    </View>
  );
};

const styles = StyleSheet.create({
  iconAdd: {},
});
VirementScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Virements",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="add"
          iconName="plus-circle"
          onPress={() => navData.navigation.navigate("VirementMenu")}
        />
      </HeaderButtons>
    ),
  };
};
export default VirementScreen;
