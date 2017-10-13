import { Component} from 'react'
import * as libraryActions from '../actions/LibraryActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//добавление и редактирование книг
class Add extends Component{

    constructor(props:any){
      super(props);

      this.state = this.getDefaultState();
    }

    getDefaultState = () => {
      return {
        agreeNotChecked: true,
        authorIsEmpty: true,
        bookIsEmpty: true,
        yearIsEmpty: true,
  
        author:'',
        book: '',
        year:''
      };
    }

    componentWillReceiveProps = (nextProps:any) =>{
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
    };

    //обработчик добавления книги
    onBtnAddClickHandler = (e)=> {
      e.preventDefault();
     
      const {author, book, year} = this.state; //как вынести в глобальную область
      this.props.libraryActions.addBook(author, book, year); 

      this.setState(
          this.getDefaultState()
        );
    }
    
    //обработчик редактирования книги
    onButtonUpdateClickHandler = (e) =>{
        e.preventDefault();

        const {author, book, year, index} = this.state;
        this.props.libraryActions.updateBook(author, book, year, index);
        
        this.setState(
          this.getDefaultState()
      );
    }

    //при нажатии на чекбокс на нём появляется/исчезает "галочка"
    onCheckRuleClick= ()=> {
      this.setState({agreeNotChecked: !this.state.agreeNotChecked});
    }
  
    //это изменение состояния value в input и проверка на пустоту (для валидации кнопки)
    onChangeHandler = (e) =>{
        const id = e.target.id;
        const value = e.target.value;
        const isEmpty = (e.target.value.trim().length > 0); //правильное название - notIsEmpty
        this.setState({[id]:value, [id +'IsEmpty']:!isEmpty});
    }
  
    render() {

      const {agreeNotChecked, authorIsEmpty, bookIsEmpty, yearIsEmpty, author, book, year} = this.state;
    //валидация кнопок "добавить" и "редактировать"
      const notAllChecked = (agreeNotChecked || authorIsEmpty || bookIsEmpty || yearIsEmpty); 
      let articleEdit = this.props.articleEdit;
  
      return (
        <div className='add cf'>
          <input
            type='text'
            className='add__author'
            id = 'author'
            value = {author} 
            onChange = {this.onChangeHandler}
            placeholder='Имя автора'
            autoFocus
          />
  
          <input
            type='text'
            className='add__book'
            id = 'book'
            value = {book}
            onChange = {this.onChangeHandler} 
            placeholder='Название книги'
          ></input>
  
          <input
            type='text'
            className='add__year'
            id = 'year'
            value = {year}
            onChange = {this.onChangeHandler}
            placeholder = 'Год издания книги'
          ></input>
  
          <label className='add__checkrule'>
            <input type='checkbox' checked = {!agreeNotChecked} //checked и agreeNotChecked противоположны
            onChange={this.onCheckRuleClick}/>Я согласен с правилами сайта
          </label>
  
      {
        //тернарный оператор
        (articleEdit === null)?
         (
          <button
            className ='add__btn'
            onClick = {this.onBtnAddClickHandler}
            disabled = {notAllChecked}
            >
            Добавить книгу
          </button>)
  
        :(
          <button
            className ='upd__btn'
            onClick = {this.onButtonUpdateClickHandler}
            disabled = {notAllChecked}
            >
            Редактировать книгу
          </button>)
      }
  
        </div>
      );
    }
  }
  
  function mapStateToProps (state) {
    return {
      articleEdit: state.articleEdit
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      libraryActions: bindActionCreators(libraryActions, dispatch)
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Add);