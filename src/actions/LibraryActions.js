export function AddBook(author,book,year) {
      return {
        type: 'ADD_BOOK',
        payload: {author,book,year}
      }
    }

export function DeleteBook(delIndex){
    return{
        type: 'DEL_BOOK',
        payload: delIndex
    }
}

export function UpdateBook(author,book,year,updIndex){
    return{
        type: 'DEL_BOOK',
        payload: {author,book,year,updIndex}
    }
}