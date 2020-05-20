import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
// import Constants
import Colors from "../constants/Colors";
import CustomStyle from "../constants/GlobalStyle";

const Input = (props) => {
    let IconLeft;
    let IconRight;
    let AddOn;
    if (props.hasIconLeft && props.icon) {
        IconLeft = ( <
            Feather style = {
                {...styles.icon, ...styles.iconLeft, ...props.iconStyle } }
            name = { props.icon }
            size = { 24 }
            color = { Colors.white }
            />
        );
    } else if (props.hasIconRight && props.icon) {
        IconRight = ( <
            Feather style = {
                {...styles.icon, ...styles.iconRight, ...props.iconStyle } }
            name = { props.icon }
            size = { 24 }
            color = { Colors.white }
            />
        );
    } else if (props.hasAddOn) {
        AddOn = ( <
            Text style = {
                {...styles.input, ...props.addOnStyle } } > { props.addOn } <
            /Text>
        );
    }
    let label;
    if (props.label) {
        label = < Text style = {
            {...styles.label, ...props.labelStyle } } > { props.label } < /Text>
    }
    return ( <
        View > { label } <
        View style = {
            {...styles.container, ...props.style } } > { IconLeft } <
        TextInput onChangeText = { props.onChangeText }
        value = { props.value }
        style = {
            {...styles.input, ...props.inputStyle } }
        /> { IconRight } { AddOn } <
        /View> <
        /View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        shadowColor: Colors.grey,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.16,
        backgroundColor: Colors.white,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.grey_light
    },
    input: {
        height: 25,
        flex: 1,
        fontFamily: "default-semi-bold",
        fontSize: CustomStyle.fontSize.small,
        color: Colors.grey,
    },
    label: {
        color: Colors.grey,
        opacity: 0.20,
        fontFamily: 'default-black',
        marginLeft: 5,
        marginBottom: 5,
        fontSize: CustomStyle.fontSize.xsmalll
    },
    icon: {
        height: 25,
        width: 25,
        color: Colors.grey,
        opacity: 0.25
    },
    iconLeft: {
        marginRight: 10,
    },
    iconRight: {
        marginLeft: 10,
    },
});

export default Input;