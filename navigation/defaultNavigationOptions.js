import Colors from "../constant/Colors";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Fonts from "../constant/Font";
export const DefaultNavigationOption = {
  headerBackground: () => (
    <LinearGradient
      colors={[Colors.primaryGradient, Colors.secondaryGradient]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  ),
  headerTintColor: "black",
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 20,
    letterSpacing: 3,
  },
};
