import React from "react";
import { View, Text } from "react-native";

import Slides from "../components/Slides";

const SLIDE_DATA = [
  {
    text: "Welcome to JobApp",
    color: "#03a9f4"
  },
  {
    text: "Use this to get a job",
    color: "#009688"
  },
  {
    text: "Set your location and swipe away",
    color: "#03a9f4"
  }
];

function WelcomeScreen({ navigation }) {
  const onSlidesComplete = React.useCallback(() => {
    navigation.navigate("auth");
  }, []);

  return <Slides data={SLIDE_DATA} onComplete={onSlidesComplete} />;
}

export default WelcomeScreen;
