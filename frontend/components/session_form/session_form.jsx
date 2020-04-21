import React from 'react';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
    }

    routeChange(path) {
        this.props.history.push(path);
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
        const user = { username: "Tom", password:1234567};
        this.props.login(user);
    }

    componentWillUnmount(){
        this.props.resetError();
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="error-list">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const display = this.props.formType === "Sign up" ? (
            <div className="label">
                <label htmlFor="email">Email:</label>
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
                    <button 
                       className="demo" onClick={this.demoSubmit}>Demo User
                    </button>
                    <div className="formContainer">
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="label">
                                <label htmlFor="username">Username:</label>
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
                                <label htmlFor="password">Password:</label>
                                <div>
                                    <input
                                        id="password"
                                        className="input"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                    />
                                </div>
                                <button className="multibtn" 
                                        onClick={this.handleSubmit}>
                                        {this.props.formType}
                                </button>

                            </div>
                            {this.renderErrors()}
                        </form>
                    </div>
                    <div className="bottom-text"><span className="link-text1">
                        {this.props.change}</span><span className="link-text2" 
                        onClick={() => this.routeChange(this.props.Link)}>
                        {this.props.redirect}</span>
                    </div>
                </div>
        </div>
        
        )
    }
}

export default SessionForm;