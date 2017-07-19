import { combineReducers } from 'redux';
import CommentsReducer from './reducer_comments';

const rootReducer = combineReducers({
  /*comments: (state = []) => state  */
  comments: CommentsReducer
});

export default rootReducer;
