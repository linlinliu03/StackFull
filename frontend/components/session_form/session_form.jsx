import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const display = this.props.formType === "signup" ? (
            <label>Email:
                    <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                />
            </label>
        ) : (
                <label></label>
            )
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <h2>Please {this.props.formType}</h2>
                {this.renderErrors()}
                <label>Username:
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                </label>
                {display}
                <label>Password:
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                </label>
            </form>
        </div>)
    }
}

export default SessionForm;