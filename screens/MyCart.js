import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

// importing constants
import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";

// importing components
import FaButton from "../components/Button";

const Home = (props) => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.screen}>
      <ScrollView>
        <Text>Home screen</Text>
        {/* <FaButton
          loading={loading}
          onPress={() => {
            setLoading(false);
          }}
        >Loading button</FaButton>
        <FaButton>simple button</FaButton>
        <FaButton hasIconLeft icon="facebook">
          <Text>button</Text>
        </FaButton>
        <FaButton hasIconRight icon="chevron-right">
          <Text>button</Text>
        </FaButton> */}
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

export default Home;
