import logo from './logo.svg';
import './App.css';
import TestComponent from './components/FunctionalComponents/testComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent/>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo1" alt="logo" />
        <p>
          Visit my portfolio
        </p>
        <a
          className="App-link"
          href="https://karthicksenthil.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </a>
      </header>
    </div>
  );
}

export default App;
