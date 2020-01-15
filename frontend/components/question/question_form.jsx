import React from 'react';
import FooterSection from '../footer/footer';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const question = Object.assign({}, this.state);
        this.props.createQuestion(question);
        this.setState({ 
            title: "",
            body: ""
        })
    }

    renderErrors1() {
        if (this.props.errors.includes("Title can't be blank")){
            return <div className="error-missing">Title is missing.</div>
       }
    };

    renderErrors2() {
        if (this.props.errors.includes("Body can't be blank")) {
            return <div className="error-missing">Body is missing.</div>
        }
    };

    render() {
        return (
            <div className="question-form-whole">
                <div className="create-question-container">
                    <img src={window.robot} className="robot-image"/>
                    <div className="question-form-main">
                        <form className="question-form" onSubmit={this.handleSubmit}>
                            <div className="quesiton-label">
                                <label htmlFor="title" className="question-form-label">
                                     Title:
                                </label>
                                <div className="under-label">Be specific and 
                                     imagine you’re asking a 
                                     question to another person
                                </div>
                                <div className="title-part">
                                    <input
                                        id="title"
                                        className="placeholder question-create-input"
                                        type="text"
                                        placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                                        value={this.state.title}
                                        onChange={this.update('title')}
                                    />
                                    {this.renderErrors1()}
                                </div>
                                <label htmlFor="body" className="question-form-label">
                                     Body:
                                </label>
                                <div className="under-label">Include all the 
                                     information someone would 
                                     need to answer your question
                                </div>
                                <div>
                                    <textarea
                                        id="body"
                                        className="question-create-textarea 
                                        question-create-input"
                                        value={this.state.body}
                                        onChange={this.update('body')}
                                    />
                                    {this.renderErrors2()}
                                </div>
                            </div>
                            <div>
                                <button className="create-question-btn"
                                    onClick={this.handleSubmit}>
                                    Post your quesiton
                                </button>
                            </div>
                        </form>
                        <div className="steps-instruction">
                            <div className="steps-instruction-text">
                                Instructions
                            </div>
                            <div className="instruction-container">
                            <div className="the-community">
                                 The community is here to help you with specific 
                                 coding, algorithm, or language problems.
                            </div>
                            <div className="avoid-asking">Avoid asking opinion-based questions.</div>
                            <ul className="question-form-instructions">
                                <li className="steps-lists">
                                    <img src="https://cdn.sstatic.net/Img/list-1.svg?v=e8dd475ba207" 
                                    className="steps-imag"/>
                                    Summarize the problem
                                </li>
                                <li className="steps-lists">
                                    <img src="https://cdn.sstatic.net/Img/list-2.svg?v=9382fc2c3631"
                                    className="steps-imag"/>
                                    Describe what you've tried
                                </li>
                                <li className="steps-lists">
                                    <img src="https://cdn.sstatic.net/Img/list-3.svg?v=323a95564232"
                                    className="steps-imag"/>
                                    Show some example
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterSection/>
            </div>
        )
    }
}

export default QuestionForm;