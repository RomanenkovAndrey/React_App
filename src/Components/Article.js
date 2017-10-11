import React from 'react'


//мы убрали отсюда коннект к Redux
//формирование списка книг - по одной
var Article = React.createClass({
    propTypes: {
      data: React.PropTypes.shape({
        author: React.PropTypes.string.isRequired,
        book: React.PropTypes.string.isRequired,
        year: React.PropTypes.string.isRequired
      }) 
    },
  
    onElementUpdateClickHandler: function(e){
      e.preventDefault();
      this.props.libraryActions.saveBook(this.props.index);
    },
  

    onButtonDeleteClickHandler: function(e) {
      e.preventDefault();
      this.props.libraryActions.deleteBook(this.props.index);
    },

    render: function() {
      const { author, book, year } = this.props.item;
     
      return (
        <div className='article'>
          <p className='book__author'>{ author }:</p>
          <p className='book__text'>{ book }</p>
          <p className='book__year' >{ year } </p>
         
          <button className='del__btn'
            onClick = { this.onButtonDeleteClickHandler }
            >
           Удалить книгу </button>

           <button className='upd__btn'
            onClick = { this.onElementUpdateClickHandler } 
            >
           Редактировать книгу </button>

        </div>
      );
    }
  });


  export default Article;