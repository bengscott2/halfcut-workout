import { useState } from "react";
import { WorkoutT, WorkoutsDB } from "../../workout";
import { TimerScreen } from "./components/TimerScreen";
import { ExerciseScreen } from "./components/ExerciseScreen";

export const ActiveExercise: React.FC<{ currentWorkout: WorkoutT[] }> = ({ currentWorkout }) => {
    const [istimerShowing, setIsTimerShowing] = useState(false);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [setIndex, setSetIndex] = useState(0);


    const currentExercise = currentWorkout[exerciseIndex];
    const currentSet = currentExercise.sets[setIndex];


    const nextExercise = () => {
        setIsTimerShowing((isShowing) => !isShowing);
        if (setIndex + 1 === currentWorkout[exerciseIndex].sets.length) {
            setSetIndex(0);
            setExerciseIndex((i) => i + 1);
        } else {
            setSetIndex((i) => i + 1);
        }
    };

    return <>{istimerShowing ? (
        <TimerScreen
            setIsTimerShowing={setIsTimerShowing}
            currentExercise={currentExercise}
        />
    ) : (
        <ExerciseScreen
            title={currentExercise.title}
            set={currentSet}
            setCount={`${setIndex + 1}/${currentExercise
                .sets.length}`}
            next={nextExercise}
        />
    )}
    </>
}