import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {
    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
        // this.signOut = this.signOut.bind(this);
    }

    routeChange(path) {
        this.props.resetError();
        this.props.history.push(path);
    }

    // signOut() {
    //     this.props.logout();
    //     this.routeChange("/");
    // }
    
    render() {
        const { currentUser, logout} = this.props;
        const display = currentUser ? (
            <div className="rightbar">
                <p className="username">Hello, {currentUser.username}!</p>
                <button className="hov askquestion" onClick={() => this.routeChange("/questions/new")}>Ask Question</button>
                <button className="hove logout" onClick={logout}>Log Out</button>
            </div>
        ) : (
                <div className="rightbar">
                    <button className="hove login" onClick={() => this.routeChange("/login")}>Login</button>
                    <button className="hov signup" onClick={() => this.routeChange("/signup")}>Sign Up</button>
                </div>
            );
        


        return (
            <div className="header">
                <div className="homediv"><button className="home" onClick={() => this.routeChange("/")}><i className="fa fa-home"></i>Stack Full</button></div>
                <div className="searchbar">
                  <span className="glyphicon glyphicon-search"></span>
                  <input type="text" placeholder="Search..." className="search"/>
                </div>
                {display}
            </div>
        )
    }

}


export default withRouter(Greeting);
