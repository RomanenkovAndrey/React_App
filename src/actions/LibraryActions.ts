export function addBook(author: string, book: string, year: string) {
      return {
        type:'ADD_BOOK',
        payload: {author,book,year}
      }
    }

export function deleteBook(delIndex: number){
    return{
        type:'DELETE_BOOK',
        payload: delIndex
    }
}

export function saveBook(updIndex: number){
    return{
        type:'SAVE_BOOK',//enum
        payload: updIndex
    }
}

export function updateBook(author: string, book: string, year: string, updIndex: number){
    return{
        type:'UPDATE_BOOK',
        payload: {author,book,year,updIndex}
    }
}