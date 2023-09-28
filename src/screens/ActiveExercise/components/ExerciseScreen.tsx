import { Pressable, StyleSheet, Text, View } from "react-native";
import { ExcerciseType } from "../../../workout";
import Card from "../../../shared-ui/Card/Card";
import InfoCard from "../../../shared-ui/InfoCard/InfoCard";
import PressableCard from "../../../shared-ui/Button/Button";

export const ExerciseScreen: React.FC<{
  title: string;
  set: ExcerciseType;
  setCount: string;
  next: () => void;
}> = ({ title, set, setCount, next }) => {

  return (
    <View className="flex-1 m-2">
      <View className="flex-1">
        <View
          className="flex items-center justify-center"
        >
          <Text
            className="text-text-primary text-4xl"
            adjustsFontSizeToFit={true}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>

        <View className="flex-row">
          <Card title="Weight" content={set.weight} />
          <Card title="Reps" content={`${set.repLow}-${set.repHi}`} />
          <Card title="Set" content={setCount} />
        </View>
        <InfoCard content={set.tempo} title="Tempo" />
        <InfoCard content={set.notes} title="Notes" />
        <PressableCard variant="secondary" pressableKey={"next-set"} classNames="mt-2" onPress={next} title={"Next Set"} />
      </View>
    </View>
  );
};