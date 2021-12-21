import { useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { db } from "../../firebase";
import Pin from "./Pin";

export const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 2,
    });

    const [schools, setSchools] = useState<{
        reason: string;
        description: string[];
        time_posted: string;
        name: string;
        latLong: {
            lat: number;
            long: number
        }
    }[]>([])

    useEffect(() => {

        console.log("about to fetch")
        db
            .collection("schools")
            .get()
            //@ts-ignore
            .then(s => s.forEach(d => setSchools(st => [...st, d.data()])))

        console.log("done fetching", schools)
    }, [])

    return (
        <ReactMapGL
            {...viewport}
            width="75vw"
            height="75vh"
            // style={{ marginTop: "auto" }}
            mapOptions={{ style: "mapbox://styles/mapbox/streets-v11" }}
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken="pk.eyJ1IjoiY3JlZXBlcnBsYW5ldDI2IiwiYSI6ImNreGR6Y2Q4ODB2dWoyb29rMWdyMWNyOWoifQ.qQBt2nMDmB9NGcytGCpP7Q"
        >

            {schools.map(s => (
                <Marker latitude={s.latLong.lat} longitude={s.latLong.long}>
                    <Pin />
                </Marker>
            ))}

        </ReactMapGL>
    );
};
