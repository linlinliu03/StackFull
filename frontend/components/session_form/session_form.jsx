import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    demoSubmit(e) {
        e.preventDefault();
        const user = { username: "Lily", password:1234567};
        this.props.login(user);
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
            <div className="label">
                <label className="labelname" htmlFor="email">Email:</label>
                <div>
                    <input
                        id="email"
                        className="input"
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                    />
                </div>   
            </div>
        ) : (
            <label></label>
            )
        return (
        <div className="background">
                <div className="sessionparent">
                    <div className="greeting">{this.props.formMessage}</div>
                    <button className="demo" onClick={this.demoSubmit}>Demo User</button>
                    <div className="formContainer">
                        <form className="form" onSubmit={this.handleSubmit}>
                            {this.renderErrors()}
                            <div className="label">
                                <label className="labelname" htmlFor="username">Username:</label>
                                <div>
                                    <input
                                        id="username"
                                        className = "input"
                                        type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                    />
                                </div>
                            </div>
                            {display}
                            <div className="label">
                                <label className="labelname" htmlFor="password">Password:</label>
                                <div>
                                    <input
                                        id="password"
                                        className="input"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                    />
                                </div>
                                <button className="multibtn" onClick={this.handleSubmit}>{this.props.formType}</button>

                            </div>
                        </form>

                    </div>
                </div>
        </div>
        
        )
    }
}

export default SessionForm;