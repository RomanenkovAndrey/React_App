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

      case 'ADD_BOOK':
        const newState  = Object.assign({},state);
        var arr = [].concat(newState.data); //должны скопировать массив
        arr.unshift (action.payload);
        newState.data = arr;
        return newState;

      case 'DELETE_BOOK':
        const newState  = Object.assign({},state);
        var arr2 = [].concat(newState.data);
        arr2.splice(action.payload, 1); //удаляем один элемент с позиции delIndex
        newState.data = arr2;
        return newState;

      case 'SAVE_BOOK':
        const newState = Object.assign ({},state); 
        var obj = Object.assign ({},state.data[updIndex] );
        newState.articleEdit = obj; //запоминаем книгу, которую будем редактировать
        newState.articleEdit.index = updIndex;
        return newState;

      case 'UPDATE_BOOK':
        const newState  = Object.assign({},state);
        var arr3 = [].concat(newState.data);

        newState.data = arr3.map(function(item){
          var tempItem = item;
          if (tempItem.index === updIndex) { //редактируем нужную книгу
            tempItem.author = author;
            tempItem.book = book;
            tempItem.year = year;
          }
          return tempItem;
        });

        newState.articleEdit = null;
        return newState;

    default:
      return state;
    }
  }