import { StyleSheet, Text, View } from "react-native";

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.text, textStyle]}>{duration}min</Text>
      <Text style={[styles.text, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.text, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
    overflow: "hidden",
  },
  text: {
    fontStyle: "italic",
  },
});
