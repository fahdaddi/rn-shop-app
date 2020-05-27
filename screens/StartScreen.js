import React, { useEffect } from "react";
import {
  View,
  ActivityIndicator,
  AsyncStorage,
  ToastAndroid,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import { Toast, Root } from "native-base";

import { authenticate } from "../store/actions/user";

import Colors from "../constants/Colors";
import CustomStyle from "../constants/GlobalStyle";

const StartScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const login = async () => {
      let userData = await AsyncStorage.getItem("userData");

      if (!userData) {
        props.navigation.navigate("Home");
        return;
      }

      userData = JSON.parse(userData);
      let { token, user_id, expiration_date } = userData;
      let expirationDate = new Date(expiration_date);

      if (expirationDate <= new Date() || !token) {
        props.navigation.navigate("Home");
        return;
      }

      try {
        await dispatch(authenticate(token, user_id));

        if (Platform.OS === "android") {
          ToastAndroid.show("Loged in successfully", ToastAndroid.SHORT);
        } else {
          Toast.show({
            text: "Loged in successfully",
            textStyle: {
              color: Colors.white,
              fontSize: CustomStyle.fontSize.xsmall,
              fontFamily: "default",
              textAlign: "center",
            },
            duration: 3000,
          });
        }

        props.navigation.navigate("Home");
      } catch (error) {
        console.log("catch", error);

        props.navigation.navigate("Home");
      }
    };

    login();
  });

  return (
    <Root>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    </Root>
  );
};

export default StartScreen;
