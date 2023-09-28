import { Pressable, Text } from "react-native";


const Button: React.FC<ButtonProps> = ({ pressableKey = "", onPress, title, variant = 'primary', classNames }) => {
    return <Pressable
        key={pressableKey}
        className={`bg-pressable p-8 rounded-lg h-28 items-center justify-center ${variant === 'secondary' && 'bg-pressable-secondary'} ${classNames}`}
        onPress={onPress}
    >
        <Text className="font-bold text-center text-2xl text-text-primary">{title}</Text>
    </Pressable>
}

export default Button

type ButtonProps = {
    pressableKey?: string | number;
    onPress: () => any;
    title: string
    variant?: 'primary' | 'secondary',
    classNames?: string
}