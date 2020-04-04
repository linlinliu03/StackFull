import React from 'react';
import FooterSection from '../footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';


class QuestionsIndex extends React.Component {
    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestions();
    }

    routeChange(path) {
        this.props.history.push(path)
    }

    render() {
        const { questions } = this.props;
        // const recentQuestions = questions.length > 20 ? 
        //       questions.slice(questions.length - 20) : questions
        return (
            <div>
             <div className="question-frame">
                <div className="home-section">
                    <div className="home-home1">
                        < FontAwesomeIcon icon={faGlobeAmericas} /> Stack Full
                    </div>
                    <div
                        onClick={() => this.routeChange("/")}
                        className="home-home2">Home
                    </div>
                    {/* <div
                        onClick={() => this.routeChange(`/users/${this.props.currentUser.id}`)}
                        className="home-home3">User
                    </div> */}
                </div>
                <div className="spacer">
                      
                </div>
                <div className="question-section">
                    <div className="questions-top">All Questions</div>
                    <ul>
                        {
                            questions.reverse().map(question => (
                                <li key={question.id} 
                                    className="question-index-list"
                                    onClick={() => this.routeChange(`/questions/${question.id}`)}
                                    >
                                    <div className="question-list">
                                           <div className="answer-count">
                                               <div className="number">
                                                   {question.answerIds.length}
                                               </div>
                                               <div className="answer-body">
                                                   answers
                                               </div>
                                           </div>
                                           <div className="question-title">
                                               {question.title}
                                           </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                  </div>
                <div className="ask-question-button">
                    <button className="hov askquestion" 
                      onClick={() => this.routeChange("/questions/new")}>
                      Ask Question
                    </button>
                    <div className="ask-question-image-section">
                        <img 
                           className="ask-question-image"
                           src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f"/>
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

export default QuestionsIndex;
