// import "./Civilian.css";
import Select from "react-select";
import React from "react";
import { db } from "../../firebase";
import axios from "axios";

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
  const [ip, setIP] = React.useState("");

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
  };

  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  React.useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (sele) => {
    setSelectedOptions([]);
    setSelectedOptions(sele);
  };

  const handleClick = (e) => {
    e.preventDefault();
    db.collection("schools").doc(schoolName.current.value).collection("Student Locations").set(
      {
        ip: ip,
        name: studentName.current.value,
        time_posted: time,
        reason: selectedOptions.value,
        description: descriptionRef.current.value,
      },
      { merge: true },
    );
    history.push("/home");
  };

  return (
    <div>
      <div className="CivilianContainer">
        <h1>Help Form</h1>
        <p>Fill out the information below, so law enforcement can better assist you.</p>
        <br />
        <input ref={studentName} className="registerInput" type="text" placeholder="Name" />
        <input ref={schoolName} className="registerInput" type="text" placeholder="Teacher" />
        <input ref={teacherName} className="registerInput" type="text" placeholder="School" />
        <input ref={cityRef} className="registerInput" type="text" placeholder="City" />
        <p>Reason</p>
        <Select options={responses} onChange={handleChange} />
        <br />
        <p>Provide Brief Description</p>
        <textarea ref={descriptionRef} cols="50" rows="10" placeholder="Type Description..."></textarea>
        <button onClick={handleClick}>
          <p>Submit</p>
        </button>
      </div>
    </div>
  );
};

export default Civilian;
