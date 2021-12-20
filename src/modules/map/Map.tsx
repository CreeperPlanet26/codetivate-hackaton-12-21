import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import ReactMapGL, { Marker } from 'react-map-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY3JlZXBlcnBsYW5ldDI2IiwiYSI6ImNreGR6Y2Q4ODB2dWoyb29rMWdyMWNyOWoifQ.qQBt2nMDmB9NGcytGCpP7Q';

export const Map = () => {
    // const mapContainer = useRef(null);
    // const map = useRef(null);
    // const markers = useRef(null);


    // useEffect(() => {
    //     if (map.current && markers.current) return; // initialize map only once
    //     map.current = new mapboxgl.Map({
    //         container: mapContainer.current,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [-70.9, 42.35],
    //         zoom: 4
    //     });
    //     const marker1 = new mapboxgl.Marker()
    //         .setLngLat([12.554729, 55.70651])
    //         .addTo(map.current);

    // });

    // useEffect(() => {

    //     if (!map.current) return
    //     markers.current = [
    //         new mapboxgl.Marker()
    //             .setLngLat([0, 0])
    //             .addTo(map.current)]
    // })

    // return (
    //     <div className='map-component'>
    //         <div ref={mapContainer} className="map-container" />

    //     </div>
    // )


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
                <div className="pin" />
                asdfdf

                <div>you are here</div>
            </Marker>
        </ReactMapGL>

    )


}