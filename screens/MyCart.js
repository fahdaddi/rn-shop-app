import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

// importing constants
import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";

// importing components
import CartItem from "../components/cart/Item";

const MyCart = (props) => {
  const CartItems = useSelector((state) => state.myCart.cart);
  const [loading, setLoading] = useState(true);

  const renderItem = (item) => {
    return <CartItem product={item} key={`cart_item_${item.id}`} />;
  };

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Text>Home screen</Text>
        {CartItems.map((item) => renderItem(item))}
      </ScrollView>
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
});

export default MyCart;
