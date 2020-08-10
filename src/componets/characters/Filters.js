import React from 'react';

const Filters = () => (
  <div className="header-content" v-show="search == ''">
    <h1>Personagens</h1>
    <div className="box-filters">
      <span>Filtrar por:</span>
      <div className="filters">
        <div className="filter alive aliveActive" click="filterCharacter('Alive')">
          <span>Vivo</span>
        </div>
        <div className="filter deceased deceasedActive" click="filterCharacter('Deceased')">
          <span>Morto</span>
        </div>
        <div className="filter all allActive" click="filterCharacter('all')">
          <span>Todos</span>
        </div>
      </div>
    </div>
  </div>
);

export default Filters;
