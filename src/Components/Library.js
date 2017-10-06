import React from 'react'
import Article from './Article.js'

// библиотека книг
const Library = React.createClass({
    propTypes: {
      data: React.PropTypes.array.isRequired
    },
  
    render: function() {
      var data = this.props.data;
      var libraryTemplate;
      var that=this;
  
      if (data.length > 0) {
        libraryTemplate = data.map(function(item, index) {
          return (
            <div key={index}>
              <Article data={item} onDelete={that.props.onDelete} onSave={that.props.onSave} index={index}/>
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

  export default Library;