import { GoogleMap } from "react-google-maps";

export const BaseMap = () => (
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 45.421532.toFixed, lng: -75.697181 }} />

)