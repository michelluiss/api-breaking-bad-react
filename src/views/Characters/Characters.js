import React, { Component } from 'react';
import CharacterImage from '../../assets/images/personagens/walter-white-lg.jpg'

export default class Characters extends Component {
  render() {
    return(
      <div className="component-characters">
        <div className="container">
          <div className="character">
            <div className="header-content" v-show="search == ''">
              <h1>Personagens</h1>
              <div className="box-filters">
                <span>Filtrar por:</span>
                <div className="filters">
                  <div className="filter alive aliveActive" click="filterCharacter('Alive')">
                    <span>Vivo</span>
                  </div>
                  <div className="filter deceased deceasedActive" click="filterCharacter('Deceased')">
                    <span>Morto</span>
                  </div>
                  <div className="filter all allActive" click="filterCharacter('all')">
                    <span>Todos</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="searching" v-show="search != ''"><h3>Você pesquisou por "search"</h3></div>
            <div className="content">
              <div className="box-characters">
                <div className="card-character" v-for="( character, idx) in filteredList" key="idx">
                  <img src={CharacterImage} alt="logo"/>
                  <div className="status alive">Alive</div>
                  <div className="box-info">
                    <h2 className="name">character name</h2>
                    <div className="birthday">character birthday</div>
                    <p className="occupation">character occupation</p>
                  </div>
                </div>
              </div>
            </div>
            <nav>
              <ul className="pagination" v-show="charactersList.length == 8">
                <li className="page-item pageActive" v-for="( page, idx ) in paginationCount" key="idx" click="pagination(page)">
                  <span className="page-link">page</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}