import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Title, TitleSmall } from "./styles";

function App() {
  return (
    <div className="App">
      <Title fontSize={20}>
        Hello World
        <span>texto menor</span>
      </Title>
      <TitleSmall>Small</TitleSmall>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
