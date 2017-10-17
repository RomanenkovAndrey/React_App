import { Component} from 'react';
import * as React from 'react';
import Article from './Article';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as libraryActions from '../actions/LibraryActions';
import {IBook, IActions} from '../interfaces';
import {IData} from '../interfaces';

interface IProps {
  data: IBook[];
}

interface IDispatchProps {
  libraryActions: {
    deleteBook(delIndex: number): IActions;
    saveBook(updIndex: number): IActions;
  }
}

interface IState{
  data: IBook
}

class Library extends Component<IProps & IDispatchProps, IState> {

  render() {
    const {data, libraryActions} = this.props;
    let libraryTemplate;

    if (data.length > 0) {
      libraryTemplate = data.map((item: IBook, index: number) => {
        return (
          <div key={index}>
            <Article item={item} index={index} libraryActions={libraryActions}/> 
          </div>
        )
      })
    } else {
      libraryTemplate=<p>Ни одна книга ещё не добавлена</p>
    }

    return (
      <div className="book">
        {libraryTemplate}
      </div>
    );
  }
}


function mapStateToProps (state: IData): IProps { //чтобы не класть весть Global State, кладём лишь его часть - IData
  return {
    data: state.data
  };
}

function mapDispatchToProps (dispatch: Dispatch <IState>): IDispatchProps {
  return {
    libraryActions: bindActionCreators<any>(libraryActions, dispatch)
  }
}

export default connect<IProps, IDispatchProps, void>(mapStateToProps, mapDispatchToProps)(Library);