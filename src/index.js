import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {
  const todoData = [
    { label: 'drink coffee', important: false },
    { label: 'make awesome app', important: true },
    { label: 'have a lunch', important: false }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));
