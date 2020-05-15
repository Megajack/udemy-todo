import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={ classNames }>
        <span className="todo-list-item-label" onClick={ onToggleDone }>{ label }</span>
        <button type="button" onClick={ onToggleImportant } className="btn btn-outline-success btn-sm">
          !
        </button>
        <button type="button" onClick={ onDeleted } className="btn btn-outline-danger btn-sm">
          del
        </button>
      </span>
    );
  };
}
