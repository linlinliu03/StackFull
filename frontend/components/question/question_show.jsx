import React from 'react';
import FooterSection from '../footer/footer';
import AnswerIndex from '../answer/answer_index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


// import ReactQuill from "react-quill";




class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body:''
        }
    
        this.createAnswer = this.createAnswer.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        // this.updatestate = this.updatestate.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

        // this.modules = {
        //     toolbar: [
        //         [{ font: [] }],
        //         [{ size: ["small", false, "large", "huge"] }],
        //         ["bold", "italic", "underline"],
        //         [{ list: "ordered" }, { list: "bullet" }],
        //         [{ align: [] }],
        //         [{ color: [] }, { background: [] }],
        //         ["clean"]
        //     ]
        // };
        // this.formats = [
        //     "font",
        //     "size",
        //     "bold",
        //     "italic",
        //     "underline",
        //     "list",
        //     "bullet",
        //     "align",
        //     "color",
        //     "background"
        // ];
    }

    // updatestate(value){
    //     this.setState({
    //         body: value
    //     })
    // }


    // handleSubmit(e) {
    //     e.preventDefault();
    //     String.fromCharCode(179);
    //     this.props.createAnswer({ body: this.state.body, question_id: this.props.question.id })
    //         .then(() => this.props.fetchAnswers(this.props.match.params.questionId))
    //         .then(() => this.setState({ body: "" }))
    // }

    handleChange() {
        return e => this.setState({body: e.target.value})
    }

    createAnswer(){
        this.props.createAnswer({body: this.state.body,question_id:this.props.question.id})
           .then(() => this.props.fetchAnswers(this.props.match.params.questionId))
           .then(() => this.setState({ body: "" }))

    }

    deleteQuestion(){
        if(this.props.currentUser&&this.props.currentUser.id === this.props.question.userId){
            this.props.deleteQuestion(this.props.question.id)
                .then(() => this.props.history.push('/'))
        }else{
            window.alert("Sorry, you don't have the authorization to delete the question")
        }
        
    }


    routeChange(path) {
        this.props.history.push(path)
    }

    routeToEdit(path){
        if (this.props.currentUser && this.props.currentUser.id === this.props.question.userId) {
            this.props.history.push(path)
        } else{
            window.alert("Sorry, you don't have the authorization to edit the question")
        }
    }

    componentWillUnmount() {
        this.props.resetError()
    }

    componentDidMount(){
        // this.props.fetchUsers()
        // this.props.fetchQuestion(this.props.match.params.questionId)
        // this.props.fetchAnswers(this.props.match.params.questionId)
        this.props.fetchUsers()
            .then(() => this.props.fetchQuestion(this.props.match.params.questionId))
            .then(() => this.props.fetchAnswers(this.props.match.params.questionId));
    }

    renderError() {
       if (this.props.errors.length > 0) {
           return <div className="error-missing">Can't post blank answer.</div>
        }
    }



    render() {
        
        const {
               question, 
               answers, 
               users, 
               currentUser, 
               createUpvote, 
               createDownvote, 
               fetchAnswers} = this.props;
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
                            className="home-home2">Home
                        </div>
                        {/* <div
                            onClick={() => this.routeChange(`/users/${currentUser.id}`)}
                            className="home-home3">User
                        </div> */}
                    </div> 
                    <div className="spacer">
                        
                    </div> 
                    <div className="question-show-section">
                        <div className="question-show-question">
                            <div className="question-show-title">{question && question.title}</div>
                            <div className="question-show-body">{question && question.body}</div>
                            <div className="question-show-body-bottom">
                                <div className="delete-update">
                                   <div className="delete" onClick = {this.deleteQuestion}>delete</div>
                                    <div className="update" onClick={() => this.routeToEdit(`/${question.id}/edit`)}>edit</div>
                                </div>
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
                                        <AnswerIndex
                                           key = {answer.id}
                                           answer = {answer}
                                           users = {users}
                                           fetchAnswers = {fetchAnswers}
                                           question = {question}
                                           createUpvote = {createUpvote}
                                           createDownvote = {createDownvote}
                                           images = {images}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="question-show-create-answer">
                            {/* <form onSubmit={this.handleSubmit}> */}
                                <label className="your-answer-text">Your Answer</label> 
                                {/* <ReactQuill
                                    theme = "snow"
                                    modules={this.modules}
                                    formats={this.formats}
                                    value={this.state.body || ''}
                                    onChange={this.updatestate}
                                />
                                <button 
                                    className="post-answer-btn"
                                    type="submit">
                                    Post Your Answer
                                </button>
                            </form> */}
                            <textarea
                                className = "answer-input"
                                value={this.state.body} 
                                onChange={this.handleChange()}
                            />
                            {this.renderError()}
                            <button className="post-answer-btn" 
                                onClick={this.createAnswer}>
                                Post Your Answer
                            </button>
                            
                        </div>
                    </div>
                    <div className="ask-question-button">
                        <button className="hov askquestion"
                            onClick={() => this.routeChange("/questions/new")}>
                            Ask Question
                        </button>
                        <div className="ask-question-image-section">
                            <img
                                className="ask-question-image"
                                src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f" />
                            <div className="ask-question-middle">Public Q&A</div>
                            <div className="ask-question-bottom">
                                Get answers to more than 16.5 million questions and give back by sharing your knowledge with others.
                            </div>
                        </div>
                    </div>
                </div>
                <FooterSection />
            </div>
        )
    }
}

export default QuestionShow;