import React from "react";
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import Colors from "../../constant/Colors";

const Card = (props) => {
  let TouchableComp = TouchableWithoutFeedback;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.touchable}>
      <TouchableComp useForeground={true} {...props}>
        <View style={{ ...styles.cardWrapper, ...props.style }}>
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
  },
  cardWrapper: {
    overflow: "hidden",
    height: 100,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 12,
    backgroundColor: Colors.cardBackgroundColor,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
export default Card;
