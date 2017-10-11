import React, { Component } from 'react'
import Article from './Article.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as libraryActions from '../actions/LibraryActions'

class Library extends Component{
  constructor(props){
    super(props);
  }

  render() {
    const data = this.props.data;
    let libraryTemplate;

    if (data.length > 0) {
      libraryTemplate = data.map((item, index) =>{
        return (
          <div key = {index}>
            <Article item = {item} index = {index} libraryActions = {this.props.libraryActions}/> 
          </div>
        )
      })
    }
     else {
      libraryTemplate = <p>Ни одна книга ещё не добавлена</p>
    }

    return (
      <div className='book'>
        {libraryTemplate}
      </div>
    );
  }
}

Library.propTypes = {
  data: React.PropTypes.array.isRequired
};


function mapStateToProps (state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    libraryActions: bindActionCreators(libraryActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Library);

/*
//библиотека книг
const Library = React.createClass({
    propTypes: {
      data: React.PropTypes.array.isRequired
    },
  
    render: function() {
      const data = this.props.data;
      let libraryTemplate;
  
      if (data.length > 0) {
        libraryTemplate = data.map(function(item, index) {
          return (
            <div key = {index}>
              <Article item = {item} index = {index}/>
            </div>
          )
        })
      }
       else {
        libraryTemplate = <p>Ни одна книга ещё не добавлена</p>
      }
  
      return (
        <div className='book'>
          {libraryTemplate}
        </div>
      );
    }
  });

  function mapStateToProps (state) {
    return {
      data: state.data
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      libraryActions: bindActionCreators(libraryActions, dispatch)
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Library);*/