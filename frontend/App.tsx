import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./src/screens/Dashboard/Dashboard";
import UserSetting from "./src/screens/UserSetting/UserSetting";
import Sale from "./src/screens/Sale/Sale";
import Routine from "./src/screens/Routine/Routine";

export type RootStackParamList = {
  Dashboard: undefined;
  UserSetting: undefined;
  Sale: undefined;
  Routine: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="UserSetting" component={UserSetting} />
        <Stack.Screen name="Sale" component={Sale} />
        <Stack.Screen name="Routine" component={Routine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
