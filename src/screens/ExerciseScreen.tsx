import { useState } from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ExerciseScreen: React.FC<{
    exercise: {
        weight: number;
        repHi: number;
        repLow: number;
        notes: string;
        tempo: string;
        title: string;
    }, next: () => void
}> = ({ exercise, next }) => {


    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                barStyle="light-content"
            />
            <View
                style={[
                    styles.container
                ]}>
                <View style={{ flex: 0.5, display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: "white", fontSize: 100 }} adjustsFontSizeToFit={true}>{exercise.title}</Text>
                </View>


                <View style={{ flex: 1, flexDirection: 'row' }} >
                    <View style={styles.box} >
                        <Text style={styles.text}>Weight</Text>
                        <Text style={styles.weightText}>{exercise.weight}</Text>
                    </View>
                    <View style={styles.box} >
                        <Text style={styles.text}>Reps</Text>
                        <Text style={{ ...styles.weightText, fontSize: 40 }}>{exercise.repLow}/{exercise.repLow}</Text>
                    </View>
                    <View style={{ ...styles.box }} >
                        <Text style={styles.text}>Set</Text>
                        <Text style={styles.weightText}>2/3</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }} >
                    <View style={styles.box} >
                        <Text style={styles.text}>Notes</Text>
                        <Text style={{ ...styles.weightText, fontSize: 18 }}>{exercise.notes}</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }} >
                    <View style={styles.box} >
                        <Text style={styles.text}>Tempo</Text>
                        <Text style={{ ...styles.weightText, fontSize: 18 }}>{exercise.tempo}</Text>
                    </View>
                </View>
                <Pressable
                    style={{ backgroundColor: "orange", flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    onPress={next}
                >
                    <Text style={{ fontSize: 28, fontWeight: '600' }}>Next Set</Text>
                </Pressable>
            </View>
        </View>
    );
}

const baseText = {
    color: 'white',
    textAlign: 'center' as const,
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'black',
        flex: 1,
    },
    text: {
        ...baseText,
        fontSize: 20,
        flex: 1
    },
    weightText: {
        ...baseText,
        fontSize: 50,
        flex: 2
    },
    box: {
        flex: 1,
        borderColor: 'orange',
        borderStyle: 'solid',
        borderWidth: 4,
        padding: 8,
        flexDirection: "column"
    }
});