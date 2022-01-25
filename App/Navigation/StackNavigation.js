import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import LoginScreen from "../Screens/Login/LoginScreen";
import ForgotScreen from "../Screens/Forgot/ForgotScreen";
import SignupScreen from "../Screens/Signup/SignUpScreen";
import EmailVarification from "../Screens/EmailVerification/EmailVarification";
import UserLogin from "../Screens/User/UserLogin";

const Stack = createStackNavigator();
const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignupScreen"
      component={SignupScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EmailVarification"
      component={EmailVarification}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ForgotScreen"
      component={ForgotScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="UserLogin"
      component={UserLogin}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default StackNavigation;
