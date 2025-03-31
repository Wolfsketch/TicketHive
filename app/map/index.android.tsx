import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Platform } from "react-native";

if (Platform.OS === "web") {
  throw new Error(
    "react-native-maps werkt niet op web. Gebruik Android of iOS."
  );
}

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 50.8503, // Brussel (voorbeeld)
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
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
