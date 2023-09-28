import { StatusBar, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActiveExercise } from "./screens/ActiveExercise/ActiveExercies";
import React, { useState } from "react";
import { WorkoutT, WorkoutsDB } from "./workout";
import PressableCard from "./shared-ui/pressableCard/Pressablecard";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const [currentWorkout, setCurrentWorkout] = useState<WorkoutT[] | null>(null)

  return (
    <SafeAreaView className="flex-1 flex-col">
      <StatusBar barStyle="light-content" />
      <Pressable
        className="w-20 ml-4 mt-4"
        onPress={() => setCurrentWorkout(null)}
      >
        <Ionicons name="md-home" size={32} color="grey" className="flex" />
      </Pressable>
      {currentWorkout !== null ?
        <ActiveExercise currentWorkout={currentWorkout} /> :
        <>
          <Text className="text-text-primary text-4xl mb-3 p-4">It's Tuesday. What are we going to do today?</Text>
          <ScrollView className="flex-1">
            {WorkoutsDB.map((workout) => {
              return (
                <PressableCard
                  classNames="mb-6"
                  key={workout.title + Math.random().toString()}
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
