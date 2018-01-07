import React, { Component } from "react";

import { View, TouchableOpacity, Text, Image } from "react-native";

import { Images } from "../Themes";

import styles from "./Styles/OpenScreenStyles";

class OpenScreen extends Component {
  render() {
    return (
      <View style={[styles.mainScreen, styles.container]}>
        <View style={styles.header}>
          <Image style={styles.logo} source={Images.logo} />
        </View>
        <TouchableOpacity style={[styles.standardButton, styles.button]}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
        <Text style={styles.description}>Don’t have an account?</Text>
        <TouchableOpacity
          style={[styles.standardButton, styles.button, styles.reverseButton]}
        >
          <Text style={styles.reverseText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default OpenScreen;
