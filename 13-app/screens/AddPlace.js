import React from "react";
import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace, db } from "../util/database"; // Importiere `db`

function AddPlace({ navigation }) {
  const createPlaceHandler = async (place) => {
    if (db) {
      try {
        await insertPlace(db, place); // Stelle sicher, dass `insertPlace` await verwendet
        navigation.navigate("AllPlaces", {
          place: place,
        });
      } catch (error) {
        console.log("Error adding place:", error);
      }
    } else {
      console.log("Database is not initialized");
    }
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
