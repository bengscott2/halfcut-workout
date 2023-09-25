import { StatusBar, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActiveExercise } from "./screens/ActiveExercise/ActiveExercies";
import { useState } from "react";
import { WorkoutsDB } from "./workout";

export default function App() {
  const [currentWorkout, setCurrentWorkout] = useState(WorkoutsDB[0].workout)





  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ActiveExercise currentWorkout={currentWorkout} />
    </SafeAreaView>
  );
}
