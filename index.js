import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/navigation/screens";
import BackgroundFetch from "react-native-background-fetch";

const MyHeadlessTask = async () => {
  console.log("[BackgroundFetch HeadlessTask] start");
  try {
    var response = await fetch(
      "https://facebook.github.io/react-native/movies.json"
    );
    var responseJson = await response.json();
    console.log("[BackgroundFetch HeadlessTask] response: ", responseJson);
    console.log("[BackgroundFetch HeadlessTask] Finished;");
    BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_NEW_DATA);
  } catch {
    console.log("Catching Error");
    BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_FAILED);
  }
};

BackgroundFetch.registerHeadlessTask(MyHeadlessTask);

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "Initializing"
      }
    }
  });
});
