import { useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { db } from "../../firebase";
import Pins from "./Pins";

export const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 2,
  });

  const [popupInfo, setPopupInfo] = useState(null);

  const schools = [];

  useEffect(() => {
    console.log("about to fetch");
    db.collection("schools")
      .get()
      //@ts-ignore
      .then((s) => {
        s.forEach((d) => schools.push(d.data()));
        console.log("done fetching", schools);
      });
  }, []);

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
      {schools.map((s) => (
        <>
          <Pins schools={schools} onClick={setPopupInfo} />

          <Popup
            tipSize={5}
            anchor="top"
            longitude={s.latLong.lat}
            latitude={s.latLong.long}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            {" "}
            <p>{s.name}</p>
          </Popup>
        </>
      ))}
    </ReactMapGL>
  );
};
