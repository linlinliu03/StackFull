import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


class Greeting extends React.Component {
    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    routeChange(path) {
        this.props.resetError();
        this.props.history.push(path);
    }

    signOut() {
        
        this.props.logout().then(() => this.routeChange("/"));
    }
    
    render() {
        const { currentUser, logout} = this.props;
        const display = currentUser ? (
            <div className="rightbar">
                <div className="hove avatar-circle" onClick={() => this.routeChange(`/users/${currentUser.id}`)}>
                    <span className="initials">{currentUser.username.charAt(0).toUpperCase()}</span>
                </div>
                <button className="hov askquestion" onClick={() => this.routeChange("/questions/new")}>Ask Question</button>
                < FontAwesomeIcon icon={faSignOutAlt} className="hove logout" onClick={this.signOut} />
            </div>
        ) : (
                <div className="rightbar">
                    <button className="hov askquestion" onClick={() => this.routeChange("/questions/new")}>Ask Question</button>
                    <button className="hove login" onClick={() => this.routeChange("/login")}>Login</button>
                    <button className="hove signup" onClick={() => this.routeChange("/signup")}>Sign Up</button>
                </div>
            );
        


        return (
            <div className="header">
                <div className="hove homediv" onClick={() => this.routeChange("/")}><div className="stackimage"></div><div className="text">Full</div></div>
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
