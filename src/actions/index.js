//we create an action creator selectBook
export function selectBook(book) {
  //needs to return an action, an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
