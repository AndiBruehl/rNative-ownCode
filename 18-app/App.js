import { StatusBar } from "expo-status-bar";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
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
    async function configurePushNotifications() {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if (finalStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        Alert.alert(
          "Permission required!",
          "Push notifications need the appropriate permissions"
        );
        return;
      }

      // Use your actual projectId here
      const projectId = "781a21d6-51cc-4811-9247-206117701aea";

      try {
        const pushTokenData = await Notifications.getExpoPushTokenAsync({
          projectId,
        });
        console.log("Push Token Data:", pushTokenData);
      } catch (error) {
        console.error("Failed to get push token:", error);
      }

      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }
    }

    configurePushNotifications();
  }, []);

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
        const userName = notification.request.content.data.userName;
        console.log("username: ", userName);
      }
    );

    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log("response received");
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

  function sendPushNotificationHandler() {
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "ExponentPushToken[o3hHGzJQVF-FlBW_RRhaaS]", //DEMO!
        title: "hello",
        body: "world",
      }),
    });
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="test notification" onPress={testNotificationHandler} />
      <Button
        title="test push notification"
        onPress={sendPushNotificationHandler}
      />

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
