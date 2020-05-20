import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Card from "./Card";

import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";

import FaButton from "../components/Button";

const ProductCard = (props) => {
  const { product } = props;

  const handleCard = () => {
    console.log("card");
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={props.style}
      onPress={props.OnPressCard.bind(this, product)}
    >
      <Card>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={{ uri: product.image }}
              resizeMode="cover"
            />
            <Feather
              name="bookmark"
              style={styles.bookmark}
              onPress={() => console.log("bookmark")}
              size={24}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{product.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.priceTag}>
              <Feather name="dollar-sign" color={Colors.white} />
              <Text style={styles.price}>{product.price}</Text>
              <View style={styles.priceTagCircle}></View>
            </View>
            <FaButton
              style={styles.buttonStyle}
              hasIconRight
              icon="shopping-bag"
              iconSize={15}
              textStyle={styles.buttonTextStyle}
              onPress={() => {
                console.log("add to card: ", product.title);
              }}
            >
              Add to cart
            </FaButton>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookmark: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  container: {
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  detailsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // width: '100%',
    // maxWidth: '100%'
  },
  footer: {
    paddingBottom: 10,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: Colors.black,
    // borderColor: Colors.primary,
    // borderWidth: 1
  },
  buttonTextStyle: {
    fontSize: CustomStyle.fontSize.xsmall,
    // color: Colors.primary
  },
  title: {
    fontSize: CustomStyle.fontSize.small,
    fontFamily: "default-bold",
    color: Colors.black,
    flex: 1,
  },
  priceTag: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  priceTagCircle: {
    height: 5,
    width: 5,
    marginLeft: 4,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  price: {
    fontSize: CustomStyle.fontSize.xsmall,
    fontFamily: "default",
    color: Colors.white,
  },
  likeIcon: {
    height: 30,
    width: 30,
    borderRadius: 24,
    backgroundColor: Colors.grey,
    position: "absolute",
    right: 10,
    top: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductCard;
