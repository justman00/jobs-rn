import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import MainNavigator from "./navigator/tabNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
