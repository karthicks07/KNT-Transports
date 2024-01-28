import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Abt from './components/FunctionalComponents/Abt';
import NavBar from './components/FunctionalComponents/NavBar';
import Products from './components/FunctionalComponents/Products';
import Home from './components/FunctionalComponents/Home';
import Footer from './components/FunctionalComponents/Footer'
import Login from './components/LoginForm/Login'
import Signup from './components/LoginForm/Signup';
import UseRefComponent from './components/FunctionalComponents/useRef';
import Memo from './components/FunctionalComponents/useMemo'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/about" element={<Abt/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/useref" element={<UseRefComponent/>}/>
        <Route path="/memo" element={<Memo/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
