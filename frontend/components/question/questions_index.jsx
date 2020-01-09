import React from 'react';


class QuestionsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        const { questions } = this.props;
        const recentQuestions = questions.length > 20 ? questions.slice(questions.length - 20) : questions
        return (
            <div>
                <div>Most Recent Questions</div>
                <ul>
                    {
                        recentQuestions.map(question => (
                            <li key={question.id}>{question.title}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default QuestionsIndex;
