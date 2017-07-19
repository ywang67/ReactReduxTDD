import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/reducer_comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comment Reducer', ()=>{
    it('handles action with unknown type', ()=>{
        expect(commentReducer(undefined,{})).to.be.instanceOf(Array);
        /*expect(commentReducer(undefined, {})).to.eql([]);*/
    });

    it('handle action of type SAVE_COMMENT', ()=>{
        const action = {type: SAVE_COMMENT, payload: 'new comment'};
        expect(commentReducer([], action)).to.eql(['new comment'])
    });
});