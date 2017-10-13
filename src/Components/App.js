import React, { Component } from 'react'
import Add from './Add.js'
import Library from './Library.js'


export default class App extends Component{

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