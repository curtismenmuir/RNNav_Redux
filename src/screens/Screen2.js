import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { goHome } from "../navigation/navigation";

export default class Screen2 extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Screen 2"
        }
      }
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 2</Text>
        <Button onPress={goHome} title="Go Back (root-change)" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
