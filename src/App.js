import Logo from "./reduxLogo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>Los Rezagados !</p>
        <a
          className="App-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux study group
        </a>
      </header>
    </div>
  );
}

export default App;
