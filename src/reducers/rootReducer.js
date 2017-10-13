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
    }],

    articleEdit:null
  };
  
  export default function libraryState(state = initialState, action) {

    switch(action.type){

      case 'ADD_BOOK': {
        const newState  = {...state};
        let arr = [...newState.data]; 
        arr.unshift (action.payload);
        newState.data = arr;
        return newState;
      }

      case 'DELETE_BOOK':{
        const newState  = {...state};
        let arr = [...newState.data];
        arr.splice(action.payload, 1); //удаляем один элемент с позиции delIndex
        newState.data = arr;
        return newState;
      }

      case 'SAVE_BOOK':{
        const newState = {...state}; 
        let obj = {...state.data[action.payload]};
        //нужно скопировать obj в articleEdit
        newState.articleEdit = obj; //запоминаем книгу, которую будем редактировать
        newState.articleEdit.index = action.payload;
        return newState;
      }

      case 'UPDATE_BOOK':{
        const newState  = {...state};
        let arr = [...newState.data];
        let counter = 0; //для того, чтобы когда совпадёт индекс нужной книги, заменить его
        newState.data = arr.map(function(item){
          let tempItem = item;
          if (counter === action.payload.updIndex) { //редактируем нужную книгу
            tempItem = action.payload;
          }
          counter++;
          return tempItem;
        });

        newState.articleEdit = null;
        return newState;
      }

    default:
      return state;
    }
  }