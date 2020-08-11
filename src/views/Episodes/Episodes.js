import React, { Component } from 'react';
import api from '../../services/api';
import EpisodeCard from '../../componets/episodes/EpisodeCard'
import InfiniteScroll from 'react-infinite-scroll-component';

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
        totalEpisodes: response.data,
        meta: {
          currentPage: 1
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  loadEpisodes = () => {
    const offset = (this.state.meta.currentPage) * 8
    this.setState({
      episodes: [...this.state.episodes, ...this.state.totalEpisodes.slice(offset, offset + 8)],
      meta: {
        currentPage: this.state.meta.currentPage + 1
      }
    })
  };

  render() {
    return(
      <div className="component-episodes">
        <div className="container">
          <div className="episodes">
            <div className="content">
              <div className="title">
                <h1>Episódios</h1>
              </div>
              <div className="box-episodes">
                <InfiniteScroll
                  dataLength={this.state.episodes.length}
                  next={this.loadEpisodes}
                  hasMore={true}
                >
                  {this.state.episodes.map((episode, idx) => (
                    <EpisodeCard episode={episode} key={idx}></EpisodeCard>
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