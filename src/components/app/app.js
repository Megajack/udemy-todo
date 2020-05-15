import React from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

const App = () => {
  const todoData = [
    { label: 'drink coffee', important: false, id: 1 },
    { label: 'make awesome app', important: true, id: 2 },
    { label: 'have a lunch', important: false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div class="d-flex search-wrapper">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
}

export default App;
