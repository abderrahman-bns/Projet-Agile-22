import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import ButtonUi from "../../components/ui/ButtonUi";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { ListItem } from "react-native-elements";
import { Switch } from "react-native-gesture-handler";
import Colors from "../../constant/Colors";

const { width } = Dimensions.get("window");
const BottomSheetUi = ({ data, titleButton, height }) => {
  const bottomSheet = useRef();
  const [isEnabled, setIsEnabled] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const toggleSwitch = (id) => {
    setIsEnabled((prevState) => {
      return {
        ...prevState,
        [id]: !prevState[id],
      };
    });
  };

  return (
    <View style={styles.container}>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={height}>
        {data.map((list, index) => (
          <View key={index}>
            <ListItem containerStyle={styles.containerStyle}>
              <ListItem.Content style={styles.listContent}>
                <ListItem.Title style={styles.titleStyle}>
                  {list.title}
                </ListItem.Title>
              </ListItem.Content>
              <Switch
                trackColor={{
                  false: Colors.trackColorSwitchFalse,
                  true: Colors.trackColorSwitchTrue,
                }}
                thumbColor={
                  isEnabled[list.id]
                    ? Colors.thumbColorSwitchFalse
                    : Colors.thumbColorSwitchTrue
                }
                onValueChange={toggleSwitch.bind(this, list.id)}
                value={isEnabled[list.id]}
              />
            </ListItem>
          </View>
        ))}
      </BottomSheet>
      <ButtonUi
        title={titleButton}
        heightStyle={{ height: 80 }}
        iconStyle={{ paddingHorizontal: 10 }}
        widthStyle={{ width: width - 10 }}
        icon={true}
        nameIcon={"edit"}
        sizeIcon={24}
        iconColor={Colors.iconColor}
        onPress={() => bottomSheet.current.show()}
      />
    </View>
  );
};

export default BottomSheetUi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomSheetStyle: {
    backgroundColor: Colors.iconBackgroundColor,
  },
  containerStyle: {
    marginTop: 20,
    backgroundColor: Colors.secondary,
    width: "90%",
    alignSelf: "center",
    borderRadius: 16,
  },
  titleStyle: {},
});
