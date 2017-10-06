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
  
    onAdd: function (author,book,year){
      const Book={author,book,year};
      const newLibrary=[];
      Object.assign(newLibrary,this.state.library);
      newLibrary.unshift(Book);
      this.setState({library:newLibrary});
    },
   
    onDelete:function(delIndex)
    {
      const newLibrary=[];
      Object.assign(newLibrary,this.state.library);
      newLibrary.splice(delIndex,1); 
      this.setState({library:newLibrary});
    },
  
    onSave: function(updIndex){
        var newState = Object.assign (this.state);
        newState.articleEdit = this.state.library[updIndex];
        newState.articleEdit.index = updIndex;
       
        this.setState(newState);
    },
  
    onUpdate: function(author,book,year,updIndex) {
      const newLibrary= this.state.library.map(function(item) {
        var tempItem = item;
        if (tempItem.index===updIndex) {
          tempItem.author = author;
          tempItem.book = book;
          tempItem.year = year;
        }
  
        return tempItem;
      });
  
      this.setState({library:newLibrary,articleEdit:null});
    },
  
    render: function() {
  
      return (
        <div className='app'>
          <Add onAdd={this.onAdd} onUpdate={this.onUpdate} articleEdit={this.state.articleEdit}/>
          <h3>Библиотека</h3>
          <Library data={this.state.library} onDelete={this.onDelete} onSave={this.onSave}/>
        </div>
      );
    }
  });


//Некоторый начальный набор книг в библиотеке
var books = [
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
  ];

  export default App;