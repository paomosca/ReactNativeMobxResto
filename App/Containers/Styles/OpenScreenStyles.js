import { StyleSheet } from "react-native";
import { Metrics, AppStyles, Colors, Fonts } from "../../Themes/";

export default StyleSheet.create({
  ...AppStyles.screen,
  ...AppStyles.common,
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: Colors.whiteFull
  },
  header: {
    width: Metrics.screenWidth,
    height: Metrics.screenWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    alignSelf: "center"
  },
  button: {
    margin: Metrics.baseSpace,
    backgroundColor: Colors.darkOrange,
    alignItems: "center"
  },
  reverseButton: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.darkOrange,
    borderWidth: Metrics.line
  },
  description: {
    ...Fonts.style.textStyle,
    textAlign: "center",
    paddingHorizontal: Metrics.baseSpace
  },
  buttonText: {
    ...Fonts.style.labelButton,
    color: Colors.whiteFull
  },
  reverseText: {
    ...Fonts.style.labelButton,
    color: Colors.darkOrange
  }
});
