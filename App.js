import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AccountNavigator from "./navigation/AccountNavigation/AccountNavigator";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/Fonts/OpenSans-Regular.ttf"),
    "open-sans-medium": require("./assets/Fonts/OpenSans-Medium.ttf"),
    "open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
    "open-sans-light": require("./assets/Fonts/OpenSans-Light.ttf"),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <SafeAreaProvider>
      <AccountNavigator />
    </SafeAreaProvider>
  );
}
