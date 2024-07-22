import { View, Text, Image, Pressable, StyleSheet } from "react-native";

function MealItem({ title, imageUrl, duration, affordability, complexity }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={[styles.image]} />
          <Text style={[styles.title]}>{title}</Text>
        </View>
        <View>
          <Text>{duration}min</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
