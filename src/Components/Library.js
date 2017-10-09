import React from 'react'
import Article from './Article.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as libraryActions from '../actions/LibraryActions'

// библиотека книг
const Library = React.createClass({
    propTypes: {
      data: React.PropTypes.array.isRequired
    },
  
    render: function() {
      const {data} = this.props.data;
      var libraryTemplate;
      var that = this;
  
      if (data.length > 0) {
        libraryTemplate = data.map(function(item, index) {
          return (
            <div key = {index}>
              {/*data={item} onDelete={that.props.onDelete} onSave={that.props.onSave} index={index}*/}
              <Article item = {item} index = {index}/>
            </div>
          )
        })
      } else {
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
      data:state
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      libraryActions: bindActionCreators(libraryActions, dispatch)
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps )(Library);