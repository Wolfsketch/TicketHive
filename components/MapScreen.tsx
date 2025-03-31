import React from "react";
import { Platform, Text, View, StyleSheet } from "react-native";

let MapView: any;
if (Platform.OS !== "web") {
  MapView = require("react-native-maps").default;
}

export default function MapScreen() {
  if (Platform.OS === "web") {
    return (
      <View style={styles.centered}>
        <Text>Kaarten zijn niet beschikbaar op de webversie van deze app.</Text>
      </View>
    );
  }

  return (
    <View style={styles.map}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 50.8503,
          longitude: 4.3517,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
  },
});
