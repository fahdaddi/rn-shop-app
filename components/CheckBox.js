import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { CheckBox } from "native-base";

import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";
const FaCheckBox = (props) => {
  return (
    <View style={styles.container}>
      <CheckBox
        style={styles.CheckBox}
        checked={props.checked}
        onPress={props.onPress}
        color={props.color || (!props.checked ? Colors.grey : Colors.primary)}
      />
      <TouchableWithoutFeedback onPress={props.onPress}>
        <Text style={{...styles.label, ...props.style}}>{props.children || "teest"}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-start'
  },
  CheckBox: {
    position: "relative",
    marginLeft: -5,
    marginRight: 15,
    paddingHorizontal: 0
  },
  label: {
    fontFamily: "default",
    fontSize: CustomStyle.fontSize.small,
    color: Colors.grey,
    opacity: 0.5,
  },
});

export default FaCheckBox;
