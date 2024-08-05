import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";

function LocationPicker() {
  function getLocationHandler() {}

  function pickOnMapHandler() {}

  return (
    <View style={styles.container}>
      <View style={styles.locationPreview}>{/* <Text>LOCATION</Text> */}</View>
      <View style={styles.buttons}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  locationPreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: Colors.primary100,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
});

export default LocationPicker;
