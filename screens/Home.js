import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import { getProducts, getDeals } from "../store/actions/products";

// importing constants
import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";

// importing components
import ProductCard from "../components/ProductCard";
import DealCard from "../components/DealCard";
import HeaderButton from "../components/HeaderButton";
import Title from "../components/CustomTitle";
// Importing static data
import { Categories } from "../data/Products";

const Home = (props) => {
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingDeals, setLoadingDeals] = useState(true);
  const Products = useSelector((state) => state.products.products);
  const Deals = useSelector((state) => state.products.deals);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts()).then((res) => {
      setLoadingProducts(false);
    });
  }, [dispatch]);

  
  useEffect(() => {
      setLoadingDeals(false);
    // No deals in the Firebase database
    // dispatch(getDeals()).then((err) => {
    //   setLoadingDeals(false);
    // });
  }, [dispatch]);

  const gotoProduct = (product) => {
    props.navigation.navigate({
      routeName: "Product",
      params: { productId: product.id },
    });
  };
  const gotoDeal = (deal) => {
    props.navigation.navigate({
      routeName: "Product",
      params: { productId: deal.id },
    });
  };

  if (loadingProducts || loadingDeals) {
    return (
      <View style={{ ...styles.screen, justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }
  const renderCategory = (gategory) => {
    return (
      <View style={styles.categoryCard} key={`category_${gategory.id}`}>
        <Image style={styles.categoryImage} source={{ uri: gategory.image }} />
        <Text style={styles.categoryTitle}>{gategory.name}</Text>
      </View>
    );
  };

  const renderDeal = (item) => {
    return (
      <DealCard
        style={styles.DealItem}
        OnPressCard={gotoDeal}
        deal={item}
        key={`deal_${item.id}`}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroleProducts}
      >
        <View style={styles.container}>
          <Title leftText="See More" onPressLeft={() => {}}>
            Shop By Department
          </Title>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {Categories.map((item) => renderCategory(item))}
          </ScrollView>
          <Title leftText="See More" onPressLeft={() => {}}>
            Deals Of The Day
          </Title>
          {Deals.map((item) => renderDeal(item))}
          <Title leftText="See More" onPressLeft={() => {}}>
            You Might Also Like
          </Title>
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
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="cart"
          iconName="menu"
          iconSize={28}
          onPress={() => navigationData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
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
  DealItem: {
    marginBottom: 10,
  },
  ProductItem: {
    marginBottom: 20,
    width: "100%",
    alignSelf: "center",
  },
  categoryCard: {
    width: 100,
    marginRight: 20,
  },
  categoryImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  categoryTitle: {
    fontSize: CustomStyle.fontSize.medium,
    fontFamily: "default",
    color: Colors.grey,
    marginTop: 10,
  },
});

export default Home;
