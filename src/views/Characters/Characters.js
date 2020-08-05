import React, { Component } from 'react';
import Filters from '../../componets/characters/Filters'
import api from '../../services/api'

export default class Characters extends Component {

  state = {
    characters: [],
    meta: {}
  }

  async componentDidMount() {
    try {
      const response = await api.get('characters/')
      this.setState({
        characters: response.data.slice(0, 8),
        meta: {
          currentPage: 1,
          nextPage: 2,
          total: response.data.length,
          paginationCount: Math.round(response.data.length / 8) + 1
        }
      })
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
                {this.state.characters.map(character => (
                  <div className="card-character">
                    <img src={character.img} alt="logo"/>
                    <div className={character.status === 'Alive' ? 'status alive' : 'status deceased'}>{character.status}</div>
                    <div className="box-info">
                      <h2 className="name">{character.name}</h2>
                      <div className="birthday">{character.birthday}</div>
                      <p className="occupation">{character.occupation}</p>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
            <nav>
              <ul className="pagination" v-show="charactersList.length == 8">
                <li className="page-item pageActive" v-for="( page, idx ) in paginationCount" click="pagination(page)">
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