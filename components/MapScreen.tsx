import React from "react";
import { Platform, Text, View, StyleSheet } from "react-native";

let MapView: any = null;
let Marker: any = null;

if (Platform.OS !== "web") {
  const Maps = require("react-native-maps");
  MapView = Maps.default;
  Marker = Maps.Marker;
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
      >
        <Marker
          coordinate={{ latitude: 50.8503, longitude: 4.3517 }}
          title="Voorbeeld Event"
          description="Klik hier voor meer info"
        />
      </MapView>
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
