import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Abt from './components/FunctionalComponents/Abt';
import NavBar from './components/FunctionalComponents/NavBar';
import Projects from './components/FunctionalComponents/Projects';
import Exp from './components/FunctionalComponents/Exp';
import Home from './components/FunctionalComponents/Home';
import Footer from './components/FunctionalComponents/Footer'
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
      <div>
        <h1>
          This is content site
        </h1>
        <h1>
          This is content site
        </h1>
        <h1>
          This is content site
        </h1>
        <h1>
          This is content site
        </h1>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
