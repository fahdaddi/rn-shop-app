import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

// importing constants
import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";

// importing components
import FaButton from "../components/Button";
// import AppHeader from "../components/header/AppHeader";

// Importing static data
import { Products } from "../data/Products";
const Product = (props) => {
  const productId = props.navigation.getParam("productId");
  const product = Products.find((prod) => prod.id === productId);
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.screen}>
      <ScrollView>
        <Text>Product screen</Text>
        <Text>{product.title}</Text>
      </ScrollView>
    </View>
  );
};

// Product.navigationOptions = (navigationData) => {
//   return {
//     headerTitle: () => <AppHeader onPress={()=> navigationData.navigation.navigate('MyCart')}/>,
//     headerStyle: CustomStyle.header,
//     headerTintColor: Colors.secondary
//   };
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: CustomStyle.screen.paddingHorizontal,
    paddingVertical: CustomStyle.screen.paddingVertical,
    backgroundColor: Colors.background,
  },
});

export default Product;
