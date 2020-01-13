import React from 'react';

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

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="question-error-list">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <form className="question-form" onSubmit={this.handleSubmit}>
                    <div className="quesiton-label">
                        <label htmlFor="title">Title:</label>
                        <div>
                            <input
                                id="title"
                                className="title"
                                type="text"
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                        </div>
                    </div>
                    <div className="question-label">
                        <label htmlFor="body">Body:</label>
                        <div>
                            <textarea
                                id="body"
                                className="body"
                                value={this.state.body}
                                onChange={this.update('body')}
                            />
                        </div>
                    </div>
                    <div>
                        <button className="create-question-btn"
                            onClick={this.handleSubmit}>
                            Post your quesiton
                        </button>
                    </div>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}

export default QuestionForm;