import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";

// import Constants
import Colors from "../constants/Colors";

const Button = (props) => {
  let Loader = (
    <ActivityIndicator size="small" color={props.loaderColor || Colors.white} />
  );
  let IconLeft;
  if (props.hasIconLeft) {
    IconLeft = (
      <Feather
        style={{ ...styles.icon, ...styles.iconLeft, ...props.iconStyle }}
        name={props.icon}
        size={props.iconSize || 24}
        color={props.iconColor||Colors.white}
      />
    );
  }
  let IconRight;
  if (props.hasIconRight) {
    IconRight = (
      <Feather
        style={{ ...styles.icon, ...styles.iconRight, ...props.iconStyle }}
        name={props.icon}
        size={props.iconSize || 24}
        color={props.iconColor||Colors.white}
      />
    );
  }
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        {IconLeft}
        <Text style={{ ...styles.text, ...props.textStyle }}>
          {props.loading ? Loader : props.children}
        </Text>
        {IconRight}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    alignSelf: "stretch",
    backgroundColor: Colors.primary,
  },
  text: {
    color: Colors.white,
    fontSize: 20,
    // marginTop: 2,
  },
  icon: {
    // height: 25,
    // width: 25,
  },
  iconLeft: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
});

export default Button;
