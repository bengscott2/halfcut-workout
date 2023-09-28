import { Pressable, Text } from "react-native";


const PressableCard: React.FC<PressableCardProps> = ({ pressableKey, onPress, title, variant = 'primary', classNames }) => {
    return <Pressable
        key={pressableKey}
        className={`bg-pressable p-8 rounded-lg ${variant === 'secondary' && 'bg-pressable-secondary'} ${classNames}`}
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
    variant?: 'primary' | 'secondary',
    classNames?: string
}