import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Abt from './components/FunctionalComponents/Abt';
import NavBar from './components/FunctionalComponents/NavBar';
import Products from './components/FunctionalComponents/Products';
import Home from './components/FunctionalComponents/Home';
import Footer from './components/FunctionalComponents/Footer'
import Login from './components/LoginForm/Login'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/about" element={<Abt></Abt>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
