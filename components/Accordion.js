import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
// import { Bar } from "react-native-bar-collapsible";
import Accordion from "@ercpereda/react-native-accordion";
import { Feather } from "@expo/vector-icons";

import AndroidAccordion from "./Android/Accordion";
import Colors from "../constants/Colors";
import CustomStyle from "../constants/GlobalStyle";

const CustomAccordion = (props) => {
  let header = ({ isOpen }) => (
    <View style={{ ...styles.header, ...props.headerStyle }}>
      <Text style={{ ...styles.headerTitle, ...props.titleStyle }}>
        {props.title}
      </Text>
      <Feather
        name={isOpen ? "chevron-down" : "chevron-right"}
        size={24}
        color={props.iconColor || Colors.grey}
      />
    </View>
  );

  return Platform.OS === "android" ? (
    <AndroidAccordion {...props}>{props.children}</AndroidAccordion>
  ) : (
    <Accordion
      activeOpacity={0.8}
      underlayColor={Colors.white}
      style={props.style}
      expanded={props.isOpen}
      header={header}
      content={props.children}
      onPress={props.onPress}
      easing="easeOutCubic"
    />
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  headerTitle: {
    fontFamily: "default-bold",
    fontSize: CustomStyle.fontSize.medium,
    color: Colors.grey,
    opacity: 0.5,
  },
});

export default CustomAccordion;
