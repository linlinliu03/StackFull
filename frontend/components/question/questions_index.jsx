import React from 'react';
import FooterSection from '../footer/footer';


class QuestionsIndex extends React.Component {
    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuestions();
    }

    routeChange(path) {
        this.props.history.push(path);
    }

    render() {
        const { questions } = this.props;
        const recentQuestions = questions.length > 20 ? 
              questions.slice(questions.length - 20) : questions
        return (
            <div>
             <div className="question-frame">
                <div className="home-section"
                    onClick={() => this.routeChange("/")}>
                    <div className="home-home">Home</div>
                </div>
                <div className="question-section">
                    <div className="questions-top">Top Questions</div>
                    <ul>
                        {
                            recentQuestions.reverse().map(question => (
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
                </div>
             </div>
             <FooterSection />
            </div>
        )
    }
}

export default QuestionsIndex;
