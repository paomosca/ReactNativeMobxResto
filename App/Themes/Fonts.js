import Colors from "./Colors";

const family = {
  base: null, //"Montserrat",
  bold: null //"ProximaNova-Bold"
};

const size = {
  h1: 20,
  h2: 16,
  h3: 14,
  medium: 14,
  small: 13,
  tiny: 10
};

const style = {
  h1: {
    fontFamily: family.base,
    fontSize: size.h1,
    fontWeight: "600",
    lineHeight: 32.0,
    letterSpacing: 2.0,
    textAlign: "center",
    color: Colors.black
  },
  labelButton: {
    fontFamily: family.bold,
    fontSize: size.h2,
    fontWeight: "bold",
    lineHeight: 24.0,
    letterSpacing: 1.5,
    color: Colors.whiteFull
  },
  recipeNameCard: {
    fontFamily: family.base,
    fontSize: size.h2,
    fontWeight: "500",
    lineHeight: 24.0,
    letterSpacing: 0.5,
    color: Colors.black
  },
  h3: {
    fontFamily: family.bold,
    fontSize: size.h3,
    fontWeight: "bold",
    lineHeight: 24.0,
    letterSpacing: 1.75,
    textAlign: "center",
    color: Colors.black
  },
  placeholder: {
    fontFamily: family.base,
    fontSize: size.medium,
    lineHeight: 24.0,
    color: Colors.darkGrey
  },
  textStyle: {
    fontFamily: family.base,
    fontSize: size.medium,
    fontWeight: "300",
    lineHeight: 24.0,
    color: Colors.black
  },
  information: {
    fontFamily: family.base,
    fontSize: size.small,
    fontWeight: "300",
    lineHeight: 24.0,
    letterSpacing: 0.5,
    textAlign: "center",
    color: Colors.darkGrey
  },
  category: {
    fontFamily: family.base,
    fontSize: size.tiny,
    lineHeight: 24.0,
    letterSpacing: 1.0,
    textAlign: "center",
    color: Colors.darkGrey
  }
};

export default {
  family,
  size,
  style
};
