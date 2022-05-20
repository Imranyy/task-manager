
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Todolist from './components/Todolist';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App(){
  return (
    <Router>
    <div className="App">
      <Navbar title="Todo"/>
    </div>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/todolist' element={<Todolist/>}/>
    </Routes>
    </Router>
  );
}

export default App;
