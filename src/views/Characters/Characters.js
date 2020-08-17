import React, { Component } from 'react';
import Filters from '../../componets/characters/Filters'
import api from '../../services/api'
import InfiniteScroll from 'react-infinite-scroll-component';
import CharacterCard from '../../componets/characters/CharacterCard'

export default class Characters extends Component {

  state = {
    characters: [],
    meta: {},
    hasMore: true,
    activeFilter: 'all'
  }

  async componentDidMount() {
    try {
      const response = await api.get('characters/?limit=8&offset=0')
      this.setState({
        characters: response.data,
        meta: {
          currentPage: 1
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  fetchCharacters = async (concatState = true) => {
    try {
      const offset = (this.state.meta.currentPage) * 8
      const response = await api.get(`characters/?limit=8&offset=${offset}`)
      this.setState({
        characters: concatState ? [...this.state.characters, ...response.data] : [...response.data],
        meta: {
          currentPage: this.state.meta.currentPage + 1
        }
      })
    } catch (error) {
      console.log(error)
    }
  };

  aplyFilter = async (filter) => {
    try {
      const response = await api.get(`characters/`)
      if (filter === 'all') {
        this.setState({ hasMore: true })
        this.fetchCharacters(false)
      } else {
        this.setState({
          characters: [...response.data.filter(item => { return item.status.toLowerCase() === filter.toLowerCase() })],
          meta: {
            currentPage: null
          },
          hasMore: false
        })
      }
      this.setState({ activeFilter: filter })
    } catch (error) {
      console.log(error)
    }
  };

  render() {
    return(
      <div className="component-characters">
        <div className="container">
          <div className="character">
            <Filters aplyFilter={this.aplyFilter} activeFilter={this.state.activeFilter}></Filters>
            <div className="searching" v-show="search != ''"><h3>Você pesquisou por "search"</h3></div>
            <div className="content">
              <div className="box-characters" >
                <InfiniteScroll
                  dataLength={this.state.characters.length}
                  next={this.fetchCharacters}
                  hasMore={this.state.hasMore}
                >
                  {this.state.characters.map((character, idx) => (
                    <CharacterCard character={character} key={idx}></CharacterCard>
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