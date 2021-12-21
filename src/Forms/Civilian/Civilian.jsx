import "./Civilian.scss";
import Select from "react-select";
import React from "react";
import { db } from "../../firebase";
import axios from "axios";
import logo from "../../Transparent_Logo.png";

import { useHistory } from "react-router-dom";

const Civilian = () => {
  const responses = [
    { label: "Evacuation Update", value: "evacuation_update" },
    { label: "Shooter Location", value: "shooter_location" },
    { label: "Fatality Report", value: "fatality_report" },
    { label: "Injury Report", value: "injury_report" },
  ];

  const history = useHistory();

  const studentName = React.useRef(null);
  const schoolName = React.useRef(null);
  const teacherName = React.useRef(null);
  const cityRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const stateRef = React.useRef(null);

  const [latLong, setLatLong] = React.useState("");
  const [state, setState] = React.useState("");

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setLatLong({ lat: res.data.latitude, long: res.data.longitude });
    setState(res.data.state);
  };

  const today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  React.useEffect(() => {
    getData();
  }, []);

  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (sele) => {
    setSelectedOptions([]);
    setSelectedOptions(sele);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // this chunks thing doesn't work so i went back and used the raw description
    let chunks = descriptionRef.current.value.split(/\ ?\-\ ?/);
    chunks = chunks.slice(1);

    console.log(chunks);

    const res = chunks.map((str) => str.replaceAll("\n", ""));
    db.collection("schools")
      .doc(schoolName.current.value)
      .collection(selectedOptions.value)
      .doc(studentName.current.value)
      .set(
        {
          latLong: latLong,
          name: studentName.current.value,
          time_posted: time,
          reason: selectedOptions.value,
          description: chunks,
        },
        { merge: true }
      )
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="CivilianPage">
      <div className="CivilianContainer">
        <img src={logo} alt="ASSIST Logo" className="logo" />
        <h1>Help Form</h1>
        <p>
          Fill out the information below, so law enforcement can better assist
          you.
        </p>
        <br />
        <input
          ref={studentName}
          className="registerInput"
          type="text"
          placeholder="Name"
        />
        <input
          ref={schoolName}
          className="registerInput"
          type="text"
          placeholder="Teacher"
        />
        <input
          ref={teacherName}
          className="registerInput"
          type="text"
          placeholder="School"
        />
        <input
          ref={cityRef}
          className="registerInput"
          type="text"
          placeholder="City"
        />
        <input
          ref={stateRef}
          className="registerInput"
          type="text"
          placeholder="State"
          value={state}
        />
        <p>Reason</p>
        <Select options={responses} onChange={handleChange} />
        <br />
        <p>Provide Brief Description</p>
        <textarea
          ref={descriptionRef}
          cols="50"
          rows="10"
          placeholder="Type Description..."
        ></textarea>
        <button onClick={handleClick}>
          <p>Submit</p>
        </button>
      </div>
    </div>
  );
};

export default Civilian;
