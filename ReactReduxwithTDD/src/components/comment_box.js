import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';
import {saveComment} from '../actions/index';

class CommentBox extends Component{

    constructor(props){
        super(props);
        this.state = {comment: ''}
    };

    handleChange(event){
        this.setState({comment: event.target.value});
    };

    handleSubmit(event){
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({comment:''});
    };



    render(){
        return(
            <form onSubmit={(event)=>{this.handleSubmit(event)}} className="comment-box">
                <h4>Add a comment</h4>
                <textarea value={this.state.comment}
                          onChange={(event)=>this.handleChange(event)}/>
                <div>
                <button action="submit">Submit Comment</button>
                </div>
            </form>
        );

    }

}

export default  connect(null, actions)(CommentBox);

/*function matchDispatchToProps(dispatch) {
    return bindActionCreators({saveComment: saveComment}, dispatch);
}*/


/*export  default  connect(matchDispatchToProps)(CommentBox);*/
