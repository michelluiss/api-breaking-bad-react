import React, { Component } from 'react';
import api from '../../services/api';
import EpisodeCard from '../../componets/episodes/EpisodeCard'
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default class Episodes extends Component {

  state = {
    episodes: [],
    meta: {},
    loading: true
  }

  async componentDidMount() {
    try {
      const response = await api.get('episodes/')
      this.setState({
        episodes: response.data.slice(0, 8),
        totalEpisodes: response.data,
        meta: {
          currentPage: 1
        },
        loading: false
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
                <div className="skeleton">
                  <Loading isLoading={this.state.loading} />
                </div>
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

function Loading(props) {
  if (props.isLoading) {
    return (
      <SkeletonTheme color="#202020" highlightColor="#444">
        <div className="episode">
          <div className="col-name">
            <h2 className="name"><Skeleton count={1} width={200} height={30} /></h2>
            <Skeleton count={1} width={100} height={15} />
          </div>
          <div className="col-date">
            <Skeleton count={1} width={100} height={15} />
          </div>
          <div className="col-character">
            <Skeleton count={3} width={250} height={15} />
          </div>
        </div>
      </SkeletonTheme>
    )
  } else return ''
}
