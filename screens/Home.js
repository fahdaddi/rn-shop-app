import React, { useState } from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// importing constants
import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";

// importing components
import ProductCard from "../components/ProductCard";
import HeaderButton from '../components/HeaderButton';
// Importing static data
import { Products } from "../data/Products";

const Home = (props) => {
  const [loading, setLoading] = useState(true);

  const gotoProduct = (product) => {
    props.navigation.navigate({
      routeName: "Product",
      params: { productId: product.id },
    });
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scroleProducts}>
        <View style={styles.container}>
          {Products.map((item) => (
            <ProductCard
              style={styles.ProductItem}
              OnPressCard={gotoProduct}
              product={item}
              key={`product_${item.id}`}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

Home.navigationOptions = (navigationData) => {
  return {
    headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="cart" iconName="shopping-cart" iconSize={28} onPress={() => navigationData.navigation.navigate("MyCart")}/></HeaderButtons>,
    headerStyle: CustomStyle.header,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: CustomStyle.screen.paddingHorizontal,
    paddingVertical: CustomStyle.screen.paddingVertical,
    backgroundColor: Colors.background,
  },
  ProductItem: {
    marginVertical: 20,
    width: "80%",
    alignSelf: "center",
  },
});

export default Home;
