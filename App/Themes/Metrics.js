import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

// Used via Metrics.baseMargin
const metrics = {
  smallSpace: 8,
  mediumSpace: 12,
  baseSpace: 16,
  buttonHeight: 48,
  line: 2,
  statusBarHeight: Platform.OS === "ios" ? 20 : 0,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === "ios" ? 64 : 54,
  buttonRadius: 24
};

export default metrics;
