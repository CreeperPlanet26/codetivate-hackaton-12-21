// export const AlarmPage = () => {
//     return (
//         <div className="alarm-page">
//             <h2>alarm page</h2>
//         </div>
//     )
// }
import React from "react";
// import axios from "axios";
//import { upload } from "@testing-library/user-event/dist/upload";

export default function AlarmPage() {
  const [uploadFile, setUploadFile] = React.useState();
  const [superHero, setSuperHero] = React.useState();
  
  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    //dataArray.append("superHeroName", superHero);
    // dataArray.append("recording", uploadFile[0]);
	// console.log(uploadFile[0])
	// var formdata = new FormData();
	// formdata.append("recording", uploadFile[0], "gunfire.wav");

	// var requestOptions = {
	// method: 'POST',
	// body: formdata,
	// redirect: 'follow'
	// };

	// fetch("http://127.0.0.1:5000/upload", requestOptions)
	// .then(response => response.text())
	// .then(result => console.log(result))
	// .catch(error => console.log('error', error));
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        {/* <input
          type="text"
          onChange={(e) => setSuperHero(e.target.value)}
          placeholder={"Superhero Name"}
        /> */}
        <br />
        {/* <input type="file" onChange={(e) => setUploadFile(e.target.files)} /> */}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
