import { useEffect, useState } from "react";
import { ScrollView, Image, View, Text, StyleSheet, Alert } from "react-native";
import IconButton from "../components/ui/IconButton";
import OutlinedButton from "../components/ui/OutlinedButton";
import { Colors } from "../constants/colors";
import { fetchPlaceDetails, deletePlace } from "../util/database";

function PlaceDetails({ route, navigation }) {
  const [fetchedPlace, setFetchedPlace] = useState();

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

  async function deletePlaceHandler() {
    await deletePlace(selectedPlaceId); // Call the deletePlace function with the place ID
    navigation.goBack(); // Navigate back after deletion
  }

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

  if (!fetchedPlace) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.text}>Loading place data...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        {/* <View>
          {fetchedPlace.lat && fetchedPlace.lng ? (
            <OutlinedButton icon="map" onPress={showOnMapHandler}>
              View on Map
            </OutlinedButton>
          ) : (
            <Text>Location not available</Text>
          )}
          <IconButton
            icon="trash"
            size={24}
            color={Colors.danger500}
            onPress={deletePlaceHandler} // Use the handler to delete the place
          />
        </View> */}
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
  text: {
    color: Colors.primary500,
  },
});
