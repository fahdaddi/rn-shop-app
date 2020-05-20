import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const renderStars = (size, rating, color, blankColor, iconSize) => {
  let stars = [];
  for (let index = 1; index <= size; index++) {
    if (index <= rating) {
      stars.push(
        <FontAwesome
          name="star"
          size={iconSize || 24}
          color={color || Colors.primary}
          key={`star_${index}`}
          style={{ marginRight: 2 }}
        />
      );
    } else {
      stars.push(
        <FontAwesome
          name="star"
          size={iconSize || 24}
          color={blankColor || Colors.grey_light}
          key={`star_${index}`}
          style={{marginRight: index != size ? 2 : 0}}
        />
      );
    }
  }
  return stars;
};

const ShowRating = (props) => {
  const { rating, size, iconSize, color } = props;

  return (
    <View style={styles.container}>
      {renderStars(size, rating, color, iconSize)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
  },
});

export default ShowRating;
