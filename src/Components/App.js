import React from 'react'
import Add from './Add.js'
import Library from './Library.js'

const App = React.createClass({
    getInitialState: function() {
      return {
        articleEdit:null
      };
    },
  
    render: function() {
  
      // onAdd={this.onAdd} onUpdate={this.onUpdate} articleEdit={this.state.articleEdit} для Add
      // data={this.state.library} onDelete={this.onDelete} onSave={this.onSave} для Library

      return (
        <div className='app'>
          <Add/>
          <h3>Библиотека</h3>
          <Library/>
        </div>
      );
    }
  });

  export default App;