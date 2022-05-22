import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../ui/Card";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constant/Colors";
import Fonts from "../../constant/Font";
import IconWrapper from "../ui/IconWrapper";

const VirementCard = ({
  typeCompte,
  dateVirement,
  numCompte,
  toName,
  toRib,
  amount,
  devis,
}) => {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <View>
          <Text style={styles.textDate}>{dateVirement}</Text>
        </View>
        <View style={styles.typeAccount}>
          <Text style={styles.textTypeCompte}>{typeCompte}</Text>
          <Text style={styles.textNumAccount}>{numCompte}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <View
            style={{
              borderBottomColor: Colors.iconColor,
              borderBottomWidth: 2,
              borderRadius: 8,
              width: 150,
            }}
          />
          <View>
            <IconWrapper style={{ borderRadius: 20 }}>
              <MaterialIcons
                name="swap-horizontal-circle"
                size={30}
                color={Colors.iconColor}
              />
            </IconWrapper>
          </View>
          <View
            style={{
              borderBottomColor: Colors.iconColor,
              borderBottomWidth: 2,
              borderRadius: 8,
              width: 150,
            }}
          />
        </View>
        <View style={styles.typeAccount}>
          <Text style={styles.textTypeCompte}>{toName}</Text>
          <Text style={styles.textNumAccount}>{toRib}</Text>
        </View>
        <View>
          <Text style={styles.amount}>
            {amount} {devis}
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 150,
  },
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  typeAccount: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  textDate: {
    fontFamily: Fonts.OpenSansBold,
  },
  textTypeCompte: {
    fontFamily: Fonts.OpenSansMedium,
  },
  textNumAccount: {
    fontFamily: Fonts.OpenSansMedium,
  },
  amount: {
    fontFamily: Fonts.OpenSansLight,
    color: "green",
    fontSize: 15,
  },
});

export default VirementCard;
