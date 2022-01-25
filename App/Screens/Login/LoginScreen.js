import React from "react";
import { Component } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./style";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstView}>
          <Image
            style={styles.logoImage}
            source={require("../../Assets/barber_logo.png")}
          />
        </View>
        <View style={styles.secondView}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollViewStyle}
          >
            <Text style={styles.titleTxt}>Welcome Back !</Text>
            <View style={styles.commonTextInputView}>
              <TextInput placeholder="Email ID" />
              <Image
                style={styles.commonImage}
                source={require("../../Assets/user.png")}
              />
            </View>
            <View style={styles.commonTextInputView}>
              <TextInput placeholder="Password" />
              <Image
                style={styles.commonImage}
                source={require("../../Assets/user.png")}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ForgotScreen");
              }}
            >
              <View style={styles.registerButtonView}>
                <Text style={styles.registerText}>Signin</Text>
                <Image
                  style={styles.registerArrowImg}
                  source={require("../../Assets/right-arrows.png")}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.forgotTxt}>Forgot Your Password?</Text>
            <Text style={styles.notRegisterTxt}>
              Not registered yet?
              <Text style={styles.regiterHereTxt}> Register here</Text>
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
