import { Colors } from "../../constants/colors";

import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function PlaceItem({ place, onSelect }) {
  return (
    <Pressable
      onPress={onSelect}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
    >
      <Image source={{ uri: place.imageUri }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 6,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.15,
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.primary700,
  },
  address: {
    fontSize: 16,
    color: Colors.primary50,
  },
});
