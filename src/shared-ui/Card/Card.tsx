import { View, Text } from "react-native"

const Card: React.FC<{ title: string, content: string | number }> = ({ title, content }) => {

    return (
        <View className="flex-1 p-2 flex-col justify-end bg-pressable rounded-lg m-2">
            <Text className="text-text-primary text-lg">{title}</Text>
            <Text
                className="text-text-primary text-center text-6xl p-6"
                adjustsFontSizeToFit={true}
                numberOfLines={1}
            >
                {content}
            </Text>
        </View>
    )
}

export default Card