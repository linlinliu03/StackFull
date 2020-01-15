import React from 'react';
import FooterSection from '../footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import SvgIcon from '@material-ui/core/SvgIcon';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body:''
        }
        this.routeChange = this.routeChange.bind(this)
        this.createAnswer = this.createAnswer.bind(this)
    }

    update() {
        return e => this.setState({ body: e.target.value })
    }

    createAnswer(){
        this.props.createAnswer({body: this.state.body,question_id:this.props.question.id})
        .then(() => this.setState({body:""}))
    }

    routeChange(path) {
        this.props.history.push(path)
    }

    componentDidMount(){
        this.props.fetchUsers()
            .then(() => this.props.fetchQuestion(this.props.match.params.questionId))
            .then(() => this.props.fetchAnswers(this.props.match.params.questionId));
    }

    render() {
        const {question, answers, users, currentUser, createUpvote, createDownvote} = this.props;
        const images = [
                         "https://i.stack.imgur.com/hMDvl.jpg?s=96&g=1",
                         "https://i.stack.imgur.com/tGgv6.jpg?s=96&g=1",
                         "https://www.gravatar.com/avatar/7aa22372b695ed2b26052c340f9097eb?s=96&d=identicon&r=PG",
                         "https://i.stack.imgur.com/ziYmO.gif?s=96&g=1",
                         "https://www.gravatar.com/avatar/89927e2f4bde24991649b353a37678b9?s=96&d=identicon&r=PG",
                         "https://i.stack.imgur.com/wsHAV.png?s=96&g=1",
                         "https://i.stack.imgur.com/BJXub.png?s=96&g=1",
                         "https://www.gravatar.com/avatar/fa05233b2357f8d11c22ef4cfc7bb85c?s=96&d=identicon&r=PG",
                         "https://www.gravatar.com/avatar/7f2c4de95e8f4f8f5a71c3aaf0ed312a?s=96&d=identicon&r=PG",
                         "https://www.gravatar.com/avatar/fa1648baa6108c85886312af93bb32c0?s=96&d=identicon&r=PG",
                         "https://i.stack.imgur.com/4P5DY.jpg?s=96&g=1",
                         "https://www.gravatar.com/avatar/64323e6cf08401474da3bf770ea13b58?s=96&d=identicon&r=PG&f=1",
                         "https://www.gravatar.com/avatar/0ff652685122f4500dd4f3c21fb32da2?s=96&d=identicon&r=PG",
                         "https://www.gravatar.com/avatar/b6975c494d3d9c404dd3d7af2edf3133?s=96&d=identicon&r=PG",
                         "https://www.gravatar.com/avatar/ace3174f4519bdd2a622e1f14b2ebbae?s=96&d=identicon&r=PG",
                         "https://i.stack.imgur.com/Z0Y6o.png?s=96&g=1"
                       ]
        return (
            <div>
                <div className="question-show-container">
                    <div className="home-section">
                        <div className="home-home1">
                            < FontAwesomeIcon icon={faGlobeAmericas} /> Stack Full
                        </div>
                        <div
                            onClick={() => this.routeChange("/")}
                            className="home-home">Home
                        </div>
                        <div
                            onClick={() => this.routeChange(`/users/${currentUser.id}`)}
                            className="home-home">User
                        </div>
                    </div>  
                    <div className="question-show-section">
                        <div className="question-show-question">
                            <div className="question-show-title">{question && question.title}</div>
                            <div className="question-show-body">{question && question.body}</div>
                            <div className="question-show-body-bottom">
                                <div className="question-show-body-bottom-inside">
                                    <img className="question-show-body-bottom-image" 
                                        // src={`${images[Math.floor(Math.random() * 10)]}`}/>
                                        src={`${images[question && question.userId%images.length]}`}/>
                                    <div className="question-show-body-bottom-text">
                                        {question && users[question.userId] && users[question.userId].username}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="question-show-answers">
                            <div className="count-answers">{question && question.answerIds.length} Answers</div>
                            <ul>
                                {
                                    answers && answers.map(answer => (
                                        <li key={answer.id}
                                            className="question-answers-list">
                                                <div className="question-answer-top">
                                                    <div className="answer-votes">
                                                        < FontAwesomeIcon icon={faCaretUp} className="icon-vote"
                                                           onClick={() => createUpvote({answer_id:answer.id})} />
                                                        {/* <svg aria-hidden="true" class="svg-icon m0 iconArrowUpLg"  viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"></path></svg> */}
                                                        <div>{answer.upvoteIds.length - answer.downvoteIds.length}</div>
                                                        < FontAwesomeIcon icon={faCaretDown} className="icon-vote"
                                                           onClick={() => createDownvote({ answer_id: answer.id })} />
                                                        {/* <svg aria-hidden="true" class="svg-icon m0 iconArrowDownLg"  viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"></path></svg> */}
                                                    </div>
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
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="question-show-create-answer">
                            <label>Your Answer</label>  
                            <textarea 
                                value={this.state.body}
                                onChange={this.update()}
                            />
                            <button onClick={() => this.createAnswer()}>Post your answer</button>
                        </div>
                    </div>
                    <div className="ask-question-button">
                        <button className="hov askquestion"
                            onClick={() => this.routeChange("/questions/new")}>
                            Ask Question
                        </button>
                    </div>
                </div>
                <FooterSection />
            </div>
        )
    }
}

export default QuestionShow;