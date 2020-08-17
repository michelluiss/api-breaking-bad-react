import React from 'react';
import { Link } from 'react-router-dom'
import logoApp from '../../assets/images/breaking-bad-logo.png';

const HeaderApp = () => (
  <div className="component-header">
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logoApp} alt="logo"/>
        </div>
        <div className="menu">
          <ul className="nav">
            <li className="item-nav active">
              <Link to="/">Personagens</Link>
            </li>
            <li className="item-nav">
              <Link to="/episodes">Episódios</Link>
            </li>
            <li className="item-nav">
              Sugestão
              {/* <router-link to="{ name: 'suggestions' }">Sugestão</router-link> */}
            </li>
          </ul>
        </div>
        <div className="search">
          <form action="" method="get">
            <input type="text" name="characters" placeholder="Pesquise os personagens"/>
            <button className="submit"></button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderApp;
