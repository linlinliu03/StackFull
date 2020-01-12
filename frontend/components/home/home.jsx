import React from 'react';
import FooterSection from '../footer/footer';

class Home extends React.Component{

    routeChange(path) {
        return e => this.props.history.push(path);
    }

    render(){
        return(
    <div>
        <div className="img-container">
          <img src={window.homepage} className="homeimage"/>
        </div>
        <div className="for-developers-container">
            <div className="for-developers">We love to help people who code</div>
            <div className="divider"></div>
            <div className="developer-text">
                Stack Full is an open community for anyone that codes. We help 
                you get answers to your toughest coding questions, share 
                knowledge with your coworkers in private, and find your next dream job.
            </div>
        </div>
        <div className="home-middle">
            <div className="home-middle-element">
                <img className="home-middle-element1" 
                    src="https://cdn.sstatic.net/Img/home/developer.svg?v=cd5e5a0ec97c"/>
                <div className="home-middle-element2">Write the script of the future</div>
                <div className="home-middle-element3">Get your coding questions 
                    answered to learn, build, and level up whether you’re 
                    beginning with JavaScript or a React professional. 
                </div>
            </div>
            <div className="home-middle-element">
                <img className="home-middle-element1" 
                    src="https://cdn.sstatic.net/Img/home/open-source.svg?v=e025bc1244c8"/>
                <div className="home-middle-element2">Support open source</div>
                <div className="home-middle-element3">Reach users of your 
                    project by following tags, answering newcomer questions, 
                    and empowering experts in the community.
                </div>
            </div>
            <div className="home-middle-element">
                <img className="home-middle-element1" 
                    src="https://cdn.sstatic.net/Img/home/advocate.svg?v=a91ad6d1a9bd"/>
                <div className="home-middle-element2">Acquire and share knowledge</div>
                <div className="home-middle-element3">Answer questions and gain 
                    insights from an audience of developers using your 
                    technology on Stack Full.
                </div>
            </div>
        </div>
        <div className="purple-container">
            <div className="unlock-text">Unlock siloed knowledge with Stack Full 
                for Teams
            </div>
            <div className="divider"></div>
            <div className="our-missiton-text">Wikis, chat messages, or formal 
                documentation for knowledge management aren’t effective. Our 
                question and answer format is a proven approach for accessing 
                the right information in less time.
            </div>
        </div>
        <div className="home-bottom-container">
            <div className="questions-are">Questions are everywhere, answers are 
                on Stack Full
            </div>
            <div className="divider"></div>
            <div className="we-build">We build products that empower 
                developers and connect them to solutions that enable productivity, 
                growth, and discovery.
            </div>
            <div><button className="create-account-button"
                onClick={this.routeChange("/signup")}>
                Create an account
                </button>
            </div>
        </div>
        <FooterSection />
    </div>

        )
    }
}


export default Home;

