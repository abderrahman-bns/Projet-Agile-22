import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CardCards from "../../../components/Card/TypeCard";
import infoCard from "../../../helpers/infoCard";
import TextView from "../../../components/Card/TextView";
import LayoutScreenColor from "../../../components/ui/LayoutScreenColor";

const CardInfo = ({ navigation }) => {
  return (
    <LayoutScreenColor>
      <ScrollView style={{ flex: 1 }}>
        <CardCards
          typeAccount={"Card Silver"}
          numAccount={"1345987464566553245"}
          uriImage={{
            uri: "https://www.alyousr.ma/sites/default/files/2019-08/Carte-Bidaya_0.png",
          }}
        />
        <View style={styles.infoContainer}>
          {infoCard &&
            infoCard.map((info, index) => {
              return (
                <View key={index}>
                  <TextView
                    title={"Date de Mission"}
                    description={info.DateMission}
                  />
                  <TextView title={"Status"} description={info.status} />
                  <TextView title={"Compte"} description={info.Compte} />
                  <TextView title={"Solde"} description={info.Solde} />
                  <TextView
                    title={"Date de Validation"}
                    description={info.DateValidation}
                  />
                  <TextView
                    title={"Date d'expiration"}
                    description={info.DateExperation}
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </LayoutScreenColor>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 20,
  },
});
export default CardInfo;
