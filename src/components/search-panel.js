import React from 'react';
import ItemStatusFilter from './item-status-filter';
import './search-panel.css';

const SearchPanel = () => {
  return (
    <div class="search-wrapper">
      <input type="search" placeholder="search" />
      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;
