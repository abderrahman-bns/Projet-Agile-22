import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import DecorationLine from "../ui/DecorationLine";

import Font from "../../constant/Font";

const CommandeCarteCard = ({
  uriImage,
  titleCarte,
  dureValiditer,
  plafondPaiement,
  plafondRetrait,
  tarification,
}) => {
  return (
    <View style={styles.cartePartItem}>
      <View style={styles.imageCarteWrapper}>
        <Image style={styles.logo} source={uriImage} />
      </View>
      <View>
        <View style={styles.infoCarteWrapper}>
          <View>
            <Text style={styles.titleCarte}>{titleCarte}</Text>
            <DecorationLine />
          </View>
          <View style={{ ...styles.rowItemV1, ...styles.infoCarteRow }}>
            <Text style={styles.titleInfoCarte}>Durée de validité:</Text>
            <Text style={styles.resultInfoCarte}>{dureValiditer}</Text>
          </View>
          <View style={{ ...styles.infoCarteRow, ...styles.choixRow }}>
            <View>
              <Text style={styles.titleInfoCarte}>Plafond de paiement:</Text>
              <Text style={styles.resultInfoCarte}>{plafondPaiement}</Text>
            </View>
          </View>
          <View style={styles.infoCarteRow}>
            <Text style={styles.titleInfoCarte}>Plafond de retrait:</Text>
            <Text style={styles.resultInfoCarte}>{plafondRetrait}</Text>
          </View>
          <View style={{ ...styles.rowItemV1, ...styles.infoCarteRow }}>
            <Text style={styles.titleInfoCarte}>Tarification:</Text>
            <Text style={styles.resultInfoCarte}>{tarification}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageCarteWrapper: {
    marginRight: 30,
  },
  cartePartWrapper: {
    flexDirection: "column",
  },
  cartePartItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-start",
    marginHorizontal: 10,
  },
  infoCarteWrapper: {
    flexDirection: "column",
    marginTop: 10,
    width: "80%",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  logo: {
    width: 100,
    height: 70,
    borderRadius: 6,
  },
  rowItemV1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  infoCarteRow: {
    marginVertical: 10,
  },
  titleCarte: {
    fontSize: 17,
    fontFamily: Font.OpenSansBold,
  },
  titleInfoCarte: {
    fontFamily: Font.OpenSansMedium,
    fontSize: 16,
  },
  resultInfoCarte: {
    fontFamily: Font.OpenSansBold,
    fontSize: 14,
  },
  choixRow: {},
});

export default CommandeCarteCard;
