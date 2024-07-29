import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerTintColor: "#ccc",
            // drawerStyle: { backgroundColor: "#ccc" },
          }}
        >
          <Drawer.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerStyle: { backgroundColor: "#3c0a6b" },

              drawerLabel: "Welcome Screen",
              drawerActiveBackgroundColor: "#f0e1ff",
              drawerActiveTintColor: "#3c0a6b",
              // drawerStyle: { backgroundColor: "#ccc" },
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="USER"
            component={UserScreen}
            options={{
              headerStyle: { backgroundColor: "#0a0c6b" },
              // headerTintColor: "red",
              drawerLabel: "User Screen",
              drawerActiveBackgroundColor: "#aab3ff",
              drawerActiveTintColor: "#0a0c6b",
              drawerIcon: ({ color, size }) => (
                <Ionicons
                  // name="people"
                  name="person"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
