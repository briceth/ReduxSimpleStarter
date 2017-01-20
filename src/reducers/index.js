import { combineReducers } from 'redux';
import ReducerBook from './reducerBooks';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: ReducerBook,
  activeBook: ActiveBook
})
//console.log(ReducerBook) //return a function that return an array of hash

export default rootReducer;
