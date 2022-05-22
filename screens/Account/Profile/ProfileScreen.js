import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ProfileInfoData from "../../../helpers/ProfileInfoData";
import ProfileRectangle from "../../../components/Profile/ProfileRectangle";
import CustomAvatar from "../../../components/Profile/CustomAvatar";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../constant/Colors";

const ProfileScreen = () => {
  return (
    <View style={styles.profileWrapper}>
      <View style={styles.avatarWrapper}>
        <CustomAvatar />
      </View>
      <LinearGradient
        colors={[Colors.primaryGradient, Colors.secondaryGradient]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <ScrollView>
          <View style={styles.infoWrapper}>
            {ProfileInfoData &&
              ProfileInfoData.map((info) => {
                return (
                  <View key={info.id}>
                    <ProfileRectangle
                      id={info.id}
                      nameIcon={info.NameIcon}
                      sizeIcon={info.SizeIcon}
                      colorIcon={info.ColorIcon}
                      title={info.Title}
                    />
                  </View>
                );
              })}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  avatarWrapper: {
    height: "30%",
  },
  infoWrapper: {
    height: "70%",
  },
});
export default ProfileScreen;
