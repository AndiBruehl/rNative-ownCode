let db; // Initialisiere db als Variable außerhalb der Funktionen
import { Alert } from "react-native";

// Initialize the database
export const init = async (database) => {
  db = database; // Setze `db` hier
  try {
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
      )
    `);
    console.log("Database initialized!");
  } catch (error) {
    console.log("Error while initializing the database:", error);
  }
};

export const insertPlace = async (database, place) => {
  if (!database) {
    console.log("Database object is not provided");
    return;
  }

  if (!place) {
    console.log("Place object is not provided");
    return;
  }

  // Log the place object to see its structure
  console.log("Place object:", place);

  if (
    !place.title ||
    !place.imageUri ||
    !place.address ||
    !place.location ||
    !place.location.lat ||
    !place.location.lng
  ) {
    console.log("Invalid place object:", place);
    return;
  }

  try {
    await database.runAsync(
      `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
      [
        place.title,
        place.imageUri,
        place.address,
        place.location.lat,
        place.location.lng,
      ]
    );
    Alert.alert("Success", "Place added!");
  } catch (error) {
    console.log("Error during registration:", error);
  }
};

export const fetchPlaces = async () => {
  try {
    const places = await db.getAllAsync("SELECT * FROM places", []);
    console.log("Fetched places:", places);
    return places;
  } catch (error) {
    console.log("Error fetching places:", error);
    return []; // Sicherstellen, dass immer ein Array zurückgegeben wird
  }
};

export const fetchPlaceDetails = async (id) => {
  const stmt = await db.prepareAsync("SELECT * FROM places WHERE id = $id");
  const result = await stmt.executeAsync({ $id: id });
  const firstRow = await result.getFirstAsync();
  await result.resetAsync();
  console.log(firstRow);
  return firstRow;
};

// Delete a place by ID
export const deletePlace = async (id) => {
  try {
    await db.runAsync(`DELETE FROM places WHERE id = ?`, [id]);
    Alert.alert("Success", "Place deleted!");
    console.log(`Place with ID ${id} deleted.`);
  } catch (error) {
    console.log("Error deleting place:", error);
    Alert.alert("Error", "An error occurred while deleting the place.");
  }
};

export { db };
