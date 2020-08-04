import React from 'react';
import Routes from './routes'
import HeaderApp from './componets/shared/headerApp';
import './App.sass';

function App() {
  return (
    <div className="App">
      <HeaderApp></HeaderApp>
      <Routes />
    </div>
  );
}

export default App;
