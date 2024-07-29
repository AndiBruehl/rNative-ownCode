import { Image, ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import { useLayoutEffect, useContext } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetailStyles/Subtitle";
import List from "../components/MealDetailStyles/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../models/FavoritesContext";

function MealDetailScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function headerButtonPressHandler() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
      Alert.alert("Removed", "The meal was removed from your favorites.");
    } else {
      favoriteMealsCtx.addFavorite(mealId);
      Alert.alert("Added", "The meal was added to your favorites.");
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="#ccc"
            title="tap me"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler, mealIsFavorite]);

  return (
    <ScrollView style={[styles.scroll]}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={[styles.image]} />
      <Text style={[styles.title]}>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          textStyle={styles.detailText}
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>INGREDIENTS</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>STEPS</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#ccc",
  },
  detailText: {
    color: "#ccc",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
  scroll: {
    marginBottom: 40,
  },
});
