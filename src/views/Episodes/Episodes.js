import React, { Component } from 'react';
import api from '../../services/api'

export default class Episodes extends Component {

  state = {
    episodes: [],
    meta: {}
  }

  async componentDidMount() {
    try {
      const response = await api.get('episodes/')
      this.setState({
        episodes: response.data.slice(0, 8),
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
      <div className="component-episodes">
        <div className="container">
          <div className="episodes">
            <div className="content">
              <div className="title">
                <h1>Episodios</h1>
              </div>
              <div className="box-episodes">
                {this.state.episodes.map(episode => (
                  <div className="episode">
                    <div className="col-name">
                      <h2 className="name">{episode.title}</h2>
                      <span>Season: {episode.season} - </span>
                      <span>Episodio: {episode.episode}</span>
                    </div>
                    <div className="col-date">
                      <p>Data de estreia:</p>
                      <p>{episode.air_date}</p>
                    </div>
                    <div className="col-character">
                      <div className="name-c">Personagens: </div>
                      {episode.characters.map(item => (
                        <div className="name-c">{item}</div>
                      ))
                      }
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
            <nav>
              <ul className="pagination">
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