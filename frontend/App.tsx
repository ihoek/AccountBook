import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Dashboard from './screens/Dashboard';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Dashboard />
    </>
  );
}
