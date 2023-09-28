import { View, Text } from "react-native"

const InfoCard: React.FC<{ content: string, title: string }> = ({ content, title }) => {
    return (
        <View className="flex-1 bg-pressable p-2 rounded-lg m-2">
            <Text className="text-l text-text-primary">{title}</Text>
            <View className="flex-1 justify-start p-2">
                <Text
                    className="text-text-primary text-3xl"
                >
                    {content}
                </Text>
            </View>
        </View>
    )
}

export default InfoCard