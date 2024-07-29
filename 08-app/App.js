// import { createBottomTabNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

import { Ionicons } from "@expo/vector-icons";

// const BottomTab = createBottomTabNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerTintColor: "#ccc",
            // drawerStyle: { backgroundColor: "#ccc" },
          }}
        >
          <BottomTab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerStyle: { backgroundColor: "#3c0a6b" },

              tabBarLabel: "Welcome Screen",
              tabBarActiveBackgroundColor: "#f0e1ff",
              tabBarActiveTintColor: "#3c0a6b",
              // // drawerStyle: { backgroundColor: "#ccc" },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="USER"
            component={UserScreen}
            options={{
              headerStyle: { backgroundColor: "#0a0c6b" },
              // headerTintColor: "red",
              tabBarLabel: "User Screen",
              tabBarActiveBackgroundColor: "#aab3ff",
              tabBarActiveTintColor: "#0a0c6b",
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  // name="people"
                  name="person"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
