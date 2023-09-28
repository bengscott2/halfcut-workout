import { useState } from "react";
import { WorkoutT } from "../../workout";
import { TimerScreen } from "./components/TimerScreen";
import { ExerciseScreen } from "./components/ExerciseScreen";

export const ActiveExercise: React.FC<{
    exercises: WorkoutT[];
    setCurrentWorkout: React.Dispatch<React.SetStateAction<WorkoutT[] | null>>
}> = ({ exercises, setCurrentWorkout }) => {
    const [istimerShowing, setIsTimerShowing] = useState(false);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [setIndex, setSetIndex] = useState(0);


    const currentExercise = exercises[exerciseIndex];
    const currentSet = currentExercise.sets[setIndex];


    const nextExercise = () => {
        if (exerciseIndex + 1 === exercises.length) setCurrentWorkout(null)
        setIsTimerShowing((isShowing) => !isShowing);
        if (setIndex + 1 === exercises[exerciseIndex].sets.length) {
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