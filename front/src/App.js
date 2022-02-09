import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  

    const axios = require('axios')

    



    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Number of Visit : {axios.get('http://localhost:3000')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  })}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      User : Tom TEA 
      
      <p>
      Theme : Dockerize with Jenkins Pipeline
      </p>
      </header>
    </div>)
}

export default App;
