import { Text, View, StyleSheet, Button } from 'react-native';


export default function App() {

    return (
        <View
            style={[
                styles.container
            ]}>
            <View style={{ flex: 1, flexDirection: 'row' }} >
                <View style={styles.box} >
                    <Text style={styles.text}>Weight</Text>
                    <Text style={styles.weightText}>10</Text>
                </View>
                <View style={styles.box} >
                    <Text style={styles.text}>Reps</Text>
                    <Text style={{ ...styles.weightText, fontSize: 40 }}>10/15</Text>
                </View>
                <View style={{ ...styles.box }} >
                    <Text style={styles.text}>Set</Text>
                    <Text style={styles.weightText}>2/3</Text>
                </View>
            </View>
            <View style={{ flex: 2 }} >
                <View style={styles.box} >
                    <Text style={styles.text}>Notes</Text>
                    <Text style={{ ...styles.weightText, fontSize: 18 }}>Easy to go too heavy on this one, use the tempo to make it burn rather than the weight itself. Connect with the chest.</Text>
                </View>
            </View>
            <View style={{ flex: 2 }} >
                <View style={styles.box} >
                    <Text style={styles.text}>Tempo</Text>
                    <Text style={{ ...styles.weightText, fontSize: 18 }}>3 second eccentrics + 1 count in the contraction.</Text>
                </View>
            </View>
            <View style={{ flex: 1 }} >
                <Button title='Next Set' />
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
        paddingVertical: 35,
        paddingTop: 40,
        paddingHorizontal: 15
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