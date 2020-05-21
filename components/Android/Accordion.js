import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import CustomStyle from "../../constants/GlobalStyle";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(props.isOpen);

  let header = (
    <TouchableOpacity
      onPress={() => {
        changeState();
      }}
    >
      <View style={{ ...styles.header, ...props.headerStyle }}>
        <Text style={{ ...styles.headerTitle, ...props.titleStyle }}>
          {props.title}
        </Text>
        <Feather
          name={isActive ? "chevron-down" : "chevron-right"}
          size={24}
          color={props.iconColor || Colors.grey}
        />
      </View>
    </TouchableOpacity>
  );
  const changeState = () => {
    setIsActive((currentValue) => !currentValue);
    header = (
      <TouchableOpacity onPress={changeState}>
        <View style={{ ...styles.header, ...props.headerStyle }}>
          <Text style={{ ...styles.headerTitle, ...props.titleStyle }}>
            {props.title}
          </Text>
          <Feather
            name={isActive ? "chevron-down" : "chevron-right"}
            size={24}
            color={props.iconColor || Colors.grey}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {header}
      {isActive ? props.children : null}
    </View>
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

export default Accordion;
