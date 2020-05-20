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
        View style = { styles.footer } >
        <
        FaCheckBox checked = { rememberMe }
        onPress = { handleCheckboxPress } >
        Stay Logged In <
        /FaCheckBox> <
        Text style = { styles.forgotText } > Forgot Password ? < /Text> <
        /View> <
        FaButton style = { styles.SignInButton } > Sign In < /FaButton> <
        View style = { styles.socialContainer } >
        <
        FaButton hasIconLeft icon = "facebook"
        // iconColor={Colors.facebook}
        textStyle = { styles.FbText }
        style = { styles.FbButton } >
        Facebook <
        /FaButton> <
        FaButton hasIconLeft icon = "twitter"
        // iconColor={Colors.twitter}
        textStyle = { styles.TwText }
        style = { styles.TwButton } >
        Twitter <
        /FaButton> <
        /View> <
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
        marginRight: 5
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
    FbButton: {
        borderRadius: 50,
        marginTop: 20,
        // borderWidth: 1,
        // borderColor: Colors.facebook,
        backgroundColor: Colors.facebook,
        // backgroundColor: Colors.white,
    },
    FbText: {
        // color: Colors.facebook,
    },
    TwButton: {
        borderRadius: 50,
        marginTop: 20,
        // borderColor: Colors.twitter,
        // borderWidth: 1,
        // backgroundColor: Colors.white,
        backgroundColor: Colors.twitter,
    },
    TwText: {
        // color: Colors.twitter,
    },
});

export default Home;