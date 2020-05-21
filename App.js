import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from "./navigation/ScreensNavigator";

enableScreens();

// Fetching custom Fonts
const fetchFonts = () => {
  return Font.loadAsync({
    "default-black": require("./assets/fonts/NunitoSans-Black.ttf"),
    "default-extra-bold": require("./assets/fonts/NunitoSans-ExtraBold.ttf"),
    "default-bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
    "default-semi-bold": require("./assets/fonts/NunitoSans-SemiBold.ttf"),
    default: require("./assets/fonts/NunitoSans-Regular.ttf"),
    "default-light": require("./assets/fonts/NunitoSans-Light.ttf"),
  });
};

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setLoading(false);
        }}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
