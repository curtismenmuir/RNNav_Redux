import React, { Component } from "react";
import { Text, TouchableHighlight } from "react-native";

export class DrawerElement extends Component {
  constructor(props) {
    super(props);
  }
  _onDrawerPress(id) {
    alert("ID: " + id);
  }
  render() {
    return (
      <TouchableHighlight onPress={() => this._onDrawerPress(this.props.id)}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: "left" }}>
          {this.props.displayText}
        </Text>
      </TouchableHighlight>
    );
  }
}
