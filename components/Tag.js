import React from "react";
import { StyleSheet, View, Text } from "react-native";

import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";

const Tag = (props) => {
  return (
    <View style={{ ...styles.tag, ...props.style }}>
      <Text style={{ ...styles.text, ...props.textStyle }}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: CustomStyle.fontSize.xsmall,
    fontFamily: "default",
    color: Colors.white,
  },
});

export default Tag;
