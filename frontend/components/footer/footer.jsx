import React from 'react';
import { withRouter } from 'react-router-dom';

class FooterSection extends React.Component{

    routeChange(path) {
        return e => this.props.history.push(path);
    }

    render(){
        return(
            <div className="footer-container">
                <div className="footer-button" 
                    onClick={this.routeChange("/")}>
                    Home
                </div>
        
                <a className="footer-button" href="https://github.com/linlinliu03/BayAreaTechnologies">
                    Github
                </a>

                <a className="footer-button" href="https://www.linkedin.com/in/linda-liu-b700261a1/">
                   Linkedin
                </a>
    
                <div className="footer-button" 
                    onClick={this.routeChange("/questions/new")}>
                    Ask Question
                </div>
            </div>
        )
    }
}

export default withRouter(FooterSection);