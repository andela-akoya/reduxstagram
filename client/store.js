/**
 * Created by koyexes on 02/10/2017.
 */
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-dom';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);
export default store;