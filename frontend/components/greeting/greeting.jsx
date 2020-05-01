import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


class Greeting extends React.Component {
    constructor(props) {
        super(props);
        // check if there is any searching keyword in the route
        const res = this.props.location.pathname.match("/search/(.*)")
        // if keyword exists, set the state to the searching keyword 
        if (res) {
            const query = res[1]
            this.state = {
                word: query
            }
            this.startSearch(query)
        // if keyword doesn't exist, set the state to be empty
        } else {
            this.state = {
                word: ''
            }
        }
        this.signOut = this.signOut.bind(this);
        this.startSearch = this.startSearch.bind(this);
    }
    
    // if redirect to other page, clear the search bar by setting state to be empty
    componentDidUpdate(prevProps) {
        const res = this.props.location.pathname.match("/search/(.*)")
        if (this.props.location.pathname !== prevProps.location.pathname && !res) {
            this.setState({ word: '' });
        }
    }

    routeChange(path) {
        this.props.history.push(path);
    }

    signOut() {
        this.props.logout().then(() => this.routeChange("/"));
    }

    update() {
        return e => this.setState({ word: e.target.value })
    }

    startSearch(query) {
    // fetch all related questions based on the searching keyword and save to the redux store
        this.props.fetchQuestions(query)
    // After getting all questions, direct to the corresponding search page
            .then(() => this.props.history.push(`/search/${query}`))
    }
    searchFunc(){
        return e => {
    // start to search when hit the enter key
            if (e.key === 'Enter') {
                this.startSearch(e.target.value)
            }
        }
    }
    
    render() {
        const { currentUser} = this.props;
        const display = currentUser ? (
            <div className="rightbar">
                {/* <div className="hove avatar-circle"  */}
                <div 
                    // className="hove initials" 
                    // onClick={() => this.routeChange(`/users/${currentUser.id}`)}
                >
                    {/* <span className="initials"> */}
                        {/* {currentUser.username.charAt(0).toUpperCase()} */}
                        <img className="userimage"
                           src="https://i.stack.imgur.com/xDsBe.jpg?s=96&g=1"/>
                    {/* </span> */}
                </div>
                < FontAwesomeIcon icon={faSignOutAlt} className="hove logout" 
                    onClick={this.signOut} />
            </div>
        ) : (
                <div className="rightbar">
                    <button className="hove login" 
                       onClick={() => this.routeChange("/login")}>
                       Login
                    </button>
                    <button className="hov signup" 
                       onClick={() => this.routeChange("/signup")}>
                       Sign Up
                    </button>
                </div>
            );
        

       
        return (
            <div>
            <div className="header">
                <div className="hove homediv" 
                    onClick={() => this.routeChange("/")}>
                    <div className="stackimage"></div>
                    <div className="text">Full</div>
                </div>
                <div className="searchbar">
                  <span className="glyphicon glyphicon-search"></span>
                  <input 
                      type="text" 
                      placeholder="Search..." 
                      className="search"
                      value={this.state.word}
                      onChange={this.update()}
                      onKeyPress={this.searchFunc()}
                      />
                </div>
                {display}
            </div>
            <div className="spacer">
                &nbsp;
            </div>
            </div>
        )
    }

}


export default withRouter(Greeting);
