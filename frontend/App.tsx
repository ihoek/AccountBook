import * as React from "react";
import { StatusBar } from "expo-status-bar";
import Dashboard from "./src/screens/Dashboard/Dashboard";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Dashboard />
    </>
  );
}
