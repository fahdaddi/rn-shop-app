import React from "react";
import { View, StyleSheet } from "react-native";
import * as Device from 'expo-device';

import Colors from "../constants/Colors";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.16,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderColor: Colors.grey_light,
    borderWidth: Device.osName === 'Android' ? 1 : 0
  },
});

export default Card;
