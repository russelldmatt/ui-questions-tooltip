import logo from './logo.svg';
import './App.css';
import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tooltip label="this is a logo">
          <img src={logo} className="App-logo" alt="logo" />
        </Tooltip>
        <p>
          Edit <code>src/App.js</code> and{' '}
          <Tooltip label="this is a tooltip">save</Tooltip> to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip label="really, learn it">Learn React</Tooltip>
        </a>
      </header>
    </div>
  );
}

export default App;
