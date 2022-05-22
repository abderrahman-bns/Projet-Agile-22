import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import RightSwipe from "../ui/RightSwipe";
import Card from "../ui/Card";
import Font from "../../constant/Font";
import Colors from "../../constant/Colors";

const BeneficiaryItem = ({
  nom,
  prenom,
  rib,
  email,
  Tel,
  onDeleteFunction,
  onUpdateFunction,
}) => {
  return (
    <Swipeable
      renderRightActions={() => (
        <RightSwipe
          onUpdateFunction={onUpdateFunction}
          onDeleteFunction={onDeleteFunction}
        />
      )}
    >
      <Card style={styles.cardStyle}>
        <View style={styles.flexrow}>
          <View style={styles.iconView}>
            <FontAwesome
              name="user"
              size={30}
              color={Colors.iconBackgroundColor}
            />
          </View>
          <View>
            <View style={styles.ViewName}>
              <Text style={styles.textName}>
                {nom} {prenom}
              </Text>
            </View>
            <View style={styles.ViewNum}>
              <Text style={styles.textNum}>{rib}</Text>
            </View>
            <View style={styles.ViewInfo}>
              <Text style={styles.textInfo}>E-mail : {email}</Text>
              <Text style={styles.textInfo}>Tel : {Tel}</Text>
            </View>
          </View>
          <View style={styles.flechIcon}>
            <AntDesign
              name="left"
              size={24}
              color={Colors.iconBackgroundColor}
            />
          </View>
        </View>
      </Card>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 130,
  },
  ViewName: {
    padding: 10,
    marginRight: 70,
  },
  textName: {
    fontSize: 19,
    fontFamily: Font.OpenSansMedium,
  },
  ViewNum: {
    marginLeft: 10,
  },
  textNum: {
    color: Colors.iconBackgroundColor,
    fontFamily: Font.OpenSansRegular,
    fontSize: 15,
  },
  flexrow: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  iconView: {
    justifyContent: "center",
    marginLeft: 25,
  },
  flechIcon: {
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 10,
  },
  ViewInfo: {
    justifyContent: "space-between",
    marginTop: 10,
  },
});
export default BeneficiaryItem;
