import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent'; 
import Ccomponent from './Ccomponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Fcomponent number="3.1415926535897932384626433832795028"/>
         <Ccomponent  />
         
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
