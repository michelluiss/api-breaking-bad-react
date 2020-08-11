import React from 'react';

const EpisodeCard = ({ episode }) => (
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
      {episode.characters.map((item, idx) => (
        <div className="name-c" key={idx}>{item}</div>
      ))}
    </div>
  </div>
)

export default EpisodeCard;