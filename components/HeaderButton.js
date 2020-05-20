import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Feather } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Feather}
      color={Colors.secondary}
    />
  );
};

export default CustomHeaderButton;
