import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { goScreen2 } from "../navigation/navigation";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }
  navigationButtonPressed({ buttonId }) {
    switch (buttonId) {
      case "nav_drawer_icon": {
        Navigation.mergeOptions("leftSideDrawer", {
          sideMenu: {
            left: {
              visible: true
            }
          }
        });
        break;
      }
      default:
        break;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Home screen.</Text>
        <Button
          onPress={() => {
            goScreen2();
          }}
          title="View next screen (root-change)"
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: "Screen3"
              }
            });
          }}
          title="View next screen (push-tab)"
        />
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

export default connect()(Home);
