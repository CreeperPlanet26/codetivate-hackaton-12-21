import { useEffect, useState } from "react";
import ReactMapGL, { Popup } from "react-map-gl";
import { db } from "../../firebase";
import Pins from "./Pins";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 2,
    });

    const [popupInfo, setPopupInfo] = useState(null);

    const [rows, setRows] = useState([]);

    const [schools, setSchools] = useState<
        {
            reason: string;
            description: string[];
            time_posted: string;
            name: string;
            address: string;
            schoolName: string;
            latLong: {
                lat: number;
                long: number;
            };
        }[]
    >([]);

    function createData(
        name: string,
        schoolName: string,
        address: string,
        reason: string,
        description: Array<string>,
        time: string
    ) {
        return { name, schoolName, address, reason, description, time };
    }

    const [canRender, setCanRender] = useState(false);

    useEffect(() => {
        console.log("about to fetch");
        db.collection("schools")
            .get()
            //@ts-ignore
            .then((s) => {
                //@ts-ignore
                s.forEach((d) => {
                    //@ts-ignore

                    console.log("data =>", d.data());

                    //@ts-ignore
                    setSchools((st) => {
                        console.log("inside set state method", [...st, d.data()]);
                        return [...st, d.data()];
                    });
                });
                //@ts-ignore
                setRows(
                    schools.map((school) => {
                        return createData(
                            school.name,
                            school.schoolName,
                            school.address,
                            school.reason,
                            school.description,
                            school.time_posted
                        );
                    })
                );

                console.log("done fetching", schools);
                setCanRender(true);
            });
    }, []);

    console.log("schools =>", schools);

    return (
        <>
            <ReactMapGL
                {...viewport}
                width="75vw"
                height="75vh"
                // style={{ marginTop: "auto" }}
                mapOptions={{ style: "mapbox://styles/mapbox/streets-v11" }}
                onViewportChange={(viewport) => setViewport(viewport)}
                mapboxApiAccessToken="pk.eyJ1IjoiY3JlZXBlcnBsYW5ldDI2IiwiYSI6ImNreGR6Y2Q4ODB2dWoyb29rMWdyMWNyOWoifQ.qQBt2nMDmB9NGcytGCpP7Q"
            >
                {canRender && <Pins schools={schools} onClick={setPopupInfo} />}


            </ReactMapGL>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">School Name</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Reason</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.schoolName}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.reason}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
