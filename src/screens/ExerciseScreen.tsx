import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { ExcerciseType } from "../workout";

export const ExerciseScreen: React.FC<{
  title: string;
  set: ExcerciseType;
  setCount: string;
  next: () => void;
}> = ({ title, set, setCount, next }) => {
  console.log(title, set, setCount);
  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.container]}>
        <View
          style={{
            flex: 0.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ color: "white", fontSize: 100 }}
            adjustsFontSizeToFit={true}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.box}>
            <Text style={styles.text}>Weight</Text>
            <Text style={styles.weightText}>{set.weight}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Reps</Text>
            <Text style={{ ...styles.weightText, fontSize: 40 }}>
              {set.repLow}-{set.repHi}
            </Text>
          </View>
          <View style={{ ...styles.box }}>
            <Text style={styles.text}>Set</Text>
            <Text style={styles.weightText}>{setCount}</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ ...styles.text, fontSize: 34 }}>Tempo</Text>
          <View style={styles.box}>
            <Text style={{ ...styles.weightText, fontSize: 26 }}>
              {set.tempo}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ ...styles.text, fontSize: 34 }}>Notes</Text>
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.weightText, fontSize: 26 }}>
              {set.notes}
            </Text>
          </View>
        </View>
        <Pressable
          style={{
            backgroundColor: "orange",
            flex: 0.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: "10%",
            borderRadius: 10,
          }}
          onPress={next}
        >
          <Text style={{ fontSize: 28, fontWeight: "600" }}>Next Set</Text>
        </Pressable>
      </View>
    </View>
  );
};

const baseText = {
  color: "white",
  textAlign: "center" as const,
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "black",
    flex: 1,
  },
  text: {
    ...baseText,
    fontSize: 20,
    flex: 1,
  },
  weightText: {
    ...baseText,
    fontSize: 50,
    flex: 2,
  },
  box: {
    flex: 1,
    padding: 8,
    flexDirection: "column",
  },
});
