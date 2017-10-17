import {types} from './actions/LibraryActions';
import {Action} from 'redux';

export interface IBook{
    author: string;
    book: string; 
    year: string;
    index?: number;
}

export interface IData{
  data: IBook[];
  articleEdit: IBook;
}

export interface IActions{
    type: types;
    payload?: any;
}