import { StyleSheet, Text, View } from "react-native";
import DecorationLine from "../ui/DecorationLine";
import React from "react";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constant/Colors";
import IconWrapper from "../ui/IconWrapper";
import Fonts from "../../constant/Font";

const ChequeCardOpposer = ({
  titleCheque,
  numCheque,
  onHandledDeleteCheque,
}) => {
  return (
    <View style={styles.infoCheque}>
      <IconWrapper style={{ padding: 9 }}>
        <FontAwesome5
          name="file-signature"
          size={24}
          color={Colors.iconColor}
        />
      </IconWrapper>
      <View>
        <View style={styles.nameCheque}>
          <Text style={styles.titleStyle}>{titleCheque}</Text>
          <DecorationLine />
        </View>
        <Text style={styles.numStyle}>{numCheque}</Text>
      </View>
      <IconWrapper style={{ padding: 9, backgroundColor: Colors.red }}>
        <MaterialCommunityIcons
          name="close-thick"
          size={24}
          color={Colors.iconColor}
          onPress={onHandledDeleteCheque}
        />
      </IconWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 13,
    letterSpacing: 1,
  },
  numStyle: {
    fontFamily: Fonts.OpenSansMedium,
  },
  nameCheque: {
    paddingBottom: 5,
  },
  infoCheque: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 25,
  },
});

export default ChequeCardOpposer;
