import React from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CounselorCard from "../Counselor/CounselorCard";
import IconWrapper from "../ui/IconWrapper";
import IconFont from "react-native-vector-icons/FontAwesome";
import FontIcon from "react-native-vector-icons/Fontisto";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import * as Animatable from "react-native-animatable";
import Colors from "../../constant/Colors";
import Fonts from "../../constant/Font";
import Choices from "../../helpers/Choices";

const MyCustomFontAwesomeIcon =
  Animatable.createAnimatableComponent(FontAwesomeIcon);
const MyCustomIconFont = Animatable.createAnimatableComponent(IconFont);
const MyCustomFontIcon = Animatable.createAnimatableComponent(FontIcon);
const AccountCounselorInfo = ({ navigation }) => {
  let TouchableComp = TouchableWithoutFeedback;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  const selectIconHandler = (Choice) => {
    navigation.navigate({
      routeName: Choice,
    });
  };
  const { width } = Dimensions.get("window");
  return (
    <View style={styles.counselorCard}>
      <View style={styles.card}>
        <CounselorCard />
      </View>
      <View
        style={{
          marginTop: 15,
          borderBottomColor: Colors.cardBackgroundColor,
          borderBottomWidth: 2,
          borderRadius: 8,
          width: width / 2,
          marginLeft: width / 4,
        }}
      />
      <View style={styles.buttonsWrapper}>
        <View style={styles.button}>
          <View style={styles.touchable}>
            <TouchableComp
              onPress={selectIconHandler.bind(this, Choices.COMPTE)}
              useForeground={true}
            >
              <View>
                <IconWrapper style={styles.iconWrapperStyle}>
                  <MyCustomFontAwesomeIcon
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    name="coins"
                    size={28}
                    color={Colors.iconColor}
                  />
                </IconWrapper>
              </View>
            </TouchableComp>
          </View>
          <View>
            <Text style={styles.text}>Comptes</Text>
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.touchable}>
            <TouchableComp
              onPress={selectIconHandler.bind(this, Choices.CARTES)}
              useForeground={true}
            >
              <View>
                <IconWrapper style={styles.iconWrapperStyle}>
                  <MyCustomIconFont
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    name="credit-card-alt"
                    size={28}
                    color={Colors.iconColor}
                  />
                </IconWrapper>
              </View>
            </TouchableComp>
          </View>
          <View>
            <Text style={styles.text}>Cartes</Text>
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.touchable}>
            <TouchableComp
              onPress={selectIconHandler.bind(this, Choices.VIREMENTS)}
              useForeground={true}
            >
              <View>
                <IconWrapper style={styles.iconWrapperStyle}>
                  <MyCustomFontIcon
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    name="arrow-swap"
                    size={28}
                    color={Colors.iconColor}
                  />
                </IconWrapper>
              </View>
            </TouchableComp>
          </View>
          <View>
            <Text style={styles.text}>Virements</Text>
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.touchable}>
            <TouchableComp
              onPress={selectIconHandler.bind(this, Choices.CHEQUESOverview)}
              useForeground={true}
            >
              <View>
                <IconWrapper style={styles.iconWrapperStyle}>
                  <MyCustomFontAwesomeIcon
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    name="money-check-alt"
                    size={28}
                    color={Colors.iconColor}
                  />
                </IconWrapper>
              </View>
            </TouchableComp>
          </View>
          <View>
            <Text style={styles.text}>Cheques</Text>
          </View>
        </View>
        <View>
          <MyCustomFontAwesomeIcon
            name="plus"
            size={30}
            color={Colors.iconBackgroundColor}
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
          />
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counselorCard: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  card: {
    marginTop: 15,
  },
  buttonsWrapper: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapperStyle: {
    padding: 12,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: Fonts.OpenSansMedium,
  },
  touchable: {
    overflow: "hidden",
    borderRadius: 12,
  },
});

export default AccountCounselorInfo;
