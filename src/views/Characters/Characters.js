import React, { Component } from 'react';
import Filters from '../../componets/characters/Filters'
import api from '../../services/api'
import CharacterImage from '../../assets/images/personagens/walter-white-lg.jpg'

export default class Characters extends Component {

  state = {
    characters: []
  }

  async componentDidMount() {
    try {
      const response = await api.get('characters/?limit=10&offset=10')
      this.setState({
        characters: [...this.state.characters, response.data]
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return(
      <div className="component-characters">
        <div className="container">
          <div className="character">
            <Filters></Filters>
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