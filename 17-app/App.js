import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Failed to get push token for push notification!");
      }
    })();
  }, []);

  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("notification received");
        // console.log(notification);
        const userName = notification.request.content.data.userName;
        console.log("username: ", userName);
      }
    );

    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log("response received");
        // console.log(response);
        const userName = response.notification.request.content.data.userName;
        console.log("username: ", userName);
      }
    );

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  function testNotificationHandler() {
    // console.log("Button pressed");
    Notifications.scheduleNotificationAsync({
      content: {
        title: "my first local notification",
        body: "this is the body of the notification",
        data: { userName: "Bob" },
      },
      trigger: {
        seconds: 5,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="test notification" onPress={testNotificationHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
