import { StatusBar, View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActiveExercise } from "./screens/ActiveExercise/ActiveExercies";
import { useState } from "react";
import { WorkoutT, WorkoutsDB } from "./workout";

export default function App() {
  const [currentWorkout, setCurrentWorkout] = useState<WorkoutT[] | null>(null)



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      {currentWorkout !== null ?
        <ActiveExercise currentWorkout={currentWorkout} /> :
        <>
          <Text style={{ color: 'white', fontSize: 46, padding: 20 }}>Select a workout</Text>
          <ScrollView style={{ flex: 1, }}>
            {WorkoutsDB.map((workout) => {
              return <Pressable
                key={workout.title}
                style={{
                  flex: 0.3,
                  backgroundColor: 'white',
                  marginHorizontal: '20%',
                  borderRadius: 30,
                  padding: 30
                }}
                onPress={() => setCurrentWorkout(workout.workout)}
              >
                <Text style={{ fontSize: 30, textAlign: 'center' }}>{workout.title}</Text>
              </Pressable>
            })}
          </ScrollView>
        </>
      }
    </SafeAreaView>
  );
}
