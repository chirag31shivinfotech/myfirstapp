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

export default class SignupScreen extends Component {
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
            <Text style={styles.titleTxt}>Get on Board !</Text>
            <View style={styles.commonTextInputView}>
              <TextInput placeholder="Name" />
              <Image
                style={styles.commonImage}
                source={require("../../Assets/user.png")}
              />
            </View>
            <View style={styles.commonTextInputView}>
              <TextInput placeholder="Email" />
              <Image
                style={styles.commonImage}
                source={require("../../Assets/user.png")}
              />
            </View>
            <View style={styles.commonTextInputView}>
              <TextInput placeholder="Address" />
              <Image
                style={styles.commonImage}
                source={require("../../Assets/user.png")}
              />
            </View>
            <View style={styles.commonTextInputView}>
              <TextInput placeholder="Zip Code" />
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
            <View style={styles.commonTextInputView}>
              <TextInput placeholder="Retype Password" />
              <Image
                style={styles.commonImage}
                source={require("../../Assets/user.png")}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("LoginScreen");
              }}
              style={styles.registerButtonView}
            >
              <Text style={styles.registerText}>Register</Text>
              <Image
                style={styles.registerArrowImg}
                source={require("../../Assets/right-arrows.png")}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}
