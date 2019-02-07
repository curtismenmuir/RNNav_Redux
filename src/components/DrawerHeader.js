import React, { Component } from "react";
import {
  Text,
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet
} from "react-native";
import { store } from "../navigation/store";

export default class DrawerHeader extends Component {
  render() {
    let { username } = store.getState().user;
    return (
      <ImageBackground
        source={require("../img/drawer_header.jpeg")}
        style={{ width: "100%", height: 200 }}
      >
        <Image source={require("../img/me.jpeg")} style={styles.profileImage} />
        <Text style={{ marginLeft: 10, fontSize: 25, color: "white" }}>
          {username}
        </Text>
        <Text style={{ marginLeft: 10, fontSize: 15, color: "white" }}>
          curtismenmuir@gmail.com
        </Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: 30,
    marginLeft: 10
  },
  drawerSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE",
    marginTop: 10
  }
});
