import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../store/actions/cart'
import { StoreProduct} from '../store/actions/products';

// importing constants
import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";

// importing components
import FaButton from "../components/Button";
import FaInput from "../components/Input";
import HeaderButton from "../components/HeaderButton";
import ShowRating from "../components/RatingShow";
import Accordion from "../components/Accordion";

const Product = (props) => {
  const [loading, setLoading] = useState(true);
  
  const Products = useSelector(state => state.products.products);
  const Deals = useSelector(state => state.products.deals);
  const productId = props.navigation.getParam("productId");
  let product = Products.find((prod) => prod.id === productId);
  if( !product ){
    product = Deals.find((prod) => prod.id === productId);
  }

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product));
    console.log('added To Card');
    
  }

  // const addItemToFirebase = () => {
  //   dispatch(StoreProduct(product));
  //   console.log('added To Card');
  // }

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.child}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={styles.productTitle}>{product.title}</Text>
            <View style={{ flexDirection: 'row', flex: 0}}>
            <Text style={styles.productPrice}>${product.price}</Text>
            {
              !product.oldPrice? null : <Text style={{...styles.productPrice, textDecorationLine: 'line-through', marginLeft: 10, color: Colors.grey}}>${product.oldPrice}</Text>
            }
            </View>
          </View>
          <Text style={styles.brand}>Brand</Text>
          <ShowRating size={5} rating={4} />
          <View style={{ flexDirection: "row", alignItems: "center" }}></View>
          <Text style={styles.description}>{product.description}</Text>
          <Accordion style={{ marginTop: 20}} title="Product Specification">
            <Text>{product.description}</Text>
          </Accordion>
          <Accordion title="Custumer Questions">
            <FaInput hasIconLeft style={styles.searchInput} icon="search" />
          </Accordion>
          <Accordion title="Custumer Reviews">
          </Accordion>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Feather name="bookmark" size={34} color={Colors.black} />
        <View style={styles.footerButtonContainer}>
          {/* <FaButton onPress={addItemToFirebase} style={styles.footerButton}>Add to Cart</FaButton> */}
          <FaButton onPress={addItemToCart} style={styles.footerButton}>Add to Cart</FaButton>
        </View>
      </View>
    </View>
  );
};

Product.navigationOptions = (navigationData) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="cart"
          iconName="shopping-cart"
          iconSize={28}
          onPress={() => navigationData.navigation.navigate("MyCart")}
        />
      </HeaderButtons>
    ),
    headerStyle: CustomStyle.header,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingHorizontal: CustomStyle.screen.paddingHorizontal,
    // paddingVertical: CustomStyle.screen.paddingVertical,
    backgroundColor: Colors.background,
    // marginBottom: 50
  },
  image: {
    width: "100%",
    height: 300,
  },
  child: {
    flex: 1,
    paddingHorizontal: CustomStyle.screen.paddingHorizontal,
    paddingVertical: CustomStyle.screen.paddingVertical,
  },
  productTitle: {
    flex: 1,
    fontFamily: "default-bold",
    fontSize: CustomStyle.fontSize.large,
    marginRight: 20,
  },
  productPrice: {
    fontFamily: "default-bold",
    fontSize: CustomStyle.fontSize.large,
  },
  brand: {
    fontFamily: "default-semi-bold",
    fontSize: CustomStyle.fontSize.medium,
    color: Colors.grey,
    opacity: 0.5,
    marginTop: 10,
  },
  description: {
    fontFamily: "default",
    fontSize: CustomStyle.fontSize.small,
    marginTop: 10,
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
    width: "80%",
  },
  footerButton: {
    backgroundColor: Colors.black,
  },
  searchInput: {
    backgroundColor: Colors.grey_light,
    shadowColor: Colors.transparent,
    borderRadius: 5,
  }
});

export default Product;
