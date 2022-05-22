import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Card from "../ui/Card";
import IconWrapper from "../ui/IconWrapper";
import DecorationLine from "../ui/DecorationLine";
import Colors from "../../constant/Colors";
import Fonts from "../../constant/Font";
import { AntDesign, Feather } from "@expo/vector-icons";

const CardCards = (props) => {
  return (
    <Card style={{ height: 110 }} {...props}>
      <View style={styles.container}>
        <View>
          <View style={styles.iconWrapper}>
            <IconWrapper
              style={{ alignItems: "center", width: 50, margin: 10 }}
            >
              <AntDesign name="creditcard" size={30} color={Colors.iconColor} />
            </IconWrapper>
          </View>
          <View style={styles.activated}>
            <Feather name="power" size={18} color="black" />
            <Text style={styles.textActivatedStyle}>{props.status}</Text>
          </View>
        </View>
        <View style={styles.accountWrapper}>
          <View style={styles.typeAccountWrapper}>
            <Text style={styles.typeAccount}>{props.typeAccount}</Text>
            <DecorationLine />
          </View>
          <View>
            <Text style={styles.text}>{props.numAccount}</Text>
            <Text style={styles.text}>{props.typeAccount}</Text>
          </View>
        </View>
        <View style={styles.deviWrapper}>
          <Image style={styles.logo} source={props.uriImage} />
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

    marginRight: 10,
  },
  deviWrapper: {},
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
  activated: {
    flexDirection: "row",
    marginBottom: 10,
  },
  textActivatedStyle: {
    marginLeft: 4,
    fontFamily: Fonts.OpenSansRegular,
  },
  logo: {
    width: 70,
    height: 50,
    borderRadius: 6,
  },
});
export default CardCards;
