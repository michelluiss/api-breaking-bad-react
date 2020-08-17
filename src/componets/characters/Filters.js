import React from 'react';

const Filters = ({ aplyFilter, activeFilter }) => (
  <div className="header-content" v-show="search == ''">
    <h1>Personagens</h1>
    <div className="box-filters">
      <span>Filtrar por:</span>
      <div className="filters">
        <div className={activeFilter === 'Alive' ? 'filter alive active' : 'filter alive'} onClick={() => aplyFilter('Alive')}>
          <span>Vivo</span>
        </div>
        <div className={activeFilter === 'Deceased' ? 'filter deceased active' : 'filter deceased'} onClick={() => aplyFilter('Deceased')}>
          <span>Morto</span>
        </div>
        <div className={activeFilter === 'all' ? 'filter all active' : 'filter all'} onClick={() => aplyFilter('all')}>
          <span>Todos</span>
        </div>
      </div>
    </div>
  </div>
);

export default Filters;
