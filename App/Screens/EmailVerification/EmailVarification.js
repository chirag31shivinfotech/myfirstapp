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

export default class EmailVarification extends Component {
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
            <Text style={styles.titleTxt}>Email Verification </Text>
            <Text style={styles.enterCodetxt}>Please enter the code sent </Text>
            <Text style={styles.emailCodetxt}>
              on your email address below.{" "}
            </Text>
            <View style={styles.mainEnterCodeView}>
              <View style={styles.firstRoundcircleView}>
                <TextInput
                  style={styles.codeTextInput}
                  keyboardType="numeric"
                  maxLength={1}
                />
              </View>
              <View style={styles.roundcircleView}></View>
              <View style={styles.roundcircleView}></View>
              <View style={styles.roundcircleView}></View>
              <View style={styles.roundcircleView}></View>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("UserLogin");
              }}
              style={styles.registerButtonView}
            >
              <Text style={styles.registerText}>Verify</Text>
            </TouchableOpacity>
            {/* </View> */}
            <Text style={styles.forgotTxt}>didn't recived mail yet?</Text>
            <Text style={styles.regiterHereTxt}> Registend mail</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
