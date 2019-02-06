import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { store } from "./store";

export function registerScreens() {
  Navigation.registerComponentWithRedux(
    "Home",
    () => require("../screens/Home").default,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "Initializing",
    sc => require("../screens/Initializing").default,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "SignIn",
    () => require("../screens/SignIn").default,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "SignUp",
    () => require("../screens/SignUp").default,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "Screen2",
    () => require("../screens/Screen2").default,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "Screen3",
    () => require("../screens/Screen3").default,
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    "Drawer",
    () => require("../navigation/Drawer").default,
    Provider,
    store
  );
}
