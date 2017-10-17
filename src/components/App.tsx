import * as React from 'react';
import { Component } from 'react';
import Add from './Add';
import Library from './Library';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Add/>
        <h3>Библиотека</h3>
        <Library />
      </div>
    );
  }
}