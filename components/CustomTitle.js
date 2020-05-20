import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";

const CustomTitle = (props) => {
  let left;
  if (props.leftText) {
    left = (
      <TouchableWithoutFeedback onPress={props.onPressLeft}>
        <View
          style={{ flexDirection: "row", alignItems: "center", opacity: 0.5 }}
        >
          <Text style={{ ...styles.leftText, ...props.textStyle }}>
            {props.leftText}
          </Text>
          <Feather
          style={{marginTop: 5}}
            name={props.iconName || "chevron-right"}
            color={props.iconColor || Colors.grey}
            size={18}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text style={{ ...styles.text, ...props.textStyle }}>
        {props.children}
      </Text>
      {left}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    flex: 1,
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "default-bold",
    fontSize: CustomStyle.fontSize.medium,
    color: Colors.grey,
    opacity: 0.5,
  },
  leftText: {
    fontFamily: "default-light",
    fontSize: CustomStyle.fontSize.small,
    color: Colors.grey,
    opacity: 0.5,
  },
});

export default CustomTitle;
