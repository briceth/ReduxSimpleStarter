import React, { Component } from 'react';
//the glue between react and redux
import { connect } from 'react-redux';
//we import our action creator
import { selectBook } from '../actions/index';
//we import this to be sure that the action creator is gonna flowing through all  reducers
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }
  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state.books[0].title) return an array of object
  //whatever is returned wil show up as props inside of Booklist
  return {
    books:state.books
  }
  //the books key is now a property (props) of BookList component
}


//Anything returned from this function will end up as props
//on the BookList container!!!!
const mapDispatchToProps = dispatch => {
  //whenever selectbook is called, the result should pass to all our reducers
  // thanks to dispatch
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//link react and redux components

//Promote BookList from a component to a container - it needs to know about
//this  new dispatch method, selectBook. Make it available as a prop.
export default connect (mapStateToProps, mapDispatchToProps)(BookList);

//console.log(mapStateToProps)
//console.log(BookList)
