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

      case 'ADD_BOOK':{
        const newState  = Object.assign({},state);
        var arr = [].concat(newState.data); //должны скопировать массив
        arr.unshift (action.payload);
        newState.data = arr;
        return newState;
      }

      case 'DELETE_BOOK':{
        const newState  = Object.assign({},state);
        var arr2 = [].concat(newState.data);
        arr2.splice(action.payload, 1); //удаляем один элемент с позиции delIndex
        newState.data = arr2;
        return newState;
      }

      case 'SAVE_BOOK':{
        const newState = Object.assign({},state); 
        var obj = Object.assign({},state.data[action.payload]);
        //нужно скопировать obj в articleEdit
        newState.articleEdit = obj; //запоминаем книгу, которую будем редактировать
        newState.articleEdit.index = action.payload;
        return newState;
      }

      case 'UPDATE_BOOK':{
        const newState  = Object.assign({},state);
        var arr3 = [].concat(newState.data);
        var counter = 0; //для того, чтобы когда совпадёт индекс нужной книги, заменить его
        newState.data = arr3.map(function(item){
          var tempItem = item;
          if (counter == action.payload.updIndex) { //редактируем нужную книгу
            tempItem.author = action.payload.author;
            tempItem.book = action.payload.book;
            tempItem.year = action.payload.year;
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