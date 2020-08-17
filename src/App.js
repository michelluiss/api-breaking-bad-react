import React from 'react';
import Routes from './routes/routes'
import { BrowserRouter } from 'react-router-dom';
import HeaderApp from './componets/shared/headerApp';
import './App.sass';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderApp></HeaderApp>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
