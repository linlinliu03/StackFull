import React from 'react';
import { withRouter } from 'react-router-dom';
import FooterSection from '../footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

class QuestionSearch extends React.Component {
    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange(path) {
        this.props.history.push(path);
    }

    render() {
        const { questions, query, url, currentUser } = this.props;
        const display = questions.length === 0 ? (
            <div className="cannt-find">
                <img className="img-reference" 
                    src="https://cdn.sstatic.net/Img/magnifying.svg?v=f06250fb4fbb"/>
                <div className="first-sentence">
                    We couldn't find anything for 
                    <span className="query-text">{query}</span>!
                </div>
                <div className="second-section">
                    Try different or less specific keywords.
                </div>
            </div>
        ) : (
                <ul>
                    {
                        questions.map(question => (
                            <li key={question.id} 
                               className="queston-list-container"
                               onClick={() => this.routeChange(`/questions/${question.id}`)}
                               >
                                <div className="question-search-list">
                                     <div className="search-count-section">
                                        <div className="search-num-lengh">
                                            {question.answerIds.length}
                                        </div>
                                        <div className="search-num-answers">
                                            answers
                                        </div>
                                     </div>
                                     <div>
                                         <div className="search-title">
                                             Q: {question.title}
                                         </div>
                                         <div className="search-body">
                                             {question.body}
                                         </div>
                                     </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
        )
        const main= (url === '/search/' ? (
            <div className="search-outer">
                <div className="home-section">
                    <div className="home-home1">
                        < FontAwesomeIcon icon={faGlobeAmericas} /> Stack Full
                    </div>
                    <div 
                        onClick={() => this.routeChange("/")} 
                        className="home-home">Home
                    </div>
                    <div 
                        onClick={() => this.routeChange(`/users/${currentUser.id}`)}
                        className="home-home">User
                    </div>
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                <div className="question-search-page">
                    <div className="search-first">
                        <div className="search-results">Search Results</div>
                        <div className="ask-question-button">
                            <button className="hov askquestion" 
                               onClick={() => this.routeChange("/questions/new")}>
                               Ask Question
                            </button>
                        </div>
                    </div>
                    <div className="number-results">No Result</div>
                    <div className="top-border"></div>
                    <div className="no-result-bottom">Please type something to search!</div>
                </div>
            </div>
        ) : (
            <div className="search-outer">
                <div className="home-section">
                    <div className="home-home1"> 
                        < FontAwesomeIcon icon={faGlobeAmericas}/> Stack Full
                    </div>
                    <div
                        onClick={() => this.routeChange("/")}
                        className="home-home">Home
                    </div>
                    <div
                        onClick={() => this.routeChange(`/users/${currentUser.id}`)}
                        className="home-home">User
                    </div>
                </div> 
                <div className="question-search-page">
                    <div className="search-first">
                        <div className="search-results">Search Results</div>
                        <div className="ask-question-button">
                            <button className="hov askquestion" 
                               onClick={() => this.routeChange("/questions/new")}>
                               Ask Question
                            </button>
                        </div>
                    </div>
                    <div className="results">Results for {query}</div>
                    <div className="number-results">
                        {questions.length} results
                    </div>
                    <div className="top-border"></div>
                   <div>{display}</div>
                </div>
            </div>
        ))

        return(
            <div>
                {main}
                <FooterSection />
            </div>
        )
    }
}

export default withRouter(QuestionSearch);