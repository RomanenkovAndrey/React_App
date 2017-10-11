import React, { Component } from 'react'
import Add from './Add.js'
import Library from './Library.js'


export default class App extends Component{
    constructor(props)
    {
      super(props);//?
      this.state = {articleEdit: null}; //унаследовались от компоненты, появилось поле state
    }

  render(){
    return (
      <div className='app'>
        <Add/>
        <h3>Библиотека</h3>
        <Library/>
      </div>
    )
  }
}

/*
const App = React.createClass({
    getInitialState: function() {
      return {
        articleEdit:null
      };
    },
  
    render: function() {

      return (
        <div className='app'>
          <Add/>
          <h3>Библиотека</h3>
          <Library/>
        </div>
      );
    }
  });

  export default App;*/