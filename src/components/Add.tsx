import * as React from 'react';
import { Component } from 'react';
import * as libraryActions from '../actions/LibraryActions';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { IBook, IActions } from '../interfaces';

interface IProps {
  articleEdit?: IBook;
}

interface IDispatchProps {
  libraryActions: {
    addBook(author: string, book: string, year: string): IActions;
    updateBook(author: string, book: string, year: string, updIndex?: number): IActions
  };
}

interface IState {
  data: IBook;
  isFull: boolean;
  agreeNotChecked: boolean;
  articleEdit?: IBook;
}

// добавление и редактирование книг
class Add extends Component<IProps & IDispatchProps, IState> {

    constructor(props: IProps & IDispatchProps) {
      super(props);
      this.state = this.getDefaultState();
    }

    getDefaultState = () => {
      return {
        isFull: false,
        agreeNotChecked: true,
        data: {author: '', book: '', year: ''} 
      };
    }

    componentWillReceiveProps (nextProps: IProps) {
       if (nextProps.articleEdit) 
        this.setState({ 
          data: nextProps.articleEdit,
          isFull: false
        });
    }

    onBtnAddClickHandler = (e: any) => {
      e.preventDefault();
     
      const {author, book, year} = this.state.data;
      this.props.libraryActions.addBook(author, book, year); 

      this.setState(
          this.getDefaultState()
        );
    }
    
    onButtonUpdateClickHandler = (e: any) => {
        e.preventDefault();

        const {author, book, year, index} = this.state.data;
        this.props.libraryActions.updateBook(author, book, year, index);
        
        this.setState(
          this.getDefaultState()
      );
    }

    onCheckRuleClick= () => {
      this.setState({agreeNotChecked: !this.state.agreeNotChecked});
    }
  
    onChangeHandler = (e: any) => {
        const id = e.target.id;
        const value = e.target.value.trim();

        let tempItem;

        switch (id) {
          case 'author': {
          tempItem = {
            author: value
          }; 
          break;
        }

          case 'book': {
          tempItem = {
            book: value
          }; 
          break;
        }

          case 'year': {
          tempItem = {
            year: value
          }; 
          break;
        }
      }
        
        this.setState({
          data: {
            ...this.state.data,
            ...tempItem
          }
        });
    }
  
    render() {

      const {agreeNotChecked, data} = this.state;
      const {author, book, year} = data;

      const articleEdit = this.props.articleEdit;

      const isFull = !!author.length && !!book.length && !!year.length;
      const notAllChecked = !isFull || agreeNotChecked;
      
      return (
        <div className="add cf">
          <input
            type="text"
            className="add__author"
            id="author"
            value={author} 
            onChange={this.onChangeHandler}
            placeholder="Имя автора"
            autoFocus
          />
  
          <input
            type="text"
            className="add__book"
            id="book"
            value={book}
            onChange={this.onChangeHandler} 
            placeholder="Название книги"
          />
  
          <input
            type="text"
            className="add__year"
            id="year"
            value={year}
            onChange={this.onChangeHandler}
            placeholder="Год издания книги"
          />
  
          <label className="add__checkrule">
            <input 
              type="checkbox" 
              checked={!agreeNotChecked} 
              onChange={this.onCheckRuleClick}
            />
            Я согласен с правилами сайта
          </label>
  
      {

        (articleEdit === undefined) ?
         (
          <button
            className="add__btn"
            onClick={this.onBtnAddClickHandler}
            disabled={notAllChecked}
          >
            Добавить книгу
          </button>)
  
        : (
          <button
            className="change__button"
            onClick={this.onButtonUpdateClickHandler}
            disabled={notAllChecked}
          >
            Редактировать книгу
          </button>)
      }
  
        </div>
      );
    }
  }
  
  function mapStateToProps (state: IState): IProps {
    return {
      articleEdit: state.articleEdit
    };
  }

  function mapDispatchToProps(dispatch: Dispatch <IState>): IDispatchProps {
    return {
      libraryActions: bindActionCreators<any>(libraryActions, dispatch)
    };
  }

  export default connect<IProps, IDispatchProps, void>(mapStateToProps, mapDispatchToProps)(Add);