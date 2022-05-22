import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import CardCards from "../../../components/Card/TypeCard";
import BottomSheetUi from "../../../components/ui/bottomShet";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";

const dataModification1 = [
  { id: "1", title: "100 MAD" },
  { id: "2", title: "200 MAD" },
];
const dataModification2 = [
  { id: "1", title: "5000 MAD" },
  { id: "2", title: "20000 MAD" },
];
const dataModification3 = [
  { id: "1", title: "active online payment" },
  { id: "2", title: "Active contact less" },
  { id: "3", title: "Active with Drawer" },
  { id: "4", title: "pause the Card" },
];
const CardEdit = () => {
  return (
    <LayoutScreenColor>
      <ScrollView style={styles.containerScrollView}>
        <CardCards
          typeAccount={"Card Silver"}
          numAccount={"1345987464566553245"}
          uriImage={{
            uri: "https://www.alyousr.ma/sites/default/files/2019-08/Carte-Bidaya_0.png",
          }}
        />
        <BottomSheetUi
          titleButton={"Modification 1"}
          data={dataModification1}
          height={200}
        />
        <BottomSheetUi
          titleButton={"Modification 2"}
          data={dataModification2}
          height={200}
        />
        <BottomSheetUi
          titleButton={"Modification 3"}
          data={dataModification3}
          height={380}
        />
      </ScrollView>
    </LayoutScreenColor>
  );
};
const styles = StyleSheet.create({});

export default CardEdit;
