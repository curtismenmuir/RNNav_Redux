import BackgroundFetch from "react-native-background-fetch";

export async function autoSync() {
  BackgroundFetch.configure(
    {
      minimumFetchInterval: 20, // minutes (15 is minimum allowed)
      stopOnTerminate: false, // Keeps service running after app shutdown
      startOnBoot: true, // Fires events when device is rebooted
      enableHeadless: true // Enable headlessJS tasks
    },
    () => {
      console.log("[js] Received background-fetch event");
      // Required: Signal completion of your task to native code
      // If you fail to do this, the OS can terminate your app
      // or assign battery-blame for consuming too much background-time
      BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_NEW_DATA);
    }
  );

  BackgroundFetch.status(status => {
    switch (status) {
      case BackgroundFetch.STATUS_RESTRICTED:
        console.log("BackgroundFetch restricted");
        break;
      case BackgroundFetch.STATUS_DENIED:
        console.log("BackgroundFetch denied");
        break;
      case BackgroundFetch.STATUS_AVAILABLE:
        console.log("BackgroundFetch is enabled");
        break;
    }
  });
}
