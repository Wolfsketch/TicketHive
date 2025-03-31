// app/map/index.tsx
import { Platform } from "react-native";
import type { FC } from "react";
import type { ViewProps } from "react-native";

let MapScreen: FC<ViewProps>;

if (Platform.OS === "web") {
  MapScreen = require("./index.web").default;
} else {
  MapScreen = require("./index.android").default;
}

export default MapScreen;
