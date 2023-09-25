import { Pressable, Text, View } from "react-native"
import { CountdownCircleTimer } from "react-native-countdown-circle-timer"
import { WorkoutT } from "../../../workout";

export const TimerScreen: React.FC<{
    setIsTimerShowing: React.Dispatch<React.SetStateAction<boolean>>;
    currentExercise: WorkoutT;
}> = ({
    setIsTimerShowing,
    currentExercise
}) => {
        const children = ({ remainingTime }: { remainingTime: number }) => {
            const minutes = Math.floor(remainingTime / 60);
            const remainingSeconds = remainingTime % 60;
            const seconds =
                remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
            return `${minutes}:${seconds}`;
        };

        return <>
            <Text style={{ color: "white", fontSize: 32 }}>Up Next:</Text>
            <Text
                style={{ color: "white", fontSize: 100 }}
                adjustsFontSizeToFit={true}
                numberOfLines={1}
            >
                {currentExercise.title}
            </Text>
            <View
                style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CountdownCircleTimer
                    isPlaying
                    duration={90}
                    colors={"#FFA500"}
                    onComplete={() => setIsTimerShowing(false)}
                >
                    {({ remainingTime }: { remainingTime: number }) => (
                        <Text style={{ color: "white", fontSize: 50 }}>
                            {children({ remainingTime })}
                        </Text>
                    )}
                </CountdownCircleTimer>
            </View>
            <Pressable
                style={{
                    backgroundColor: "orange",
                    flex: 0.1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: "10%",
                    borderRadius: 10,
                }}
                onPress={() => setIsTimerShowing(false)}
            >
                <Text style={{ fontSize: 28, fontWeight: "600" }}>Next Set</Text>
            </Pressable>
        </>
    }