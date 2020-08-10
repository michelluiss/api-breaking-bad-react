import React from 'react'

const CharacterCard = ({ character }) => (
  <div className="card-character">
    <img src={character.img} alt="logo"/>
    <div className={character.status === 'Alive' ? 'status alive' : 'status deceased'}>{character.status}</div>
    <div className="box-info">
    <h2 className="name">{character.name}</h2>
    <div className="birthday">{character.birthday}</div>
    <p className="occupation">{character.occupation}</p>
    </div>
  </div>
)

export default CharacterCard;