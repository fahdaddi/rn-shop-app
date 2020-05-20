import React, { useState } from "react";
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
// importing constants
import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";

// importing components
import FaButton from "../components/Button";
import FaInput from "../components/Input";
import FaCheckBox from "../components/CheckBox";
const Home = (props) => {
    const [loading, setLoading] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);

    const handleCheckboxPress = () => {
        setRememberMe((currentState) => !currentState);
        Keyboard.dismiss();
    };

    return ( <
        TouchableWithoutFeedback onPress = {
            () => {
                Keyboard.dismiss();
            }
        } >
        <
        View style = { styles.screen } >
        <
        Image style = { styles.logo }
        resizeMode = "contain"
        source = { require("../assets/icon.png") }
        /> <
        View style = { styles.form } >
        <
        FaInput style = { styles.input }
        label = "Email"
        hasIconLeft icon = "at-sign" /
        >
        <
        FaInput style = { styles.input }
        label = "Password"
        hasIconLeft icon = "lock" /
        >
        <
        FaButton style = { styles.SignInButton } > Sign In < /FaButton> <
        /View> <
        /View> <
        /TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: CustomStyle.screen.paddingHorizontal,
        paddingVertical: CustomStyle.screen.paddingVertical,
        backgroundColor: Colors.background,
    },
    logo: {
        flex: 1,
        marginTop: 50,
        alignSelf: "center",
    },
    form: {
        marginBottom: 20,
    },
    footer: {
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 5,
    },
    input: {
        marginBottom: 20,
    },
    forgotText: {
        fontFamily: "default-semi-bold",
        fontSize: CustomStyle.fontSize.xsmalll,
        color: Colors.grey,
    },
    socialContainer: {
        marginTop: 20,
        borderTopColor: Colors.grey_light,
        borderTopWidth: 1,
        // flexDirection: "row",
    },
    SignInButton: {
        borderRadius: 50,
    },
});

export default Home;