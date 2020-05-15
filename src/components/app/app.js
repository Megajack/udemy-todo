import React, {Component} from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      { label: 'drink coffee', important: false, id: 1 },
      { label: 'make awesome app', important: true, id: 2 },
      { label: 'have a lunch', important: false, id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      // todoData.splice(idx, 1); never do like this, because it's direct changing state
      // [a, b, c, d, e]
      // [a, b,    d, e]

      // const before = todoData.slice(0, idx);
      // const after = todoData.slice(idx + 1);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      }
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      }
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="d-flex search-wrapper">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList onDeleted={ this.deleteItem } todos={ this.state.todoData } />
        <ItemAddForm onItemAdded={ this.addItem } />
      </div>
    );
  }
};
