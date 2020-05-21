import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomStyle from '../constants/GlobalStyle';
import Colors from '../constants/Colors'

// import screens
import Home from "../screens/Home";
import Register from "../screens/Register";
import Login from "../screens/Login";
import MyCart from "../screens/MyCart";
import Product from "../screens/Product";

const AppNavigator = createStackNavigator({
    Home: Home,
    // Register: Register,
    // Login: Login,
    MyCart: {
        screen: MyCart,
        mode: 'modal'
    },
    Product: Product,
}, {
    mode: "card",
    defaultNavigationOptions: {
        headerTitle: '',
        headerStyle: CustomStyle.header,
        headerTintColor: Colors.secondary
    }
});

const drawerNavigator = createDrawerNavigator({
    Home: AppNavigator,
    MyCart: {
        screen: MyCart,
        mode: 'modal'
    },
    Register: Register,
    Login: Login,
})

export default createAppContainer(drawerNavigator);