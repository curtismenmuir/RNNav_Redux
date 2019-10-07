import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { goToAuth, goHome } from "../navigation/navigation";
import { connect } from "react-redux";
import { isUserLoggedIn } from "../actions";
import { store } from "../navigation/store";
import { autoSync } from "../services/auto-sync";

class Initializing extends React.Component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(isUserLoggedIn());
  }

  componentDidMount() {
    this.sync();
  }

  async sync() {
    await autoSync();
  }

  onStoreUpdate() {
    let { userLoggedIn } = store.getState().user;
    this._navigateApp(userLoggedIn);
  }

  _navigateApp(userLoggedIn) {
    switch (userLoggedIn) {
      case true:
        goHome();
        break;
      default:
        goToAuth();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect()(Initializing);
