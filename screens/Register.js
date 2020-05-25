import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Toast, Root } from "native-base";
import { useDispatch } from "react-redux";

// importing actions
import { signUp } from "../store/actions/user";

// importing constants
import CustomStyle from "../constants/GlobalStyle";
import Colors from "../constants/Colors";

// importing components
import FaButton from "../components/Button";
import FaInput from "../components/Input";

const SignUp = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSignUp = () => {
    setLoading(true);
    dispatch(signUp(email, password))
      .then((response) => {
        console.log("then");
        setLoading(false);
      })
      .catch((err) => {
        Toast.show({
          text: err.message,
          buttonText: "Okay",
          textStyle: {
            color: Colors.white,
            fontSize: CustomStyle.fontSize.xsmall,
            textAlign: "center",
          },
          duration: 3000,
        });
        setLoading(false);
      });
  };

  const handleEmailInput = (value) => {
    setEmail(value);
  };

  const handlePasswordInput = (value) => {
    setPassword(value);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Root>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={require("../assets/icon.png")}
            />
            <View style={styles.form}>
              <FaInput
                style={styles.input}
                label="Email"
                hasIconLeft
                icon="at-sign"
                onChangeText={handleEmailInput}
                value={email}
              />
              <FaInput
                secureTextEntry={true}
                style={styles.input}
                label="Password"
                hasIconLeft
                icon="lock"
                onChangeText={handlePasswordInput}
                value={password}
              />
              <FaButton
                style={styles.SignInButton}
                loading={loading}
                onPress={handleSignUp}
              >
                Sign In
              </FaButton>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Root>
    </KeyboardAvoidingView>
  );
};

SignUp.navigationOptions = (navigationData) => {
  return {
    headerTitle: navigationData.navigation.getParam("title") || "Sign Up",
    headerStyle: CustomStyle.header,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: CustomStyle.screen.paddingHorizontal,
    paddingVertical: CustomStyle.screen.paddingVertical,
    backgroundColor: Colors.background,
  },
  logo: {
    flex: 1,
    width: "60%",
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

export default SignUp;
