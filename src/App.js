import Navbar from './components/Navbar';
import './App.css';
import CreateList from './components/CreateList';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { purple} from '@mui/material/colors';

const theme= createTheme({
  palette:{
    primary: {
      main: '#fefefe'
    },
    secondary: {
      main: purple[500],
    },
    typography:{
      fontFamily:'Quicksand',
      fontWeightLight:300,
      fontWeightRegular:400,
      fontWeightMedium:500,
      fontWeightBold:600,
    }
  }
})

function App(){
  return (
    <ThemeProvider theme={theme}>
      <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route exact path='/createList' element={<CreateList/>}/>
    </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
