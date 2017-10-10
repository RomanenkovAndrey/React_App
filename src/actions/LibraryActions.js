export function addBook(author,book,year) {
      return {
        type:'ADD_BOOK',
        payload: {author,book,year}
      }
    }

export function deleteBook(delIndex){
    return{
        type:'DELETE_BOOK',
        payload: delIndex
    }
}

export function saveBook(updIndex){
    return{
        type:'SAVE_BOOK',
        payload: updIndex
    }
}

export function updateBook(author,book,year,updIndex){
    return{
        type:'UPDATE_BOOK',
        payload: {author,book,year,updIndex}
    }
}