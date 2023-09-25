import { Pressable, Text } from "react-native";


const PressableCard: React.FC<PressableCardProps> = ({ pressableKey, onPress, title }) => {
    return <Pressable
        key={pressableKey}
        className="bg-pressable p-8 rounded-lg mx-10"
        onPress={onPress}
    >
        <Text className="font-bold text-center text-2xl text-text-primary">{title}</Text>
    </Pressable>
}

export default PressableCard

type PressableCardProps = {
    pressableKey: string | number;
    onPress: () => any;
    title: string
}