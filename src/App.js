import logo from './logo.svg';
import './App.css';
import TestComponent from './components/FunctionalComponents/testComponent';
import PropsComponent from './components/FunctionalComponents/PropsComponent';
import StateComponent from './components/ClassComponents/StateComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Abt from './components/FunctionalComponents/Abt';
import NavBar from './components/FunctionalComponents/NavBar';
import Projects from './components/FunctionalComponents/Projects';
import Exp from './components/FunctionalComponents/Exp';
import Home from './components/FunctionalComponents/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/about" element={<Abt></Abt>}/>
        <Route path="/login" element={<Exp/>}/>
      </Routes>
      </BrowserRouter>
      <header className="App-header">
        <a className="App-link" href="https://karthicksenthil.in" target="_blank" rel="noopener noreferrer">Click here</a>
      </header>
    </div>
  );
}

export default App;
