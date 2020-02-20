import React from 'react';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactQuill from "react-quill";



class AnswerIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            upvote: this.props.answer.upvoteIds.length,
            downvote: this.props.answer.downvoteIds.length
        }
        this.updateUpvote = this.updateUpvote.bind(this);
        this.updateDownvote = this.updateDownvote.bind(this);
    }

    updateUpvote(){
        this.props.createUpvote({ answer_id: this.props.answer.id })
           .then(() => this.props.fetchAnswers(this.props.question.id))
           .then(() => this.setState({upvote: this.props.answer.upvoteIds.length}))
           .fail(err => alert("You have already upvoted this answer"))
    }

    updateDownvote(){
        this.props.createDownvote({ answer_id: this.props.answer.id })
           .then(() => this.props.fetchAnswers(this.props.question.id))
           .then(() => this.setState({downvote: this.props.answer.downvoteIds.length}))
           .fail(err => alert("You have already downvoted this answer"))
    }

    render(){
        const { answer, users, images } = this.props;
        return (
            <li
                className="question-answers-list">
                <div className="question-answer-top">
                    <div className="answer-votes">
                        < FontAwesomeIcon icon={faCaretUp} className="icon-upvote icon-vote"
                            onClick={() => this.updateUpvote()} />
                        <div>{this.state.upvote-this.state.downvote}</div>
                        < FontAwesomeIcon icon={faCaretDown} className="icon-downvote icon-vote"
                            onClick={() => this.updateDownvote()} />
                    </div>
                    {/* <ReactQuill
                        value={answer.body}
                        modules={{
                            toolbar: false
                        }}
                        readOnly={true}
                    /> */}
                    <div className="answer-body-tex">{answer.body}</div>
                </div>
                <div className="question-show-answer-bottom">
                    <div className="question-show-answer-bottom-inside">
                        <img className="question-show-body-bottom-image"
                            src={`${images[answer && answer.userId % images.length]}`} />
                        <div className="question-show-body-bottom-text">
                            {users[answer.userId].username}
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default AnswerIndex;