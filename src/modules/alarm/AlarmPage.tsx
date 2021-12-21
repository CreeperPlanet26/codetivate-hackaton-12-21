// @ts-nocheck
//import "./styles.css";
import * as tf from '@tensorflow/tfjs';
import * as React from 'react';
//import * as speechCommands from '@tensorflow-models/speech-commands';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function App() {
  function createData(name, probability) {
    let Probability = probability * 100;
    return { name, Probability };
}

  const [loading, setLoading] = React.useState(false);
  const [modelLabels, setModelLabels] = React.useState(false);
  const [results, setResults] = React.useState([createData("Gunshots", 0), createData("Backround Noise", 0)]);

  const URL = 'https://teachablemachine.withgoogle.com/models/rhU63TvgN/';

  function handleClick() {
    setLoading(!loading);
    ModelInit()
  }

  const rows = [
    
];

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

  const ModelInit = async() =>  {
      const recognizer = await createModel();
      const classLabels = recognizer.wordLabels(); // get class labels
      // listen() takes two arguments:
      // 1. A callback function that is invoked anytime a word is recognized.
      // 2. A configuration object with adjustable fields
      recognizer.listen(result => {
          const scores = result.scores; // probability of prediction for each class
          // render the probability scores per class
          const resultsArray = [[createData("Gunshots", 0), createData("Backround Noise", 0)]]
          for (let i = 0; i < classLabels.length; i++) {
              //const classPrediction = classLabels[i] + ': ' + result.scores[i].toFixed(2);
              resultsArray[i] = createData(classLabels[i], result.scores[i].toFixed(2));
              let gunshotPrediction = 1-result.scores[1].toFixed(2);
            resultsArray[classLabels.length+1]= createData("Gunshot", gunshotPrediction)
          }
          setResults(resultsArray);
          console.log(resultsArray);
          console.log(results);
      }, {
          includeSpectrogram: true, // in case listen should return result.spectrogram
          probabilityThreshold: 0.75,
          invokeCallbackOnNoiseAndUnknown: true,
          overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
      });
      // setTimeout(() => recognizer.stopListening(), 5000);
  }


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#ff3f3f',
        color: theme.palette.common.white
        },
        [`&.${tableCellClasses.body}`]: {
        fontSize: 14
        }
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
        },
        // hide last border
        "&:last-child td, &:last-child th": {
        border: 0
        }
    }));
    
    
  return (
    <div className="App">

    <Box sx={{ "& > button": { m: 1 } }}>
    {/* <FormControlLabel
      sx={{
        display: "block"
      }}
      control={
        <Switch
          checked={loading}
          onChange={() => setLoading(!loading)}
          name="loading"
          color="primary"
        />
      }
      label="Loading"
    /> */}
    <LoadingButton
      onClick={() => ModelInit()}
      loading={loading}
      loadingIndicator="Listening..."
      variant="outlined"
    >
      Turn On Alarm
    </LoadingButton>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Predictions</StyledTableCell>
            <StyledTableCell align="left">Probability</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.Probability}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  </Box>
    </div>
  );
}
