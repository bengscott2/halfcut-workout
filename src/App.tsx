import { Button, Pressable, StatusBar, View } from 'react-native';
import { ExerciseScreen } from './screens/ExerciseScreen';
import { Text } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { PushWorkout } from './workout';


export default function App() {
    const [istimerShowing, setIsTimerShowing] = useState(false)
    const [exerciseIndex, setExerciseIndex] = useState(0)
    const [setIndex, setSetIndex] = useState(0)

    const nextExercise = () => {
        setIsTimerShowing((isShowing) => !isShowing)
        if (setIndex + 1 === PushWorkout[exerciseIndex].sets.length) {
            setSetIndex(0)
            setExerciseIndex((i) => i + 1)
        } else {
            setSetIndex((i) => i + 1)
        }
    }

    const currentWorkout = PushWorkout[exerciseIndex]
    const currentSet = currentWorkout.sets[setIndex]

    const children = ({ remainingTime }: { remainingTime: number }) => {
        const minutes = Math.floor(remainingTime / 60)
        const remainingSeconds = remainingTime % 60
        const seconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
        return `${minutes}:${seconds}`
    }

    return <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
            barStyle="light-content"
        />
        {istimerShowing ?
            <>
                <Text style={{ color: "white", fontSize: 32 }}  >Up Next:</Text>
                <Text style={{ color: "white", fontSize: 100 }} adjustsFontSizeToFit={true} numberOfLines={1}>{currentWorkout.title}</Text>
                <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <CountdownCircleTimer
                        isPlaying
                        duration={90}
                        colors={'#FFA500'}
                        onComplete={() => setIsTimerShowing(false)}
                    >
                        {({ remainingTime }: { remainingTime: number }) => <Text style={{ color: "white", fontSize: 50 }}>{children({ remainingTime })}</Text>}
                    </CountdownCircleTimer>
                </View>
                <Pressable
                    style={{ backgroundColor: "orange", flex: 0.1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginHorizontal: '10%', borderRadius: 10 }}
                    onPress={() => setIsTimerShowing(false)}
                >
                    <Text style={{ fontSize: 28, fontWeight: '600' }}>Next Set</Text>
                </Pressable>
            </>
            : <ExerciseScreen title={currentWorkout.title} set={currentSet} setCount={`${setIndex + 1}/${currentWorkout.sets.length}`} next={nextExercise} />}
    </SafeAreaView>
}
