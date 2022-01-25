import React from "react";
import { Component } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./style";

export default class UserTypeScreen extends Component {
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
          <View>
            <Text style={styles.titleTxt}>Please select one to proceed </Text>
          </View>
          {/* <View style={styles.commonLeftView}>
            <Image
              style={styles.commonImage}
              source={require("../../Assets/oval.png")}
            />
            <Image
              style={styles.subImage}
              source={require("../../Assets/user.png")}
            />
            <Image
              style={styles.checkImage}
              source={require("../../Assets/check.png")}
            />
            <Text style={styles.userText}>User</Text>
          </View>
          <Image
            style={styles.lineImage}
            source={require("../../Assets/line.png")}
          />
          <Image
            style={styles.leftImage}
            source={require("../../Assets/oval.png")}
          />
          <Image
            style={styles.bagImage}
            source={require("../../Assets/portfolio.png")}
          /> */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ height: 50, alignItems: "center" }}>
              <View style={{ height: 160, width: 190 }}>
                <Image
                  style={styles.commonImage}
                  source={require("../../Assets/oval.png")}
                />
                <Image
                  style={styles.subImage}
                  source={require("../../Assets/user.png")}
                />
                <Image
                  style={styles.checkImage}
                  source={require("../../Assets/check.png")}
                />
              </View>
              <Text style={styles.userText}>User</Text>
            </View>
            <View>
              <Image
                style={styles.lineImage}
                source={require("../../Assets/line.png")}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <View style={{ height: 160, width: 190 }}>
                <Image
                  style={styles.leftImage}
                  source={require("../../Assets/oval.png")}
                />
                <Image
                  style={styles.bagImage}
                  source={require("../../Assets/portfolio.png")}
                />
              </View>
              <Text style={styles.userText}>Business</Text>
            </View>
          </View>
          {/* <View>
            <ImageBackground
              source={require("../../Assets/user.png")}
              resizeMode="cover"
              style={styles.backImage}
            ></ImageBackground>
          </View> */}

          <View style={styles.registerButtonView}>
            <Text style={styles.registerText}>Next</Text>
          </View>
        </View>
      </View>
    );
  }
}
