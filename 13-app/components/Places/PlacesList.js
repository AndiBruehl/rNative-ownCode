import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";

function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={[styles.fallbackText, styles.fallbackText1]}>
          No places added yet...
        </Text>
        <Text style={[styles.fallbackText, styles.fallbackText2]}>
          Let's start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: { color: Colors.primary200 },
  fallbackText1: {
    fontSize: 18,
  },
  fallbackText2: {
    fontSize: 16,
  },
});
