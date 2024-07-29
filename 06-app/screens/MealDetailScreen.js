import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetailStyles/Subtitle";
import List from "../components/MealDetailStyles/List";

import { useLayoutEffect } from "react";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("PRESSED!!!!");
  }

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;

    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return <Button title="tap me" onPress={headerButtonPressHandler} />;
      },
    });
  }, [mealId, navigation, headerButtonPressHandler]);

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
      <View styles={styles.listOuterContainer}>
        <View styles={styles.listContainer}>
          <Subtitle children={"INGREDIENTS"} />
          <List data={selectedMeal.ingredients} />
          <Subtitle children={"STEPS"} />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

styles = StyleSheet.create({
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
