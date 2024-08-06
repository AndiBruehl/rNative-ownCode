import * as SQLite from "expo-sqlite";
import { Place } from "../models/place";

const db = SQLite.openDatabase("places.db");
export const init = async () => {
  await db.execAsync(`
        CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
        )
    `);
};

export const insertPlace = async (place) => {
  const result = await db.runAsync(
    "INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)",
    [
      place.title,
      place.imageUri,
      place.address,
      place.location.lat,
      place.location.lng,
    ]
  );
  return result;
};

export const fetchPlaces = async () => {
  const placesArray = [];
  const places = await db.getAllAsync("SELECT * FROM places1");
  console.log("places", places);
  places.forEach((place) =>
    placesArray.push(
      new Place(
        place.title,
        place.imageUri,
        { address: place.address, latitude: place.lat, longitude: place.lng },
        place.id
      )
    )
  );
  return placesArray;
};

export const fetchPlaceDetails = async (id) => {
  const stmt = await db.prepareAsync("SELECT * FROM places1 WHERE id = $id");
  const result = await stmt.executeAsync({ $id: id });
  const firstRow = await result.getFirstAsync();
  await result.resetAsync();
  return firstRow;
};
