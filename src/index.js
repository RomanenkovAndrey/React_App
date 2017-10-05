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

  onBtnDelClickHandler: function(e) {
    e.preventDefault();//дописать - обработчик кнопки удаления книги
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
       
        <button className='del_btn'
          onClick={this.onBtnDelClickHandler}
          ref='del_button'
          >
         Удалить книгу </button>
      </div>
    )
  }
});

const Library = React.createClass({
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
    return ({ //add constructor 
      agreeNotChecked: true,
      authorIsEmpty: true,
      bookIsEmpty: true,
      yearIsEmpty: true,

      author:this.props.author,
      book: this.props.book,
      year:this.props.year,

      onBtnAddClickHandler: this.onBtnAddClickHandler.bind(this)
    });
  },

  //constructor+props

  //фокус на компоненте с именем thisInput при рендере
  componentDidMount: function() {
    this.nameInput.focus();
  },


  //обработчик добавления книги
  onBtnAddClickHandler: function(e) {
    e.preventDefault();
    //получить значения из input, передать их наверх родителю, родитель должен их отдать в Library
    
    this.props.onAdd(this.state.author, this.state.book,this.state.year);
    
    this.setState({authorIsEmpty:true,bookIsEmpty:true,yearIsEmpty:true});
  },
  
  //отмечаем, что чекбокс включен/выключен
  onCheckRuleClick: function() {
    this.setState({agreeNotChecked: !this.state.agreeNotChecked});
  },

  //это изменение состояния value в input и проверка на пустоту (для валидации кнопки)
  onChangeHandler: function(e){
      const id = e.target.id;
      const value = e.target.value;
      const isEmpty = (e.target.value.trim().length > 0);
      this.setState({[id]:value, [id +'IsEmpty']:isEmpty});
  },

  render: function() {
    const agreeNotChecked = this.state.agreeNotChecked,
        authorIsEmpty = this.state.authorIsEmpty,
        bookIsEmpty = this.state.bookIsEmpty,
        yearIsEmpty = this.state.yearIsEmpty;

    return (
      <div className='add cf'>
        <input
          type='text'
          className='add__author'
          id = 'author'
          value={this.state.author} 
          onChange={this.onChangeHandler}
          ref={(input) => { this.nameInput = input; }} // фокусируемся изначально на поле "Автор"
          placeholder='Имя автора'
        />

        <input
          className='add__book'
          id = 'book'
          value={this.state.book}
          onChange={this.onChangeHandler} 
          placeholder='Название книги'
        ></input>

        <input
          className='add__year'
          id = 'year'
          value={this.state.year}
          onChange={this.onChangeHandler}
          placeholder='Год издания книги'
        ></input>

        <label className='add__checkrule'>
          <input type='checkbox' onChange={this.onCheckRuleClick}/>Я согласен с правилами сайта
        </label>

        <button
          className='add__btn'
          onClick={this.onBtnAddClickHandler}
          disabled={agreeNotChecked || authorIsEmpty || bookIsEmpty || yearIsEmpty}
          >
          Добавить книгу
        </button>
      </div>
    );
  }
});

//само приложение
const App = React.createClass({
  getInitialState: function() {
    return {
      library: books
    };
  },

  onAdd: function ({author,book,year }){
    const Book={author,book,year};
    const new_library=[];
    Object.assign(new_library,this.state.library);

    new_library.push(Book);
    this.setState({library:new_library});
    //this.setState({library:[...state.library,book]});
  },
 

  render: function() {

    return (
      <div className='app'>
        <Add onAdd={this.onAdd}/>
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