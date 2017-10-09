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
  
    // Нам теперь не нужно передавать ArticleEdit
    componentWillReceiveProps: function(nextProps) {
       if ( nextProps.articleEdit ) 
        this.setState({ 
          author: nextProps.articleEdit.author,
          book: nextProps.articleEdit.book,
          year: nextProps.articleEdit.year,
          index: nextProps.articleEdit.index,
  
          authorIsEmpty: false, //форма теперь будет непустой
          bookIsEmpty: false,
          yearIsEmpty: false
        });
    },

    //обработчик добавления книги
    onBtnAddClickHandler: function(e) {
      e.preventDefault();
     
      this.props.onAdd(this.state.author, this.state.book, this.state.year);

      this.setState({authorIsEmpty:true,bookIsEmpty:true,yearIsEmpty:true,
        agreeNotChecked:true, author:'', book:'', year:''});
    },
    
    //обработчик редактирования книги
    onBtnUpdClickHandler: function(e){
        e.preventDefault();
  
        this.props.onUpdate(this.state.author, this.state.book, this.state.year, this.state.index);
        
        this.setState({authorIsEmpty:true,bookIsEmpty:true,yearIsEmpty:true,
          agreeNotChecked:true, author:'', book:'', year:''});
    },
  
    onAdd: function (author,book,year){
      const Book = {author,book,year};
      const newLibrary=[];
      Object.assign(newLibrary,this.state.library);
      newLibrary.unshift(Book);
      this.setState({library:newLibrary});
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

    //при нажатии на чекбокс на нём появляется/исчезает "галочка"
    onCheckRuleClick: function() {
      this.setState({agreeNotChecked: !this.state.agreeNotChecked});
    },
  
    //это изменение состояния value в input и проверка на пустоту (для валидации кнопки)
    onChangeHandler: function(e){
        const id = e.target.id;
        const value = e.target.value;
        const isEmpty = (e.target.value.trim().length > 0); //правильное название - notIsEmpty
        this.setState({[id]:value, [id +'IsEmpty']:!isEmpty});
    },
  
    render: function() {

    //валидация кнопок "добавить" и "редактировать"
      const notAllChecked = (this.state.agreeNotChecked || this.state.authorIsEmpty || 
        this.state.bookIsEmpty || this.state.yearIsEmpty)?true:false;
  
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
            type='text'
            className='add__book'
            id = 'book'
            value={this.state.book}
            onChange={this.onChangeHandler} 
            placeholder='Название книги'
          ></input>
  
          <input
            type='text'
            className='add__year'
            id = 'year'
            value={this.state.year}
            onChange = {this.onChangeHandler}
            placeholder = 'Год издания книги'
          ></input>
  
          <label className='add__checkrule'>
            <input type='checkbox' checked = {!this.state.agreeNotChecked} //checked и agreeNotChecked противоположны
            onChange={this.onCheckRuleClick}/>Я согласен с правилами сайта
          </label>
  
      {
        !this.props.articleEdit && (
          <button
            className ='add__btn'
            onClick = {this.onBtnAddClickHandler}
            disabled = {notAllChecked}
            >
            Добавить книгу
          </button>)
      }
  
      {
        this.props.articleEdit && (
          <button
            className ='upd__btn'
            onClick = {this.onBtnUpdClickHandler}
            disabled = {notAllChecked}
            >
            Редактировать книгу
          </button>)
      }
  
        </div>
      );
    }
  });

  export default Add;