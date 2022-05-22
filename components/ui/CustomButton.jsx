import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const CustomButton = (props) => {
  let TouchableComp = TouchableWithoutFeedback;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.touchable}>
      <TouchableComp useForeground={true} {...props}>
        <View style={{ ...props.styles, ...styles.containerWrapper }}>
          {props.children}
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    overflow: "hidden",
    borderRadius: 12,
    width: "100%",
  },
  containerWrapper: {
    width: "100%",
  },
});
export default CustomButton;
