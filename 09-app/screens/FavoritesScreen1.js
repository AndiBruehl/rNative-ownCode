import { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FavoritesContext } from "../models/FavoritesContext";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const navigation = useNavigation();

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  function renderFavoriteItem(itemData) {
    function selectMealItemHandler() {
      navigation.navigate("MealDetail", {
        mealId: itemData.item.id,
      });
    }

    return (
      <View style={styles.mealItem}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={selectMealItemHandler}
        >
          <View style={styles.innerContainer}>
            <View>
              <Image
                source={{ uri: itemData.item.imageUrl }}
                style={styles.image}
              />
              <Text style={styles.title}>{itemData.item.title}</Text>
            </View>
            <MealDetails
              duration={itemData.item.duration}
              affordability={itemData.item.affordability}
              complexity={itemData.item.complexity}
            />
            <Pressable
              style={styles.removeButton}
              onPress={() => favoriteMealsCtx.removeFavorite(itemData.item.id)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </Pressable>
          </View>
        </Pressable>
      </View>
    );
  }

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderFavoriteItem}
    />
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#ccc",
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#a1a1a1",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  removeButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  removeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
