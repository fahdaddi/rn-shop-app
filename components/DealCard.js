import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";

import Tag from "./Tag";

const DealCard = (props) => {
  const { deal } = props;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.OnPressCard.bind(this, deal)}>
      <View style={{ ...styles.container, ...props.style }}>
        <View style={styles.ImageContainer}>
          <Image style={styles.image} source={{ uri: deal.image }} />
          <Tag style={styles.tag}>
            {(((deal.oldPrice - deal.price) / deal.oldPrice) * 100).toFixed(0)}{" "}
            %
          </Tag>
        </View>
        <View Style={styles.InfoContainer}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.PriceContainer}>
            <Text style={styles.PriceText}>${deal.price}</Text>
            <Text style={styles.OldPriceText}>${deal.oldPrice}</Text>
          </View>
          <Text style={styles.EndTime}>End in 06:03:29</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  ImageContainer: {
    marginRight: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  tag: {
    position: "absolute",
    left: 0,
    top: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    opacity: 0.6,
  },
  title: {
    fontFamily: "default-semi-bold",
    fontSize: CustomStyle.fontSize.medium,
    color: Colors.black,
  },
  PriceContainer: {
    flexDirection: "row",
  },
  PriceText: {
    fontFamily: "default-bold",
    fontSize: CustomStyle.fontSize.small,
    marginRight: 5,
    color: Colors.secondary,
  },
  OldPriceText: {
    textDecorationLine: "line-through",
    fontFamily: "default",
    fontSize: CustomStyle.fontSize.small,
    color: Colors.grey,
  },
  EndTime: {
    fontFamily: "default",
    fontSize: CustomStyle.fontSize.small,
    color: Colors.grey,
    opacity: 0.5,
  },
});

export default DealCard;
