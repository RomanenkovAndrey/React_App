const initialState = {
    data:[{
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
    }]
  };
  
  export default function libraryState(state = initialState, action) {

    switch(action.type){
      case 'ADD_BOOK':{
        return {...state, book_add:action.payload} ; break;
      }
      case 'DELETE_BOOK':{
        return {...state, book_del:action.payload} ; break;
      }
      case 'UPDATE_BOOK':{
        return {...state, book_upd:action.payload} ; break;
      }

    default:
      return state;
    }
  }