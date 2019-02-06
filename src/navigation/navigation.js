import { Navigation } from "react-native-navigation";

export const goToAuth = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: "BottomTabsId",
        children: [
          {
            component: {
              name: "SignIn",
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: "Sign In",
                  icon: require("../img/signIn.png")
                }
              }
            }
          },
          {
            component: {
              name: "SignUp",
              options: {
                bottomTab: {
                  text: "Sign Up",
                  fontSize: 12,
                  icon: require("../img/signUp.png")
                }
              }
            }
          }
        ]
      }
    }
  });
export const goHome = () =>
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: "Drawer",
            id: "leftSideDrawer"
          }
        },
        center: {
          stack: {
            id: "App",
            children: [
              {
                component: {
                  name: "Home",
                  options: {
                    topBar: {
                      title: {
                        text: "Home"
                      },
                      leftButtons: [
                        {
                          id: "nav_drawer_icon",
                          icon: require("../img/drawer_icon_small.png"),
                          color: "black"
                        }
                      ]
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  });
export const goScreen2 = () =>
  Navigation.setRoot({
    root: {
      sideMenu: {
        center: {
          stack: {
            id: "App",
            children: [
              {
                component: {
                  name: "Screen2"
                }
              }
            ]
          }
        }
      }
    }
  });
