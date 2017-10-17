import { IData, IActions } from '../interfaces';
import { types } from '../actions/LibraryActions';

const initialState: IData = {
    data: [{
      author: 'Замятин',
      book: 'Мы',
      year: '1986'
    },

    {
      author: 'Толкиен',
      book: 'Властелин колец',
      year: '1996'
    },

    {
      author: 'Чак Паланик',
      book: 'Бойцовский клуб',
      year: '2006'
    }],

    articleEdit: undefined
  };
  
  export default function rootReducer(state: IData = initialState, action: IActions): IData { 

    switch(action.type) {

      case types.ADD_BOOK: {
        const newState  = {...state};
        let arr = [...newState.data]; 
        arr.unshift (action.payload);
        newState.data = arr;
        return newState;
      }

      case types.DELETE_BOOK:{
        const newState  = {...state};
        let arr = [...newState.data];
        arr.splice(action.payload, 1);
        newState.data = arr;
        return newState;
      }

      case types.SAVE_BOOK:{ 
        const newState = {...state}; 
        let obj = {...state.data[action.payload]};
        let objNew = {...obj, index: action.payload};
        newState.articleEdit = objNew;
        return newState;
      }

      case  types.UPDATE_BOOK:{
        const newState  = {...state};
        let arr = [...newState.data];
        let counter = 0; 
        newState.data = arr.map(function(item){
          let tempItem = item;
          if (counter === action.payload.updIndex) { 
            tempItem = action.payload;
          }
          counter++;
          return tempItem;
        });

        newState.articleEdit = undefined;
        return newState;
      }

    default:
      return state;
    }
  }