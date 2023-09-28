import { Pressable, Text, View } from "react-native"
import { CountdownCircleTimer } from "react-native-countdown-circle-timer"
import { WorkoutT } from "../../../workout";
import PressableCard from "../../../shared-ui/pressableCard/Pressablecard";

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

        return (
            <View className="text-white flex-1 m-2">
                <Text className="text-white text-xl">Up Next:</Text>
                <Text
                    className="text-white text-6xl mt-2"
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}
                >
                    {currentExercise.title}
                </Text>
                <View className="flex flex-1 items-center justify-center">
                    <CountdownCircleTimer
                        isPlaying
                        duration={90}
                        colors={"#FFA500"}
                        onComplete={() => setIsTimerShowing(false)}
                    >
                        {({ remainingTime }: { remainingTime: number }) => (
                            <Text className="text-white text-5xl">
                                {children({ remainingTime })}
                            </Text>
                        )}
                    </CountdownCircleTimer>
                </View>
                <PressableCard pressableKey={"next-set"} onPress={() => setIsTimerShowing(false)} title={"Next Set"} />
            </View>)
    }