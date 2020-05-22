import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { incrementQuantity, decrementQuantity } from "../../store/actions/cart";

import Colors from "../../constants/Colors";
import CustomStyle from "../../constants/GlobalStyle";

const CartItem = (props) => {
  const { product } = props;

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementQuantity(product.id));
  };

  const decrement = () => {
      if(product.quantity == 1){
        
      }else{
          dispatch(decrementQuantity(product.id));
      }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.leftContainer}>
        <Text>{product.title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.price}>${product.price}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity activeOpacity={0.8} onPress={decrement}>
              <View style={styles.rectagle}>
                <Feather name="minus" />
              </View>
            </TouchableOpacity>
            <Text style={styles.quantity}>{product.quantity}</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={increment}>
              <View style={styles.rectagle}>
                <Feather name="plus" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <View Style={styles.Info}>
          <View >
            <Text style={styles.title}>{product.title}</Text>
          </View>
        <View style={styles.PriceContainer}>
          <Text style={styles.PriceText}>${product.price}</Text>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantity}>{product.quantity}</Text>
          </View>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey_light,
    paddingVertical: 10,
    marginBottom: 10,
    width: "100%",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  leftContainer: {
    flex: 1,
    justifyContent: "space-around",
    height: "100%",
    maxHeight: 100,
  },
  price: {
    fontFamily: "default-black",
    fontSize: CustomStyle.fontSize.small,
    color: Colors.primary,
  },
  quantity: {
    fontFamily: "default",
    fontSize: CustomStyle.fontSize.large,
    color: Colors.grey,
  },
  rectagle: {
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    borderColor: Colors.grey,
    borderWidth: 1,
    marginHorizontal: 10,
  },
});

export default CartItem;
