import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  render() {
    return (
      <div className="item-add-form d-flex">
        <input type="text" placeholder="add new item" />
        <button type="button" onClick={() => this.props.onItemAdded('hello') } className="btn btn-outline-info btn-sm">Add</button>
      </div>
    );
  };
};
