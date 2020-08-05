import React, { Component } from 'react';

export default class Episodes extends Component {
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
                <div className="episode" v-for="( character, index ) in episodeList" key="index">
                  <div className="col-name">
                    <h2 className="name">character</h2>
                    <span>Season: character season - </span>
                    <span>Episodio: character episode</span>
                  </div>
                  <div className="col-date">
                    <p>Data de estreia:</p>
                    <p>character air_date</p>
                  </div>
                  <div className="col-character">
                    <div className="name-c">Personagens:</div>
                    <div className="name-c">item</div>
                  </div>
                </div>
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