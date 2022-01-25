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
  commonTextInputView: {
    paddingLeft: 30,
    paddingRight: 30,
    height: 40,
    width: "90%",
    backgroundColor: "#C5C5C5",
    borderRadius: 18,
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  commonImage: {
    height: 20,
    width: 20,
    position: "absolute",
    right: 20,
    tintColor: "gray",
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
    marginBottom: 30,
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
});

export default styles;
