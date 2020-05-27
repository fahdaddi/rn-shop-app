import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  ToastAndroid,
} from "react-native";
import { Root, Toast } from "native-base";
import { useSelector } from "react-redux";

// importing constants
import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";

// importing components
import CartItem from "../components/cart/Item";
import FaButton from "../components/Button";

const MyCart = (props) => {
  const CartItems = useSelector((state) => state.myCart.cart);

  const renderItem = (item) => {
    return <CartItem product={item} key={`cart_item_${item.id}`} />;
  };
  if (CartItems.length == 0) {
    return (
      <View style={{ ...styles.screen, ...styles.emptyScreen }}>
        <Text style={styles.emptyText}>Your cart is empty</Text>
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <Root>
        <ScrollView>{CartItems.map((item) => renderItem(item))}</ScrollView>
        <View style={styles.footer}>
          <View style={styles.footerButtonContainer}>
            <FaButton
              onPress={() => {
                if (Platform.OS === "android") {
                  ToastAndroid.show(
                    "this App is only for demo purpose!",
                    ToastAndroid.SHORT
                  );
                } else {
                  Toast.show({
                    text: "this App is only for demo purpose!",
                    buttonText: "Okay",
                    textStyle: {
                      color: Colors.white,
                      fontSize: CustomStyle.fontSize.xsmall,
                      fontFamily: "default",
                      textAlign: "center",
                    },
                    duration: 3000,
                  });
                }
              }}
              style={styles.footerButton}
            >
              Order
            </FaButton>
          </View>
        </View>
      </Root>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: CustomStyle.screen.paddingHorizontal,
    paddingVertical: CustomStyle.screen.paddingVertical,
    backgroundColor: Colors.background,
  },
  emptyScreen: {
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: Colors.primary,
    fontFamily: "default-black",
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.grey_light,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerButtonContainer: {
    width: "100%",
  },
  footerButton: {
    backgroundColor: Colors.black,
  },
});

export default MyCart;
