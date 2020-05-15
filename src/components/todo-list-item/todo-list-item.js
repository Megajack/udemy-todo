import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    done: false
  }

  onLabelClick= () => {
    this.setState({
      done: true
    });
  }

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'noraml'
    };

    return (
      <span className={ classNames }>
        <span className="todo-list-item-label" onClick={ this.onLabelClick } style={ style }>{ label }</span>
        <button type="button" className="btn btn-outline-success btn-sm">
          !
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm">
          del
        </button>
      </span>
    );
  };
}
