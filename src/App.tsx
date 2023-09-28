import { StatusBar, Text, ScrollView, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActiveExercise } from "./screens/ActiveExercise/ActiveExercies";
import React, { useState } from "react";
import { WorkoutT, WorkoutsDB } from "./workout";
import PressableCard from "./shared-ui/Button/Button";
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from "./shared-ui/Button/Button";

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


export default function App() {
  const [currentWorkout, setCurrentWorkout] = useState<WorkoutT[] | null>(null)
  const todaysDay = new Date().getDay()

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
        <ActiveExercise exercises={currentWorkout} setCurrentWorkout={setCurrentWorkout} /> :
        <View className="flex-1 m-2">
          <Text className="text-text-primary text-4xl mb-3 p-4">It's {weekday[todaysDay]}. What are we going to do today?</Text>
          <ScrollView className="flex-1">
            {WorkoutsDB.map((workout) => {
              return (
                <PressableCard
                  classNames="mb-4"
                  key={workout.title + Math.random().toString()}
                  pressableKey={workout.title}
                  onPress={() => setCurrentWorkout(workout.workout)}
                  title={workout.title}
                />
              )
            })}
          </ScrollView>
          <Button variant="secondary" onPress={() => console.log("create a new workout")} title={"New Workout"} />
        </View>
      }
    </SafeAreaView>
  );
}
