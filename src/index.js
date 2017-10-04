import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'

import './css/style.css';

//Некоторый начальный набор книг
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

//формирование списка книг - по одной
var Article = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      book: React.PropTypes.string.isRequired,
      year: React.PropTypes.string.isRequired
    }) 
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
      </div>
    )
  }
});

var Library = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  render: function() {
    var data = this.props.data;
    var libraryTemplate;

    if (data.length > 0) {
      libraryTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        )
      })
    } else {
      libraryTemplate = <p>Ни одна книга ещё не добавлена</p>
    }

    return (
      <div className='book'>
        {libraryTemplate}
      </div>
    );
  }
});

//добавление книг
var Add = React.createClass({
  getInitialState: function() {
    return {
      agreeNotChecked: true,
      authorIsEmpty: true,
      bookIsEmpty: true
    };
  },
  componentDidMount: function() {
    ReactDOM.findDOMNode(this.refs.author).focus();
  },
  onBtnClickHandler: function(e) {
    e.preventDefault();
    var book = ReactDOM.findDOMNode(this.refs.book).value;
    var author = ReactDOM.findDOMNode(this.refs.author).value;

    var item = [{
      author: author,
      book: book
    }];

    book= '';
    this.setState({bookIsEmpty: true});

    author = '';
    this.setState({authorIsEmpty: true});
  },
  
  //отмечаем, что чекбокс включен/выключен
  onCheckRuleClick: function(e) {
    this.setState({agreeNotChecked: !this.state.agreeNotChecked});
  },

  //каждое из полей инпута заполнено и не состоит из одних только пробелов/переносов каретки, либо пусто
  onFieldChange: function(fieldName, e) {
    if (e.target.value.trim().length > 0) {
      this.setState({[''+fieldName]:false})
    } else {
      this.setState({[''+fieldName]:true})
    }
  },
  render: function() {
    var agreeNotChecked = this.state.agreeNotChecked,
        authorIsEmpty = this.state.authorIsEmpty,
        bookIsEmpty = this.state.bookIsEmpty;
    return (
      <form className='add cf'>
        <input
          type='text'
          className='add__author'
          onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
          placeholder='Имя автора'
          ref='author'
        />

        <input
          className='add__book'
          onChange={this.onFieldChange.bind(this, 'bookIsEmpty')}
          placeholder='Название книги'
          ref='book'
        ></input>

        <label className='add__checkrule'>
          <input type='checkbox' ref='checkrule' onChange={this.onCheckRuleClick}/>Я согласен с правилами сайта
        </label>

        <button
          className='add__btn'
          onClick={this.onBtnClickHandler}
          ref='alert_button'
          disabled={agreeNotChecked || authorIsEmpty || bookIsEmpty}
          >
          Отобразить книгу
        </button>
      </form>
    );
  }
});

//само приложение
var App = React.createClass({
  getInitialState: function() {
    return {
      library: books
    };
  },
 
  render: function() {
    return (
      <div className='app'>
        <Add />
        <h3>Библиотека</h3>
        <Library data={this.state.library} />
      </div>
    );
  }
});

//отрисовка всего приложения
render(
  <App />,
  document.getElementById('root')
);