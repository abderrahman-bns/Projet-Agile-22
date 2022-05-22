import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import RectangleWrapper from "../ui/RectangleWrapper";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import IconWrapper from "../ui/IconWrapper";
import UserInfo from "../../helpers/UserInfo";
import Fonts from "../../constant/Font";
import DecorationLine from "../ui/DecorationLine";
import Colors from "../../constant/Colors";
import ConseillerInfo from "../../helpers/ConseillerInfo";

const UserInfoData = () => {
  return (
    <>
      {UserInfo.map((userInfo, index) => (
        <View key={index} style={styles.itemContainer}>
          <View style={styles.textNameWrapper}>
            <Text style={styles.textTitleNameInfo}>{userInfo.TitleName}</Text>
            <DecorationLine />
          </View>
          <Text style={styles.textNameInfo}>{userInfo.Name}</Text>
        </View>
      ))}
    </>
  );
};

const ConseillerInfoData = () => {
  return (
    <>
      {ConseillerInfo.map((conseillerInfo, index) => (
        <View key={index} style={styles.itemContainer}>
          <View style={styles.textNameWrapper}>
            <Text style={styles.textTitleNameInfo}>
              {conseillerInfo.TitleName}
            </Text>
            <DecorationLine />
          </View>
          <Text style={styles.textNameInfo}>{conseillerInfo.Name}</Text>
        </View>
      ))}
    </>
  );
};
const ProfileRectangle = ({
  style,
  nameIcon,
  colorIcon,
  title,
  sizeIcon,
  id,
}) => {
  const [showTab, setShowTab] = useState(false);
  const onPressTabHandler = () => {
    setShowTab((prevState) => !prevState);
  };
  let TouchableComp = TouchableWithoutFeedback;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View>
      <TouchableComp useForeground={true} onPress={onPressTabHandler}>
        <View>
          <RectangleWrapper>
            <View style={styles.infoContainRow}>
              <View style={styles.infoContainRow__row}>
                <IconWrapper>
                  <FontAwesome5
                    name={nameIcon}
                    size={sizeIcon}
                    color={colorIcon}
                  />
                </IconWrapper>
                <View style={{ ...styles.textWrapper, ...style }}>
                  <Text style={styles.text}>{title}</Text>
                </View>
              </View>
              <View>
                <FontAwesome
                  name={!showTab ? "arrow-circle-right" : "arrow-circle-down"}
                  size={sizeIcon}
                  color={colorIcon}
                />
              </View>
            </View>
          </RectangleWrapper>
        </View>
      </TouchableComp>
      <View style={styles.dataContainer}>
        {id === 1 && showTab && <UserInfoData />}
        {id === 2 && showTab && <ConseillerInfoData />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainRow: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoContainRow__row: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  textWrapper: { alignSelf: "center", marginLeft: 20 },
  text: {
    fontFamily: Fonts.OpenSansBold,
    letterSpacing: 1,
  },
  dataContainer: {
    width: "100%",
    backgroundColor: Colors.iconColor,
  },
  itemContainer: {
    padding: 10,
    marginBottom: 10,
    marginLeft: 15,
  },
  textNameWrapper: {
    marginBottom: 5,
  },
  textTitleNameInfo: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 15,
  },

  textNameInfo: {
    fontFamily: Fonts.OpenSansMedium,
    letterSpacing: 2,
  },
});
export default ProfileRectangle;
