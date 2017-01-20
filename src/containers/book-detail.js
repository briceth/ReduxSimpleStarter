import React, { Component } from 'react';

import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    // to avoid the Cannot read property '' of null
    if(!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return(
      <div>
        <h3>Book detail</h3>
        <div>{this.props.book.title}</div>
        <div>page:{this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook //refers to reducers/index.js
  }
}

//link react and redux components
export default connect(mapStateToProps)(BookDetail)
