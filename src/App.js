import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron'
import './App.sass';

import Routes from './routes/routes'
import { Provider } from 'react-redux'

import store from './store'


import HeaderApp from './componets/shared/headerApp';

console.tron.log('teste');

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <HeaderApp></HeaderApp>
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
