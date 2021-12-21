// @ts-nocheck
// import React from "react";
// import ReactDOM from 'react-dom'
// import Button from '@mui/material/Button'
// import { styled } from '@mui/material/styles';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import Stack from '@mui/material/Stack';
// import { createTheme } from '@mui/material/styles';
// import PropTypes from 'prop-types';
// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import StarIcon from '@mui/icons-material/Star';


// export default function AlarmPage() {
//   const [uploadFile, setUploadFile] = React.useState();
//   const [predictions, setPredictions] =  React.useState({});

//   const theme = createTheme({
//     palette: {
//       primary: {
//         light: '#757ce8',
//         main: '#3f50b5',
//         dark: '#002884',
//         contrastText: '#fff',
//       },
//       secondary: {
//         light: '#ff7961',
//         main: '#f44336',
//         dark: '#ba000d',
//         contrastText: '#000',
//       },
//     },
//   });
//   const Demo = styled("div")(({ theme }) => ({
//     backgroundColor: theme.palette.background.paper
//   }));
//   const submitForm = (event) => {
//     event.preventDefault();

//     const dataArray = new FormData();
//     // dataArray.append("superHeroName", superHero);
//     dataArray.append("recording", uploadFile[0]);
// 	console.log(uploadFile[0])
// 	var formdata = new FormData();
// 	formdata.append("recording", uploadFile[0], "gunfire.wav");

// 	var requestOptions = {
// 	method: 'POST',
// 	body: formdata,
// 	redirect: 'follow'
// 	};

// 	fetch("http://127.0.0.1:5000/upload", requestOptions)
// 	.then(response => response.text())
// 	.then(result => {
//         console.log(predictions)
//         let parsed = JSON.parse(result)
//         console.log(parsed)
//         setPredictions(parsed)
//         console.log(predictions)
//     })
// 	.catch(error => console.log('error', error));
//   };
//   const Input = styled('input')({
//     display: 'none',
//   });

//   function createData(name, calories, fat, carbs, protein, price) {
//     return {
//       name,
//       calories,
//       fat,
//       carbs,
//       protein,
//       price,
//       history: [
//         {
//           date: '2020-01-05',
//           customerId: '11091700',
//           amount: 3,
//         },
//         {
//           date: '2020-01-02',
//           customerId: 'Anonymous',
//           amount: 1,
//         },
//       ],
//     };
//   }

//   return (
//     <div>
//     {/* <form onSubmit={submitForm}> */}
//         <br />
//         {/* <input type="file" onChange={(e) => setUploadFile(e.target.files)} /> */}
//         <label htmlFor="contained-button-file">
//         <Input accept="wav/*" id="contained-button-file" multiple type="file" onChange={(e) => setUploadFile(e.target.files)}  />
//         <Button color="primary" variant="contained" component="span">
//             Upload
//         </Button>
//         </label>
//         <label htmlFor="icon-button-file">
//         <br/>
//         {/* <Input accept="image/*" id="icon-button-file" type="file" />
//         <IconButton color="primary" aria-label="upload picture" component="span">
//             <PhotoCamera />
//         </IconButton> */}
//         </label>
//         <br />
//         <Button variant="outlined"onClick={submitForm}>
//         Click me
//         </Button>
//         {/* <input type="submit" /> */}
//       {/* </form> */}
//       <br/>

//       <hr/>
//       <List
//       sx={{ width: '100%', maxWidth: 3600, bgcolor: 'background.paper' }}
//       aria-label="contacts"
//     >
//       <ListItem disablePadding>
//         <ListItemButton>
//           <ListItemIcon>
//             <StarIcon />
//           </ListItemIcon>
//           <ListItemText primary={predictions.prediction1} />
//         </ListItemButton>
//       </ListItem>
//       <ListItem disablePadding>
//         <ListItemButton>
//           <ListItemText inset primary={predictions.prediction2} />
//         </ListItemButton>
//       </ListItem>
//       <ListItem disablePadding>
//         <ListItemButton>
//           <ListItemText inset primary={predictions.prediction4} />
//         </ListItemButton>
//       </ListItem>
//       <ListItem disablePadding>
//         <ListItemButton>
//           <ListItemText inset primary={predictions.prediction5} />
//         </ListItemButton>
//       </ListItem>
//       <ListItem disablePadding>
//         <ListItemButton>
//           <ListItemText inset primary={predictions.prediction6} />
//         </ListItemButton>
//       </ListItem>
//       <ListItem disablePadding>
//         <ListItemButton>
//           <ListItemText inset primary={predictions.prediction7} />
//         </ListItemButton>
//       </ListItem>
//       <ListItem disablePadding>
//         <ListItemButton>
//           <ListItemText inset primary={predictions.prediction8} />
//         </ListItemButton>
//       </ListItem>
//       <ListItem disablePadding>
//         <ListItemButton>
//           <ListItemText inset primary={predictions.prediction9} />
//         </ListItemButton>
//       </ListItem>

//     </List>
//     </div>
//   );
// }
// import "./styles.css";
// import * as tf from '@tensorflow/tfjs';
// import * as speechCommands from '@tensorflow-models/speech-commands';

export default function App() {

    const URL = 'https://teachablemachine.withgoogle.com/models/Ax2P9oA-YJ/';

    const createModel = async () => {
        const checkpointURL = URL + 'model.json'; // model topology
        const metadataURL = URL + 'metadata.json'; // model metadata

        const recognizer = speechCommands.create(
            'BROWSER_FFT', // fourier transform type, not useful to change
            undefined, // speech commands vocabulary feature, not useful for your models
            checkpointURL,
            metadataURL);

        // check that model and metadata are loaded via HTTPS requests.
        await recognizer.ensureModelLoaded();

        return recognizer;
    }

    const ModelInit = async () => {
        const recognizer = await createModel();
        const classLabels = recognizer.wordLabels(); // get class labels
        const labelContainer = document.getElementById('label-container');
        for (let i = 0; i < classLabels.length; i++) {
            labelContainer.appendChild(document.createElement('div'));
        }

        // listen() takes two arguments:
        // 1. A callback function that is invoked anytime a word is recognized.
        // 2. A configuration object with adjustable fields
        recognizer.listen(result => {
            const scores = result.scores; // probability of prediction for each class
            // render the probability scores per class
            for (let i = 0; i < classLabels.length; i++) {
                const classPrediction = classLabels[i] + ': ' + result.scores[i].toFixed(2);
                labelContainer.childNodes[i].innerHTML = classPrediction;
            }
        }, {
            includeSpectrogram: true, // in case listen should return result.spectrogram
            probabilityThreshold: 0.75,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
        });

        // Stop the recognition in 5 seconds.
        // setTimeout(() => recognizer.stopListening(), 5000);
    }
    return (
        <div className="App">
            <button type='button' onClick={() => ModelInit()}>Start</button>
            <div id='label-container'></div>
        </div>
    );
}