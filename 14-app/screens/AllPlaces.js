import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../util/database";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation(); // Use useNavigation hook to access navigation

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused, route.params?.place]);

  const selectPlaceHandler = (id) => {
    navigation.navigate("PlaceDetails", {
      placeId: id,
    });
  };

  return <PlacesList places={loadedPlaces} onSelect={selectPlaceHandler} />;
}

export default AllPlaces;
