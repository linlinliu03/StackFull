import React from 'react';
import { withRouter } from 'react-router-dom';

class FooterSection extends React.Component{

    routeChange(path) {
        return e => this.props.history.push(path);
    }

    render(){
        return(
            <div className="footer-container">
                {/* <div className="footer-button" 
                    onClick={this.routeChange("/")}>
                    Home
                </div> */}
                <div className="footer-button">
                    <a href="#/login">Home</a>
                </div>
                <div className="footer-button" 
                    onClick={this.routeChange("/questions/new")}>
                    Ask Question
                </div>
            </div>
        )
    }
}

export default withRouter(FooterSection);