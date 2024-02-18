import logo from './logo.svg';
import './App.css';

const App = () => {

  let link = "https://reactjs.org";
  let ob = { name: "nguyen dai", age: 10 }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {JSON.stringify(ob)}
        </p>
        <a
          className="App-link"
          href={link}
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
