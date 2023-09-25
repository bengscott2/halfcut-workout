import { StatusBar, View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActiveExercise } from "./screens/ActiveExercise/ActiveExercies";
import React, { useState } from "react";
import { WorkoutT, WorkoutsDB } from "./workout";
import PressableCard from "./shared-ui/pressableCard/Pressablecard";

export default function App() {
  const [currentWorkout, setCurrentWorkout] = useState<WorkoutT[] | null>(null)



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      {currentWorkout !== null ?
        <ActiveExercise currentWorkout={currentWorkout} /> :
        <>
          <Text style={{ fontSize: 46, padding: 20 }} className="text-white">Select a workout</Text>
          <ScrollView style={{ flex: 1, }}>
            {WorkoutsDB.map((workout) => {
              return (
                <PressableCard
                  pressableKey={workout.title}
                  onPress={() => setCurrentWorkout(workout.workout)}
                  title={workout.title}
                />
              )
            })}
          </ScrollView>
        </>
      }
    </SafeAreaView>
  );
}
