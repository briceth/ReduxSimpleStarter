import React, { Component } from 'react';
//the glue between react and redux
import { connect } from 'react-redux';

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

function mapStateToProps(state) {
  //whatever is returned wil show up as props inside of Booklist
  return {
    books:state.books
  }
}

export default connect (mapStateToProps)(BookList);
