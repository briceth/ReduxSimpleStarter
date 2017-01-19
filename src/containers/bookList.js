import React, { Component } from 'react';
//the glue between react and redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

const mapDispatchToProps = dispatch => {
  //whenever selectbook is called, the result should pass to all our reducers
  // thanks to dispatch
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(BookList);

//console.log(mapStateToProps)
//console.log(BookList)
