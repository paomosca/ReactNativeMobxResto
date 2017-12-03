import React, { Component } from "react";
import { View, Button, Image, Text } from "react-native";

class OpenScreen extends Component {
  render() {
    return (
      <View>
        <Image source={require("../Images/logo.png")} />
        <Button title="Log in" />
        <Text>Tienes una cuenta?</Text>
        <Button title="Registro" />
      </View>
    );
  }
}

export default OpenScreen;
