import React from 'react'
import * as libraryActions from '../actions/LibraryActions'

//формирование списка книг - по одной
var Article = React.createClass({
    propTypes: {
      data: React.PropTypes.shape({
        author: React.PropTypes.string.isRequired,
        book: React.PropTypes.string.isRequired,
        year: React.PropTypes.string.isRequired
      }) 
    },
  
    onElemUpdClickHandler: function(e){
      e.preventDefault();
      this.props.saveBook(this.props.index);
    },
  

    onBtnDelClickHandler: function(e) {
      e.preventDefault();
      this.props.deleteBook(this.props.index);
    },

    render: function() {

      const { author, book, year } = this.props.item;
     
      return (
        <div className='article'>
          <p className='book__author'>{ author }:</p>
          <p className='book__text'>{ book }</p>
          <p className='book__year' >{ year } </p>
         
          <button className='del__btn'
            onClick = { this.onBtnDelClickHandler }
            >
           Удалить книгу </button>

           <button className='upd__btn'
            onClick = { this.onElemUpdClickHandler }
            >
           Редактировать книгу </button>

        </div>
      );
    }
  });
  
  export default Article;