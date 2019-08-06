import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import { configureStore } from "./store";

import MainNavigator from "./navigator/tabNavigator";

export default function App() {
  return (
    <Provider store={configureStore()}>
      <View style={styles.container}>
        <MainNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
