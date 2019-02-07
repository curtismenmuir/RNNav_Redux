import React, { Component } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { connect } from "react-redux";
import DrawerHeader from "../components/DrawerHeader";
import DrawerBody from "../components/DrawerBody";
import LogoutButton from "../components/LogoutButton";

export class Drawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerHeader />
        <DrawerBody />
        <LogoutButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height
  }
});

export default connect()(Drawer);
