import { combineReducers } from 'redux';
import BooksReducer from './reducerBooks';

const rootReducer = combineReducers({
  books: BooksReducer
})
//console.log(BooksReducer) return a function that return an array of hash

export default rootReducer;
