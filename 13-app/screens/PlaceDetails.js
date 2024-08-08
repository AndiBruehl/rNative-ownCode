import { useEffect, useState } from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import OutlinedButton from "../components/ui/OutlinedButton"; // Achte darauf, dass dieser Import korrekt ist
import { Colors } from "../constants/colors";
import { fetchPlaceDetails } from "../util/database";

function PlaceDetails({ route, navigation }) {
  const [fetchedPlace, setFetchedPlace] = useState();

  function showOnMapHandler() {
    if (fetchedPlace && fetchedPlace.lat && fetchedPlace.lng) {
      navigation.navigate("Map", {
        initialLat: fetchedPlace.lat,
        initialLng: fetchedPlace.lng,
      });
    } else {
      console.log("Location data is not available.");
    }
  }

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(place);
      navigation.setOptions({
        title: place.title,
      });
    }

    loadPlaceData();
  }, [selectedPlaceId]);

  if (!fetchedPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data...</Text>
      </View>
    );
  }

  console.log(fetchedPlace); // Logge fetchedPlace, um zu überprüfen, ob die Daten korrekt sind

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        {fetchedPlace.lat && fetchedPlace.lng ? ( // Überprüfe, ob lat und lng vorhanden sind
          <OutlinedButton icon="map" onPress={showOnMapHandler}>
            View on Map
          </OutlinedButton>
        ) : (
          <Text>Location not available</Text> // Fallback für fehlende Location-Daten
        )}
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
