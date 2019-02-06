import React, { Component } from "react";
import { Button } from "react-native";
import { store } from "../navigation/store";
import { logUserOut } from "../actions";

export class LogoutButton extends Component {
  _logout = async () => {
    store.dispatch(logUserOut());
  };
  render() {
    return (
      <Button
        onPress={() => {
          this._logout();
        }}
        title="Logout"
      />
    );
  }
}
