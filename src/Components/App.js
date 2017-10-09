import React from 'react'
import Add from './Add.js'
import Library from './Library.js'

//само приложение
const App = React.createClass({
    getInitialState: function() {
      return {
        library: books,
        articleEdit:null
      };
    },
  
    //Теперь сохранение данных не нужно вообще
   /* onSave: function(updIndex){
        var newState = Object.assign (this.state);
        newState.articleEdit = this.state.library[updIndex];
        newState.articleEdit.index = updIndex;
       
        this.setState(newState);
    },*/
  
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


//Некоторый начальный набор книг в библиотеке
/*var books = [
    {
      author: 'Замятин',
      book: 'Мы',
      year:'1986'
    },
    {
      author: 'Толкиен',
      book: 'Властелин колец',
      year:'1996'
    },
    {
      author: 'Чак Паланик',
      book: 'Бойцовский клуб',
      year:'2006'
    }
  ];*/