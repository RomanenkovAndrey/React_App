import React from 'react'

//формирование списка книг - по одной
var Article = React.createClass({
    propTypes: {
      data: React.PropTypes.shape({
        author: React.PropTypes.string.isRequired,
        book: React.PropTypes.string.isRequired,
        year: React.PropTypes.string.isRequired
      }) 
    },
  
    onBtnDelClickHandler: function(e) {
      e.preventDefault();
      this.props.onDelete(this.props.index);
    },
  
    onElemUpdClickHandler: function(e){
      e.preventDefault();
      this.props.onSave(this.props.index);
    },
  
    render: function() {
      var author = this.props.data.author,
          book = this.props.data.book,
          year = this.props.data.year;
     
      return (
        <div className='article'>
          <p className='book__author'>{author}:</p>
          <p className='book__text'>{book}</p>
          <p className='book__year' >{year} </p>
         
          <button className='del__btn'
            onClick={this.onBtnDelClickHandler}
            >
           Удалить книгу </button>

           <button className='upd__btn'
            onClick={this.onElemUpdClickHandler}
            >
           Редактировать книгу </button>

        </div>
      )
    }
  });

  export default Article;