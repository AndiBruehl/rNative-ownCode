import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#ccc",
  },
  subtitleContainer: {
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#ccc",
    borderBottomWidth: 8,
    borderRadius: 25,
    marginBottom: 20,
    marginHorizontal: 48,
  },
});
