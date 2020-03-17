import React from 'react';
import logo from "./logo512.png"
import './App.css';
import Services from "./components/Services"
import NavBar from "./components/Nav"
import About from "./components/About"

function App() {
  return (
    <div className="App">

      <NavBar/>

      <About/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <p>
          Hearts <code>and</code> Hands
        </p>
   
        <p>
         Postpartum Doula Services
        </p>

      </header>

        <Services />
    </div>
  );
}

export default App;
