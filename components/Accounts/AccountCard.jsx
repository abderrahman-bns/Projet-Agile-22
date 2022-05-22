import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Card from "../ui/Card";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconIonic from "react-native-vector-icons/Ionicons";
import IconWrapper from "../ui/IconWrapper";
import DecorationLine from "../ui/DecorationLine";
import Colors from "../../constant/Colors";
import Fonts from "../../constant/Font";

const AccountCard = ({ typeAccount, numAccount, montant, devis, ...rest }) => {
  return (
    <Card {...rest}>
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <IconWrapper>
            <Icon name="wallet" size={30} color={Colors.iconColor} />
          </IconWrapper>
        </View>
        <View style={styles.accountWrapper}>
          <View style={styles.typeAccountWrapper}>
            <Text style={styles.typeAccount}>{typeAccount}</Text>
            <DecorationLine />
          </View>
          <View>
            <Text style={styles.text}>{numAccount}</Text>
            <Text style={styles.text}>{typeAccount}</Text>
          </View>
        </View>
        <View style={styles.deviWrapper}>
          <Text style={styles.devis}>{montant}</Text>
          <Text>{devis}</Text>
          <IconIonic name="settings-sharp" size={18} color="orange" />
        </View>
      </View>
    </Card>
  );
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width - 50,
  },
  iconWrapper: {},
  accountWrapper: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
    alignItems: "flex-start",
  },
  deviWrapper: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  typeAccount: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 16,
  },
  typeAccountWrapper: {
    flexDirection: "column",
  },
  devis: {
    fontFamily: Fonts.OpenSansRegular,
    color: "green",
  },
  text: {
    fontFamily: Fonts.OpenSansMedium,
  },
});
export default AccountCard;
