import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import PlaceItem from "./PlaceItem";

function PlacesList({ places, onSelect }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={[styles.fallbackText, styles.fallbackText1]}>
          No places added yet...
        </Text>
        <Text style={[styles.fallbackText, styles.fallbackText2]}>
          Let's add some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PlaceItem place={item} onSelect={onSelect} />}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    color: Colors.primary200,
  },
  fallbackText1: {
    fontSize: 18,
  },
  fallbackText2: {
    fontSize: 16,
  },
});
