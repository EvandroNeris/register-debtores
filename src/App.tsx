import React from 'react';
import { IElement } from './interfaces';
import Register from './views/register/register';


function App(): IElement {
  return (
    <div className="App">
      <Register></Register>
    </div>
  );
}

export default App;
