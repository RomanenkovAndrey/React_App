import * as React from 'react';
import { Component } from 'react';
import { IBook, IActions } from '/SourceTree/ReactApp/src/interfaces';

interface IProps {
  index: number,
  item: IBook

  libraryActions:{
      deleteBook(delIndex: number): IActions;
      saveBook(updIndex: number): IActions;
    }
}

//формирование списка книг - по одной
export default class Article extends Component <IProps>{
  propTypes = {
    item: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      book: React.PropTypes.string.isRequired,
      year: React.PropTypes.string.isRequired
    })
  }
    onElementUpdateClickHandler=(e: any) =>{
      e.preventDefault();
      this.props.libraryActions.saveBook(this.props.index);
    }
  
    onButtonDeleteClickHandler=(e: any)=> {
      e.preventDefault();
      this.props.libraryActions.deleteBook(this.props.index);
    }

    render() {
      const { author, book, year } = this.props.item;
     
      return (
        <div className='article'>
          <p className='book__author'>{ author }:</p>
          <p className='book__text'>{ book }</p>
          <p className='book__year' >{ year } </p>

          <button className='del__btn'
            onClick = { this.onButtonDeleteClickHandler }
            >
              Удалить книгу 
           </button>

           <button className='upd__btn'
            onClick = { this.onElementUpdateClickHandler } 
            >
              Редактировать книгу
           </button>

        </div>
      );
    }
  }