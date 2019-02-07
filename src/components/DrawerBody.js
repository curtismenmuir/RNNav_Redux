import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import DrawerElement from "./DrawerElement";

export default class DrawerBody extends Component {
  render() {
    return (
      <View>
        <DrawerElement id="1" displayText="Drawer Option 1" />
        <View style={styles.drawerSeparator} />
        <DrawerElement id="2" displayText="Drawer Option 2" />
        <View style={styles.drawerSeparator} />
        <DrawerElement id="3" displayText="Drawer Option 3" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  drawerSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE",
    marginTop: 10
  }
});
