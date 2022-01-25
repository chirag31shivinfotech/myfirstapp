import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00B5E2",
  },
  firstView: {
    height: "48%",
    width: "100%",
  },
  logoImage: {
    height: "100%",
    width: "100%",
  },
  secondView: {
    backgroundColor: "white",
    height: "52%",
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: "hidden",
    alignItems: "center",
  },
  scrollViewStyle: {
    height: "52%",
    width: "90%",
    marginLeft: 35,
  },
  titleTxt: {
    color: "#00B5E2",
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
  },
  enterCodetxt: {
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
  },
  emailCodetxt: {
    fontSize: 15,
    textAlign: "center",
  },
  mainEnterCodeView: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  firstRoundcircleView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#00B5E2",
    marginLeft: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  codeTextInput: {
    color: "white",
  },
  roundcircleView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#00B5E2",
    marginLeft: 10,
  },
  registerButtonView: {
    paddingLeft: 30,
    paddingRight: 30,
    height: 40,
    width: "90%",
    backgroundColor: "#00B5E2",
    borderRadius: 18,
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  registerText: {
    fontSize: 20,
    color: "white",
  },
  registerArrowImg: {
    tintColor: "white",
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  forgotTxt: {
    textAlign: "center",
    fontSize: 13,
  },
  notRegisterTxt: {
    textAlign: "center",
    fontSize: 13,
  },
  regiterHereTxt: {
    fontSize: 13,
    color: "#00B5E2",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default styles;
