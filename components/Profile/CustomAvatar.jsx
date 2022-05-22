import Colors from "../../constant/Colors";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar, NativeBaseProvider } from "native-base";
import { View } from "react-native";

const CustomAvatar = () => {
  return (
    <LinearGradient
      colors={[Colors.primaryGradient, Colors.secondaryGradient]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={{ marginTop: 10 }}>
        <Avatar
          bg="purple.600"
          alignSelf="center"
          size="2xl"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXLBO0pZIYO19a-axowuCUJPwzUKFk2zXPQRrt5Z4Kf64WwFqN2-a_Y6ehvM9GZEYQF4&usqp=CAU",
          }}
        >
          TE
        </Avatar>
      </View>
    </LinearGradient>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <CustomAvatar />
    </NativeBaseProvider>
  );
};
