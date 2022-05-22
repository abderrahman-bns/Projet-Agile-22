import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import Colors from "../../constant/Colors";
import Fonts from "../../constant/Font";

const InputTextUi = ({
  valueInput,
  onChangeText,
  style,
  placeholder,
  ...rest
}) => {
  return (
    <View>
      <TextInput
        {...rest}
        placeholder={placeholder}
        style={{ ...styles.inputTextStyle }}
        onChangeText={onChangeText}
        value={valueInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputTextStyle: {
    height: 50,
    borderRadius: 16,
    padding: 10,
    backgroundColor: Colors.cardBackgroundColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    fontFamily: Fonts.OpenSansMedium,
    fontSize: 16,
  },
});
export default InputTextUi;
