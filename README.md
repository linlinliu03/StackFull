# Stack Full
____________________________________________________________________________________________________________________________

## Tech Stack

* Javascript
* React
* Redux
* Ruby
* Rails
* PostgreSQL

Stack Full, inspired by Stack Overflow, is an open community for anyone that codes to learn, share their knowledge, and ask questions. Stack Full can be used as a great resource for your programming project by providing high level or advanced technical solutions. You can also ask any coding related question or answer questions to help others.

## Features

* Ask Questions
  * Users can ask any coding related question and get feedback from the community.
  * Question could be created by providing a summary title and detailed body including optional text or code.
* Answer Questions
  * Users can read or search all open questions to provide good answers to help others.
* Search for Questions
  * Users have access to search question by typing keywords in the search bar without having to create an account.
  * Search result is based on either the question title or question body including the keywords. Searching is also case         insensitive, and the results will be the same for both lower-case and upper-case keywords.
* Upvote Answer
  * Users can upvote an answer if they realy like that solution but they can only upvote the same answer once.
* Downvote Answer 
  * Users can downvote an answer if they think the solution is wrong or not working but they can only downvote the same         answer once.

![image](https://user-images.githubusercontent.com/53238880/72640029-dcd3f500-391b-11ea-805b-b94d0d34bff6.png)

## Example Code

Some codes of searching feature in the backend and frontend.

```ruby
def index
   query = params[:query] || ''
   condition = '%' + query + '%'
   @questions = Question.includes(:answers).where('LOWER(questions.title) like LOWER(?) or
   LOWER(questions.body) like LOWER(?)', condition, condition)
   render :index 
 end
 ```
 
 ```javascript
 constructor(props) {
        super(props);
        const res = this.props.location.pathname.match("/search/(.*)")
        if (res) {
            const query = res[1]
            this.state = {
                word: query
            }
            this.startSearch(query)
        } else {
            this.state = {
                word: ''
            }
        }
        this.routeChange = this.routeChange.bind(this);
        this.signOut = this.signOut.bind(this);
        this.startSearch = this.startSearch.bind(this);
    }

    componentDidUpdate(prevProps) {
        const res = this.props.location.pathname.match("/search/(.*)")
        if (this.props.location.pathname !== prevProps.location.pathname && !res) {
            this.setState({ word: '' });
        }
    }
 ```


  
