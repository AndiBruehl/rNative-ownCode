import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ManageExpense from "./screens/ManageExpense";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="RECENT"
        component={RecentExpenses}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="ALL"
        component={AllExpenses}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="wallet" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
