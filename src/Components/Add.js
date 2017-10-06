import React from 'react'

//добавление и редактирование книг
var Add = React.createClass({
    getInitialState: function() {
      return ({ //add constructor 
        agreeNotChecked: true,
        authorIsEmpty: true,
        bookIsEmpty: true,
        yearIsEmpty: true,
  
        author:'',
        book: '',
        year:''
      });
    },
  
    componentWillReceiveProps: function(nextProps) {
       if ( nextProps.articleEdit )
        this.setState({
          author: nextProps.articleEdit.author,
          book: nextProps.articleEdit.book,
          year: nextProps.articleEdit.year,
          index: nextProps.articleEdit.index,
  
          authorIsEmpty: false,
          bookIsEmpty: false,
          yearIsEmpty: false
        });
    },
  
    //обработчик добавления книги
    onBtnAddClickHandler: function(e) {
      e.preventDefault();
     
      this.props.onAdd(this.state.author, this.state.book,this.state.year);
      
      this.setState({authorIsEmpty:true,bookIsEmpty:true,yearIsEmpty:true, author:'', book:'', year:''});
    },
    
    onBtnUpdClickHandler: function(e){
        e.preventDefault();
  
        this.props.onUpdate(this.state.author, this.state.book, this.state.year, this.state.index);
  
        this.setState({authorIsEmpty:true,bookIsEmpty:true,yearIsEmpty:true, author:'', book:'', year:''});
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
        this.setState({[id]:value, [id +'IsEmpty']:!isEmpty});
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
            placeholder='Имя автора'
            autoFocus
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
            onChange = {this.onChangeHandler}
            placeholder = 'Год издания книги'
          ></input>
  
          <label className='add__checkrule'>
            <input type='checkbox' onChange={this.onCheckRuleClick}/>Я согласен с правилами сайта
          </label>
  
      {
        !this.props.articleEdit && (
          <button
            className='add__btn'
            onClick= {this.onBtnAddClickHandler}
            disabled = {agreeNotChecked || authorIsEmpty || bookIsEmpty || yearIsEmpty}
            >
            Добавить книгу
          </button>)
      }
  
      {
        this.props.articleEdit && (
          <button
            className ='upd__btn'
            onClick = {this.onBtnUpdClickHandler}
            disabled = {agreeNotChecked || authorIsEmpty || bookIsEmpty || yearIsEmpty}
            >
            Редактировать книгу
          </button>)
      }
  
        </div>
      );
    }
  });

  export default Add;