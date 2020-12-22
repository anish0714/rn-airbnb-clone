import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import HomeScreen from "./src/screens/Home/HomeScreen";
import HouseListing from "./src/components/HouseListing/HouseListings";
export default function App() {
  return (
    <View>
      <StatusBar style="dark-content" />
      <SafeAreaView />
      {/* <HomeScreen /> */}
      <HouseListing />
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
