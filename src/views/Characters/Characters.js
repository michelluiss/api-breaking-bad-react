import React, { Component } from 'react';
import Filters from '../../componets/characters/Filters'
import api from '../../services/api'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Characters extends Component {

  state = {
    characters: [],
    meta: {}
  }

  async componentDidMount() {
    try {
      const response = await api.get('characters/?limit=8&offset=0')
      this.setState({
        characters: response.data,
        meta: {
          currentPage: 1,
          nextPage: 2
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  fetchMoreData = async () => {
    try {
      const offset = (this.state.meta.currentPage) * 8
      const response = await api.get(`characters/?limit=8&offset=${offset}`)
      this.setState({
        characters: [...this.state.characters, ...response.data],
        meta: {
          currentPage: this.state.meta.currentPage + 1,
          nextPage: this.state.meta.currentPage + 1
        }
      })
    } catch (error) {
      console.log(error)
    }
  };

  render() {
    return(
      <div className="component-characters">
        <div className="container">
          <div className="character">
            <Filters></Filters>
            <div className="searching" v-show="search != ''"><h3>Você pesquisou por "search"</h3></div>
            <div className="content">
              <div className="box-characters" >
                <InfiniteScroll
                  dataLength={this.state.characters.length}
                  next={this.fetchMoreData}
                  hasMore={true}
                >
                  {this.state.characters.map((character, idx) => (
                      <div className="card-character" key={idx}>
                        <img src={character.img} alt="logo"/>
                        <div className={character.status === 'Alive' ? 'status alive' : 'status deceased'}>{character.status}</div>
                        <div className="box-info">
                          <h2 className="name">{character.name}</h2>
                          <div className="birthday">{character.birthday}</div>
                          <p className="occupation">{character.occupation}</p>
                        </div>
                      </div>
                  ))}
                </InfiniteScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}