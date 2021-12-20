import { withScriptjs } from "react-google-maps";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import { BaseMap } from "./BaseMap";

export const WrappedMap = withScriptjs(withGoogleMap(BaseMap));