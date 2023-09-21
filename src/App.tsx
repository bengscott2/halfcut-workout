import { View } from 'react-native';
import { ExerciseScreen } from './screens/ExerciseScreen';
import { Text } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const Exercises = [
    {
        weight: 10,
        repHi: 10,
        repLow: 15,
        notes: "Easy to go to heavy here. Use the tempo to make it burn rather than the weight itself. Connect with the chest.",
        tempo: '3 second eccentrics + 1 count in the contraction.',
        title: "Leg Press"
    },
    {
        weight: 20,
        repHi: 4,
        repLow: 8,
        notes: "Press hard. This should break you.",
        tempo: '3 second eccentrics + 1 count in the contraction.',
        title: "Bicep Curl"
    }

]


export default function App() {
    let exerciseIndex = 0
    const [exercise, setExercise] = useState(Exercises[exerciseIndex])


    const [istimerShowing, setIsTimerShowing] = useState(false)

    const nextExercise = () => {

        setIsTimerShowing((isShowing) => !isShowing)
        setExercise(Exercises[exerciseIndex + 1])
        exerciseIndex = exerciseIndex + 1
    }

    const children = ({ remainingTime }: { remainingTime: number }) => {
        const minutes = Math.floor(remainingTime / 60)
        const remainingSeconds = remainingTime % 60
        const seconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
        return `${minutes}:${seconds}`
    }
    return <SafeAreaView style={{ flex: 1 }}>
        {istimerShowing ?
            <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <CountdownCircleTimer
                    isPlaying
                    duration={5}
                    colors={'#FFA500'}
                    onComplete={nextExercise}
                >
                    {({ remainingTime }: { remainingTime: number }) => <Text style={{ color: "white", fontSize: 50 }}>{children({ remainingTime })}</Text>}
                </CountdownCircleTimer>
            </View>
            : <ExerciseScreen exercise={exercise} next={nextExercise} />}
    </SafeAreaView>
}
