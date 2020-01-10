import React from 'react';
import { Link, withRouter } from 'react-router-dom';


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
        const recentQuestions = questions.length > 20 ? questions.slice(questions.length - 20) : questions
        return (
            <div className="question-frame">
                <div className="question-section">
                    <div className="questions-top">Top Questions</div>
                    <ul className="question-container">
                        {
                            recentQuestions.map(question => (
                                <li key={question.id} 
                                    className="question-list"
                                    onClick={() => this.routeChange(`/questions/${question.id}`)}
                                    >
                                    {question.title}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="ask-question-button"><button className="hov askquestion" onClick={() => this.routeChange("/questions/new")}>Ask Question</button></div>
            </div>
        )
    }
}

export default withRouter(QuestionsIndex);
