import React from "react";
import { StyleSheet, Text } from "react-native";
import CustomViewWrapper from "./CustomViewWrapper";
import CustomButton from "./CustomButton";
import Colors from "../../constant/Colors";
import Fonts from "../../constant/Font";
import { FontAwesome5 } from "@expo/vector-icons";

const ButtonUi = ({
  title,
  nameIcon,
  iconColor,
  iconStyle,
  sizeIcon,
  onPress,
  widthStyle,
  heightStyle,
  icon,
  textStyle,
}) => {
  return (
    <>
      <CustomViewWrapper
        style={{ ...styles.customViewButtonWrapper, ...widthStyle }}
      >
        <CustomButton
          styles={{ ...styles.customViewButton, ...heightStyle }}
          onPress={onPress}
        >
          {icon && (
            <FontAwesome5
              name={nameIcon}
              size={sizeIcon}
              color={iconColor}
              style={iconStyle}
            />
          )}
          <Text style={{ ...styles.textButton, ...textStyle }}>{title}</Text>
        </CustomButton>
      </CustomViewWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  customViewButtonWrapper: {
    width: "80%",
  },
  customViewButton: {
    width: "100%",
    backgroundColor: Colors.iconBackgroundColor,
    overflow: "hidden",
    borderRadius: 12,
    borderColor: Colors.iconBackgroundColor,
    borderWidth: 1,
    height: 35,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  textButton: {
    fontFamily: Fonts.OpenSansBold,
    color: Colors.iconColor,
  },
});
export default ButtonUi;
