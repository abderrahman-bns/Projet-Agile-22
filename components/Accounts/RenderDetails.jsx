import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomViewBorderedWrapper from "../ui/CustomViewBorderedWrapper";

const RenderDetails = ({ operations, fullData }) => {
  return (
    <View>
      {operations.length > 0 &&
        operations.map((operation) => {
          return (
            <CustomViewBorderedWrapper
              key={operation.id}
              style={styles.accountDetailWrapper}
            >
              <View>
                <Text style={styles.dateText}>{operation.dateOperation}</Text>
              </View>
              <View style={styles.accountDetailDescription}>
                <Text
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  style={styles.descriptionText}
                >
                  {operation.description}
                </Text>
              </View>
              <View style={styles.accountDetailAmountWrapper}>
                <Text
                  style={
                    operation.amount > 0 ? { color: "green" } : { color: "red" }
                  }
                >
                  {operation.amount}
                </Text>
                <Text>{operation.deviseType}</Text>
              </View>
            </CustomViewBorderedWrapper>
          );
        })}
      {operations.length === 0 &&
        fullData.map((operation) => {
          return (
            <CustomViewBorderedWrapper
              key={operation.id}
              style={styles.accountDetailWrapper}
            >
              <View>
                <Text style={styles.dateText}>{operation.dateOperation}</Text>
              </View>
              <View style={styles.accountDetailDescription}>
                <Text
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  style={styles.descriptionText}
                >
                  {operation.description}
                </Text>
              </View>
              <View style={styles.accountDetailAmountWrapper}>
                <Text
                  style={
                    operation.amount > 0 ? { color: "green" } : { color: "red" }
                  }
                >
                  {operation.amount.toFixed(2)}
                </Text>
                <Text>{operation.deviseType}</Text>
              </View>
            </CustomViewBorderedWrapper>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  accountDetailDescription: {
    width: "50%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  accountDetailWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  accountDetailAmountWrapper: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default RenderDetails;
