import { createTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './modules/home/HomePage';
import './styles/globals.scss';

const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF",
    },
    primary: {
      main: "#ff3f3f",
      light: "#e94d3d",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3f69ff",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Open Sans",
  },
});


function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
