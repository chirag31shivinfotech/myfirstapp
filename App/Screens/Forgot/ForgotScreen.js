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

export default class ForgotScreen extends Component {
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
            <Text style={styles.titleTxt}>Forgot Password</Text>
            <Text style={styles.subtitle}>Please enter your Email address</Text>
            <View style={styles.commonTextInputView}>
              <TextInput placeholder="Email ID" />
              <Image
                style={styles.commonImage}
                source={require("../../Assets/user.png")}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("EmailVarification");
              }}
            >
              <View style={styles.registerButtonView}>
                <Text style={styles.registerText}>Reset Password</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}
