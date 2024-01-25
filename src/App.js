import logo from './logo.svg';
import './App.css';
import TestComponent from './components/FunctionalComponents/testComponent';
import PropsComponent from './components/FunctionalComponents/PropsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PropsComponent name="Karthick" course="React"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Visit my portfolio</p>
        <a className="App-link" href="https://karthicksenthil.in" target="_blank" rel="noopener noreferrer">Click here</a>
      </header>
    </div>
  );
}

export default App;
