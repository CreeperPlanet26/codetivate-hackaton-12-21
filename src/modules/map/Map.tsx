import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Pin from './Pin';

export const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    return (

        <ReactMapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapOptions={{ style: "mapbox://styles/mapbox/streets-v11" }}
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken="pk.eyJ1IjoiY3JlZXBlcnBsYW5ldDI2IiwiYSI6ImNreGR6Y2Q4ODB2dWoyb29rMWdyMWNyOWoifQ.qQBt2nMDmB9NGcytGCpP7Q"
        >
            <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
                <Pin />
            </Marker>
        </ReactMapGL>

    )
}