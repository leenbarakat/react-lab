import logo from './logo.svg';
import './App.css';
import { React, Component } from "react";
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
);}
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main/>
        <Footer />
      </>
    )
  }
}

export default App;
