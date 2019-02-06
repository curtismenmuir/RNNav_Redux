import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { store } from "../navigation/store";
import { connect } from "react-redux";
import { logUserIn } from "../actions";

export class SignIn extends React.Component {
  state = {
    username: "",
    password: ""
  };
  _onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  someTask() {
    return new Promise(() => {}, reject);
  }

  _signIn = () => {
    const { username, password } = this.state;
    if (this._validateUsername(username) && this._validatePassword(password)) {
      store.dispatch(logUserIn(username, password));
    } else {
      alert("Please ensure you have entered a valid username and password");
    }
  };

  _validateUsername = username => {
    return username != null && username != "" && username != " ";
  };

  _validatePassword = password => {
    return password != null && password != "" && password != " ";
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="white"
          onChangeText={val => this._onChangeText("username", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor="white"
          onChangeText={val => this._onChangeText("password", val)}
        />
        <Button title="Sign In" onPress={this._signIn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: "500",
    height: 55,
    backgroundColor: "#42A5F5",
    margin: 10,
    color: "white",
    padding: 8,
    borderRadius: 14
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect()(SignIn);
