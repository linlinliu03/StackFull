# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

User.destroy_all
Question.destroy_all
Answer.destroy_all
Upvote.destroy_all
Downvote.destroy_all
  100.times do 
    name = Faker::Name.unique.name
    email = Faker::Internet.unique.email
    password = Faker::Internet.password(min_length: 6)
    User.create!({username:name, email:email, password: password})
  end 

  # Jen = User.create!({username:"Jen", email:"jen@gamil.com", password: 123456789})
  # Pan = User.create!({username:"Pan", email:"pan@gamil.com", password: 1234567890})
  Tom = User.create!({username:"Tom", email:"tom@gamil.com", password: 1234567})
  # Tom = User.create!({username:"Tom", email:"tom@gmail.com", password: 12345678900})

  ids = User.ids


  question1 = Question.create({user_id: ids.sample, title: "What do these three dots in React do?", body: "What does the ... do in this React (using JSX) code and what is it called?"})
  question2 = Question.create({user_id: ids.sample, title: "Cannot Call Mixin Function from Initialize - Ruby", body: "I have a class called Amazon. When I instantiate that class I try to call a block function that I have in an helper function that I extended in my class. When I call this function from within the initialize function, I get the error: undefined method 'api_caller' for Class:Class. When I call the function outside of the initialize function everything works as expected. I assume this has something to do with the way objects are built in Ruby but I don't know how to get around the error."})
 
  question4 = Question.create({user_id: ids.sample, title: "How to dispatch a Redux action with a timeout?", body: "I have an action that updates notification state of my application. Usually, this notification will be an error or info of some sort. I need to then dispatch another action after 5 seconds that will return the notification state to initial one, so no notification. The main reason behind this is to provide functionality where notifications disappear automatically after 5 seconds. I had no luck with using setTimeout and returning another action and can't find how this is done online. So any advice is welcome."})
  
  
  
  question8 = Question.create({user_id:ids.sample, title: "Is react-redux required to use with redux-persist?", body:"I'm using React-native and Redux, but my app is very small and simple, so I thought that redux-react isn't necessary overhead, so I didn't use it. I just import store whenever I need because it is a singleton anyways. But now with redux-persist I'm getting an error from App.js, so I guess it might be because I don't use store Provider. Is it true?"})
  question9 = Question.create({user_id:ids.sample, title: "Redux Watch not responding to changes in redux store", body:"I am trying to monitor the change in a redux store attribute by subscribing to the change using redux watch. For one attribute it works fine. For another, I am making an API request in the reducer (can't make async requests in the actions). I have verified that the redux state does indeed get updated by creating a button to display the new information. However, my component isn't actually subscribing to the change. Does anyone know why this is?"})
  
  
  
  
  question14 = Question.create({user_id:ids.sample, title: "What command should I run in terminal to build a chrome application with react?", body:"I've tried to build this chrome extension found on github using 'npm install' and 'npm run build' but it doesn't create it correcly. What command should I run to compile/build it?"})
  question15 = Question.create({user_id:ids.sample, title: "How to set the value into 0 when there's no input and seperate data based on date in angular", body:"how to segregate the data and display the PRN children based on the date for example january then if there's a data which is machine 1 then have assetCode: PRN it will display on the children header and then it will display the value if there's another machine 2 then have assetCode: PRN1 it will added on january children. then if the machine 1 have no assetCode: PRN1 then it will set at 0, same as machine 2"})
  question16 = Question.create({user_id:ids.sample, title: "Process.Start() results in Access Denied exception despite Full Control for Everyone group", body:"My project output contains an executable called key_gen.exe that I'm trying to run. The executable is not built by the project, but copied in after the fact. With the code below I receive an Access Denied exception."})
  question17 = Question.create({user_id:ids.sample, title: "How can I convert bootstrap template with rails application?", body:"I downloaded bootstrap theme files, it includes the static HTML, CSS and js files. If I'm using the same bootstrap theme in rails app, how can I integrate those files with rails application"})
  question18 = Question.create({user_id:ids.sample, title: "Is it possible that Ruby Marshallng may work differently with different versions of ruby?", body:"I need to send complex object( EbayAPI object may have big amount of data) to sidekiq. So, marshaling looks like a good solution. What I am afraid of: Is it possible that Ruby Marshaling may work differently with different versions of ruby? So, one day I will update ruby version, and due load marshaled object the original object would be not the same, as before marshaled, is it possible?"})
  question19 = Question.create({user_id:ids.sample, title: "Auto generate PIN number for gravity form to unlock fields for members using paid membership pro", body:"Basically, I’m using paid membership pro, but I need to send a PIN number to after approving them, the PIN number to unlock last field before submitting forms ,after completion the dorm will go to different members as pdf. Any help Thanks in advance"})
  question20 = Question.create({user_id:ids.sample, title: "How can I allow a user to only access a view once every 30 minutes in Django?", body:"I am building an app that lets users update a webpage, but I want to restrict any user from being able to make updates every 20-30 minutes. Would I be able to simply add this logic to a view definition?"})
  question21 = Question.create({user_id:ids.sample, title: "How do I add .cpp included files to the dependencies in android.mk?", body:"In our Android project, we have several tens of C and CPP files which we #include through one container file for the build. The container file is listed in LOCAL_SRC_FILES, since that's what's compiled. However, when I edit one of the included .cpp files, that doesn't seem to trigger a build. If I were in total control of the make file, I'd just include all those files as dependencies for the relevant compile step. However, android.mk handles making all those compile dependencies in general, so I don't know where to insert them."})
  question22 = Question.create({user_id:ids.sample, title: "How does tail recursion really help over traditional recursion?", body:"I was reading up about the difference between tail recursion and Traditional recursion and find it mentioned that Tail Recursion however is a form of recursion that doesn’t use any stack space, and thus is a way to use recursion safely."})
  question23 = Question.create({user_id:ids.sample, title: "How do you configure multiple-platform C programming in Code?", body:"I am working on a C project. Some files are meant to be cross-platform, and some are for particular platforms in different directories. I'd like to use Visual Studio Code to at least write and read all the files. I already have header files for different platforms on my system and I'd like to find a way to configure this project so that macOS files use macOS headers with commonly defined macOS macros, and windows files use Windows headers with commonly defined Windows macros, and shared files using whatever platform I choose. Is this possible?"})
  question24 = Question.create({user_id:ids.sample, title: "I want to downgrade my application target sdk version 29 to 28 can google play console allowed this?", body:"I just submitted my application with target sdk version 29 but i am facing some crashes can i downgrade it to 28 and submit it again?"})
  question25 = Question.create({user_id:ids.sample, title: "Is there a simpler syntax for member decorators for methods in Python 3?", body:"I changed a class which had a function that had to be ran prior to running a number of other functions. The function is now a decorator. But the syntax, which I came up with, seems very unintuitive."})
  question26 = Question.create({user_id:ids.sample, title: "Programmatically navigate using react router", body:"With react-router I can use the Link element to create links that are natively handled by react router."})
  question27 = Question.create({user_id:ids.sample, title: "Loop inside React JSX", body:"I realize and understand why this isn't valid JSX, since JSX maps to function calls. However, coming from template land and being new to JSX, I am unsure how I would achieve the above (adding a component multiple times)."})
  question28 = Question.create({user_id:ids.sample, title: "What is the difference between React Native and React?", body:"I have started to learn React out of curiosity and wanted to know the difference between React and React Native - though could not find a satisfactory answer using Google. React and React Native seems to have the same format. Do they have completely different syntax?"})
  question29 = Question.create({user_id:ids.sample, title: "What is the difference between state and props in React?", body:"I was watching a Pluralsight course on React and the instructor stated that props should not be changed. I'm now reading an article (uberVU/react-guide) on props vs. state and it says"})
  question30 = Question.create({user_id:ids.sample, title: "React js onClick can't pass value to method", body:"I want to read the onClick event value properties. But when I click on it, I see something like this on the console:"})
  question31 = Question.create({user_id:ids.sample, title: "Show or hide element in React", body:"I am messing around with React.js for the first time and cannot find a way to show or hide something on a page via click event. I am not loading any other library to the page, so I am looking for some native way using the React library. This is what I have so far. I would like to show the results div when the click event fires."})
  question32 = Question.create({user_id:ids.sample, title: "How do I conditionally add attributes to React components?", body:"I'm supposed to add required and readOnly attributes to form elements based on an Ajax call after render, but I can't see how to solve this since readOnly=false is not the same as omitting the attribute completely."})
  question33 = Question.create({user_id:ids.sample, title: "Hide keyboard in react-native", body:"If I tap onto a textinput, I want to be able to tap somewhere else in order to dismiss the keyboard again (not the return key though). I haven't found the slightest piece of information concerning this in all the tutorials and blog posts that I read."})
  question34 = Question.create({user_id:ids.sample, title: "React - changing an uncontrolled input", body:"Warning: MyForm is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component"})
  question35 = Question.create({user_id:ids.sample, title: "Can you force a React component to rerender without calling setState?", body:"I have an external (to the component), observable object that I want to listen for changes on. When the object is updated it emits change events, and then I want to rerender the component when any change is detected."})
  question36 = Question.create({user_id:ids.sample, title: "Why do we need middleware for async flow in Redux?", body:"According to the docs, Without middleware, Redux store only supports synchronous data flow. I don't understand why this is the case. Why can't the container component call the async API, and then dispatch the actions?"})
  question37 = Question.create({user_id:ids.sample, title: "How to dispatch a Redux action with a timeout?", body:"I have an action that updates notification state of my application. Usually, this notification will be an error or info of some sort. I need to then dispatch another action after 5 seconds that will return the notification state to initial one, so no notification. The main reason behind this is to provide functionality where notifications disappear automatically after 5 seconds."})
  question38 = Question.create({user_id:ids.sample, title: "Pros/cons of using redux-saga with ES6 generators vs redux-thunk with ES2017 async/await", body:"There is a lot of talk about the latest kid in redux town right now, redux-saga/redux-saga. It uses generator functions for listening to/dispatching actions."})
  question39 = Question.create({user_id:ids.sample, title: "Redux Saga hot reloading", body:"I was working on a React & Redux project. The project used to use webpack-dev-middleware and hot middleware to hot reload."})
  question40 = Question.create({user_id:ids.sample, title: "React with Redux? What about the 'context' issue?", body:"I normally post code related stuff on Stack, but this is more a question about what the general thoughts of the community are."})
  question41 = Question.create({user_id:ids.sample, title: "Programmatically navigate using react router", body:"With react-router I can use the Link element to create links that are natively handled by react router."})
  question42 = Question.create({user_id:ids.sample, title: "Understanding compose functions in redux", body:"I was trying to create a store in redux for which I am currently using following syntax:-"})
  question43 = Question.create({user_id:ids.sample, title: "mix redux-thunk with redux-observable", body:"I have an app using redux-thunk and want to try out redux-observable. Currently I have a thunk action creator that does the following:"})
  question44 = Question.create({user_id:ids.sample, title: "React/Redux - dispatch action on app load/init", body:"I have token authentication from a server, so when my Redux app is loaded initially I need make a request to this server to check whether user is authenticated or not, and if yes I should get token."})
  question45 = Question.create({user_id:ids.sample, title: "Ionic2 rc0 and redux/redux-thunk - create redux store with AoT", body:"Anyone has been able to build an app with redux and redux-thunk? In my case, it's working with ionic serve but failing with npm run build. I can't build for devices, it only works in browser."})
  question3 = Question.create({user_id: ids.sample, title: "Changing a MongoDB query into a Postgres query in Javascript", body: "I'm having a challenge converting this query. I have had success with others but this one combines multiple fields and I need some help. This is to get the dates to create a reservation."})
  question5 = Question.create({user_id:ids.sample, title: "Pros/cons of using redux-saga with ES6 generators vs redux-thunk with ES2017 async/await", body: "There is a lot of talk about the latest kid in redux town right now, redux-saga/redux-saga. It uses generator functions for listening to/dispatching actions. Before I wrap my head around it, I would like to know the pros/cons of using redux-saga instead of the approach below where I'm using redux-thunk with async/await."})
  question6 = Question.create({user_id:ids.sample, title: "What are differences between redux, react-redux, redux-thunk?", body: "I am using React + Flux. Our team is planning to move from flux to redux. Redux is very confusing for me coming from flux world. In flux control flow is simple from Components -> actions -> Store and store updates back components. Its simple and very clear. But in redux its confusing. There is no store here, yes there are some examples without using store. I went through several tutorials, it seems everyone has their own style of implementation. Some are using Containers and some are not. (I don't know this Containers concept and not able to understand what mapStateToProps, mapDispatchToProps does)."})
  question7 = Question.create({user_id:ids.sample, title: "Polymer-redux : How to store data in redux using polymer?", body: "I have created polymer app with redux. redux working fine, it stored data. but when I reload page it flush the data. how can I store data for next page? I want to store data in redux like local storage. Can anyone help me?"})
  question10 = Question.create({user_id:ids.sample, title: "Do I have to use firebase-redux firestore-redux to connect redux to firebase", body:"I already managed to connect firebase and firestore with redux without using firebase-redux and firestore-redux packages. What differences does it make to using them?"})
  question11 = Question.create({user_id:ids.sample, title: "How to pass in a react component into another react component to transclude the first component's content?", body:"Is there a way to pass one component into another react component? I want to create a model react component and pass in another react component in order to transclude that content."})
  question12 = Question.create({user_id:ids.sample, title: "When to use ES6 class based React components vs. functional ES6 React components?", body:"After spending some time learning React I understand the difference between the two main paradigms of creating components. My question is when should I use which one and why? What are the benefits/tradeoffs of one over the other?"})
  question13 = Question.create({user_id:ids.sample, title: "Use Python 3 to monitor a folder and see if files are being uploaded", body:"I am not trying to do a website, I want to have this python script running as a third-party application. I am trying to have the script monitor every file in the whole computer or in a specific folder to see if any file is being uploaded/read. One example would be uploading a file (such as test.txt) onto Google Drive, and I hope that my script could detect that. I don't really need information about the file, just to monitor if any is being uploaded. Is there any way to do this?"})
  
    ids3 = Question.ids

  answer1_1 = Answer.create!({user_id:ids.sample, body:"As you know ... are called Spread Attributes which the name represents it allows an expression to be expanded.", question_id:1})
  answer1_2 = Answer.create!({user_id:ids.sample, body:"There's another use for the three dots which is known as Rest Parameters and it makes it possible to take all of the arguments to a function in as one array.", question_id:1})
  answer1_3 = Answer.create!({user_id:ids.sample, body:"That's property spread notation. It was added in ES2018 (spread for arrays/iterables was earlier, ES2015), but it's been supported in React projects for along time via transpilation (as JSX spread attributes even though you could do it elsewhere, too, not just attributes).", question_id:1})
  answer3_1 = Answer.create!({user_id:ids.sample, body:"I came up with this: var getByDate = function (restId, date, callback)", question_id:3})
  answer4_1 = Answer.create!({user_id:ids.sample, body:"Don’t fall into the trap of thinking a library should prescribe how to do everything. If you want to do something with a timeout in JavaScript, you need to use setTimeout. There is no reason why Redux actions should be any different. Redux does offer some alternative ways of dealing with asynchronous stuff, but you should only use those when you realize you are repeating too much code. Unless you have this problem, use what the language offers and go for the simplest solution.", question_id:4})
  answer4_2 = Answer.create!({user_id:ids.sample, body:"As Dan Abramov said, if you want more advanced control over your async code, you might take a look at redux-saga. This answer is a simple example, if you want better explanations on why redux-saga can be useful for your application, check this other answer.", question_id:4})
  answer5_1 = Answer.create!({user_id:ids.sample, body:"The first thing to notice is that we're calling the api functions using the form yield call(func, ...args). call doesn't execute the effect, it just creates a plain object like {type: 'CALL', func, args}. The execution is delegated to the redux-saga middleware which takes care of executing the function and resuming the generator with its result.", question_id:5})
  answer5_2 = Answer.create!({user_id:ids.sample, body:"I will add my experience using saga in production system in addition to the library author's rather thorough answer.", question_id:5})
  answer6_1 = Answer.create!({user_id:ids.sample, body:"Note that containers / smart components vs. dumb components is just a good way to structure your app.", question_id:6})
  answer6_2 = Answer.create!({user_id:ids.sample, body:"bellow image demonstrates how data flow in redux : how the data flows through Redux? Advantages of Redux are listed below:", question_id:6})
  answer7_1 = Answer.create!({user_id:ids.sample, body:"If you’re making a SPA (Single Page Application), then you don’t have to store the data. You can use PolymerElements app-route for routing inside a SPA.", question_id:7})
  answer9_1 = Answer.create!({user_id:ids.sample, body:"In order to make async requests with redux you should look into redux middleware, like redux-thunk, redux-observables or redux-saga", question_id:9})
  answer10_1 = Answer.create!({user_id:ids.sample, body:"Those packages are their own opinionated integrations of the two libraries. If you agree with their opinions then they'll save you setup time, if you've already set things up and don't need them then adding them is unecessary.", question_id:10})
  answer11_1 = Answer.create!({user_id:ids.sample, body:"You can use this.props.children to render whatever children the component contains:", question_id:11})
  answer11_2 = Answer.create!({user_id:ids.sample, body:"Note that children is a special prop in React, and the example above is syntactic sugar and is (almost) equivalent to <Wrapper children={<App/>}/>", question_id:11})
  answer12_1 = Answer.create!({user_id:ids.sample, body:"You have the right idea. Go with functional if your component doesn't do much more than take in some props and render. You can think of these as pure functions because they will always render and behave the same, given the same props. Also, they don't care about lifecycle methods or have their own internal state.", question_id:12})
  answer12_2 = Answer.create!({user_id:ids.sample, body:"Always try to use stateless functions (functional components) whenever possible. There are scenarios where you'll need to use a regular React class:", question_id:12})
  answer13_1 = Answer.create!({user_id:ids.sample, body:"You can have a try watchdog", question_id:13})
  answer17_1 = Answer.create!({user_id:ids.sample, body:"a layout, e.g. app/view/layouts/application.html.erb (or use your preferred templating framework, I prefer haml/slim) and edit it to keep header/footer elements only (aka the repeating elements for all pages, or a set of pages)", question_id:17})
  answer18_1 = Answer.create!({user_id:ids.sample, body:"Note, however, that the binary format used by Marshal.dump and Marshal.load is version dependent, and newer versions of Ruby are not guaranteed to be able to read marshalled objects written by older versions of Ruby.", question_id:18})
  answer18_2 = Answer.create!({user_id:ids.sample, body:"I'd recently a problem with Rails cache during migration from Rails 3.2 to Rails 4. App was unable to read AR models from the cache (same time simpler objects like hashes, array worked well). But ruby was the same.", question_id:18})
  answer20_1 = Answer.create!({user_id:ids.sample, body:"I would do something like this. I didnt test it but it should be close.Basically use request.session to keep track of last update.", question_id:20})
  answer20_2 = Answer.create!({user_id:ids.sample, body:"I figured out a pretty simple way to do this. I added a field to my model which will hold a value 10 minutes from the time the user posts an update. I can then just reference that field and check if the current time is greater(later) than 10 minutes after the users last update.", question_id:20})
  answer21_1 = Answer.create!({user_id:ids.sample, body:"And I include to in android.mk file like this", question_id:21})
  answer22_1 = Answer.create!({user_id:ids.sample, body:"The trick is that if the compiler notices the tail recursion, it can compile a goto instead. It will generate something like the following code:", question_id:22})
  answer22_2 = Answer.create!({user_id:ids.sample, body:"A function call is tail recursive when function call (recursive) is performed as final action. Since the current recursive instance is done executing at that point, no need to maintaining its stack frame.", question_id:22})
  answer23_1 = Answer.create!({user_id:ids.sample, body:"You'll need to use predefined preprocessor macros for the platform you are compiling for. For example, the predefined preprocessor macros (and examples) for Microsoft Visual Studio 2019 are defined here. Similarly, you will have to search for the predefined macros for each of the platform you are looking for.", question_id:23})
  answer24_1 = Answer.create!({user_id:ids.sample, body:"Yes, you can upload a new version that downgrades your targetSdkVersion - the Google Play target API level requirement only requires targeting API 28 or higher.", question_id:24})
  answer25_1 = Answer.create!({user_id:ids.sample, body:"Below is a runnable example that illustrates my suggestion of how it would be possible to move the decorator function completely out of the class:", question_id:25})

  answer26_1 = Answer.create!({user_id:ids.sample, body:"There is a new useHistory hook in React Router >5.1.0 if you are using React >16.8.0 and functional components.", question_id:26})
  answer26_2 = Answer.create!({user_id:ids.sample, body:"You can use the new useHistory hook on Functional Components and Programmatically navigate:", question_id:26})
  answer26_3 = Answer.create!({user_id:ids.sample, body:"For the most recent release (v2.0.0-rc5), the recommended navigation method is by directly pushing onto the history singleton. You can see that in action in the Navigating outside of Components doc.", question_id:26})
  
  answer27_1 = Answer.create!({user_id:ids.sample, body:"Think of it like you're just calling JavaScript functions. You can't use a for loop where the arguments to a function call would go:", question_id:27})
  answer27_2 = Answer.create!({user_id:ids.sample, body:"Not sure if this will work for your situation, but often map is a good answer.", question_id:27})
  answer27_3 = Answer.create!({user_id:ids.sample, body:"If you don't already have an array to map() like @FakeRainBrigand's answer, and want to inline this so the source layout corresponds to the output closer than @SophieAlpert's answer:", question_id:27})
  
  answer28_1 = Answer.create!({user_id:ids.sample, body:"React Native is a mobile framework that compiles to native app components, allowing you to build native mobile applications for different platforms (iOS, Android, and Windows Mobile) in JavaScript that allows you to use ReactJS to build your components, and implements ReactJS under the hood.", question_id:28})
  answer28_2 = Answer.create!({user_id:ids.sample, body:"With React Native it is possible to mimic the behavior of the native app in JavaScript and at the end, you will get platform specific code as the output. You may even mix the native code with the JavaScript if you need to optimize your application further.", question_id:28})
  answer28_3 = Answer.create!({user_id:ids.sample, body:"So basically React is UI library for the view of your web app, using javascript and JSX, React native is an extra library on the top of React, to make a native app for iOS and Android devices.", question_id:28})
  
  answer29_1 = Answer.create!({user_id:ids.sample, body:"Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to React.createElement() or, if you're using JSX, the more familiar tag attributes.", question_id:29})
  answer29_2 = Answer.create!({user_id:ids.sample, body:"A common pattern is to create several stateless components that just render data, and have a stateful component above them in the hierarchy that passes its state to its children via props. The stateful component encapsulates all of the interaction logic, while the stateless components take care of rendering data in a declarative way.", question_id:29})
  answer29_3 = Answer.create!({user_id:ids.sample, body:"State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function.", question_id:29})
  
  answer30_1 = Answer.create!({user_id:ids.sample, body:"Extract it into a sub-component. The problem with using an arrow function in the render call is it will create a new function every time, which ends up causing unneeded re-renders.", question_id:30})
  answer30_2 = Answer.create!({user_id:ids.sample, body:"There are nice answers here, and i agree with @Austin Greco (the second option with separate components). There is another way i like, currying. What you can do is create a function that accept a parameter (your parameter) and returns another function that accepts another parameter (the click event in this case). then you are free to do with it what ever you want.", question_id:30})
  answer30_3 = Answer.create!({user_id:ids.sample, body:"Basically, (for any that don't know) since onClick is expecting a function passed to it, bind works because it creates a copy of a function. Instead we can pass an arrow function expression that simply invokes the function we want, and preserves this. You should never need to bind the render method in React, but if for some reason you're losing this in one of your component methods:", question_id:30})
  
  answer31_1 = Answer.create!({user_id:ids.sample, body:"The key is to update the state of the component in the click handler using setState. When the state changes get applied, the render method gets called again with the new state:", question_id:31})
  answer31_2 = Answer.create!({user_id:ids.sample, body:"Here is my approach using ES6. While accepted answer is correct, it's quite outdated.", question_id:31})
  answer31_3 = Answer.create!({user_id:ids.sample, body:"There are several great answers already, but I don't think they've been explained very well and several of the methods given contain some gotchas that might trip people up. So I'm going to go over the three main ways (plus one off-topic option) to do this and explain the pros and cons. I'm mostly writing this because Option 1 was recommended a lot and there's a lot of potential issues with that option if not used correctly.", question_id:31})
  
  answer32_1 = Answer.create!({user_id:ids.sample, body:"Apparently, for certain attributes, React is intelligent enough to omit the attribute if the value you pass to it is not truthy. For example:", question_id:32})
  answer32_2 = Answer.create!({user_id:ids.sample, body:"Depending on the condition, either {bsStyle: 'success'} or {} will be returned. The spread operator will then spread the properties of the returned object to Button component. In the falsy case, since no properties exist on the returned object, nothing will be passed to the component.", question_id:32})
  answer32_3 = Answer.create!({user_id:ids.sample, body:"I still prefer using the regular way of passing props down because it is more readable (in my opinion) in the case of not have any conditionals.", question_id:32})
  
  answer33_1 = Answer.create!({user_id:ids.sample, body:"The problem with keyboard not dismissing gets more severe if you have keyboardType='numeric', as there is no way to dismiss it.", question_id:33})
  answer33_2 = Answer.create!({user_id:ids.sample, body:"If you have something other than a ScrollView and you'd like any presses to dismiss the keyboard, you can use a simple TouchableWithoutFeedback and have the onPress use React Native's utility library dismissKeyboard to dismiss the keyboard for you.", question_id:33})
  answer33_3 = Answer.create!({user_id:ids.sample, body:"This way, the keyboard gets dismissed the moment I tap somewhere else. This might be an issue with react-native, but tap events only seem to be handled with ScrollViews which leads to the described behaviour.", question_id:33})
  
  answer34_1 = Answer.create!({user_id:ids.sample, body:"That condition is not initially met in your example because this.state.name is not initially set. Therefore, the input is initially uncontrolled. Once the onChange handler is triggered for the first time, this.state.name gets set. At that point, the above condition is satisfied and the input is considered to be controlled. This transition from uncontrolled to controlled produces the error seen above.", question_id:34})
  answer34_2 = Answer.create!({user_id:ids.sample, body:"When you first render your component, this.state.name isn't set, so it evaluates to undefined, and you end up passing value={undefined} to your input.", question_id:34})
  answer34_3 = Answer.create!({user_id:ids.sample, body:"I know others have answered this already. But one of the very important factor here that may help other people experiencing similar issue:", question_id:34})
  
  answer35_1 = Answer.create!({user_id:ids.sample, body:"In your component, you can call this.forceUpdate() to force a rerender.", question_id:35})
  answer35_2 = Answer.create!({user_id:ids.sample, body:"forceUpdate should be avoided because it deviates from a React mindset. The React docs cite an example of when forceUpdate might be used:", question_id:35})
  answer35_3 = Answer.create!({user_id:ids.sample, body:"Actually, forceUpdate() is the only correct solution as setState() might not trigger a re-render if additional logic is implemented in shouldComponentUpdate() or when it simply returns false.", question_id:35})
  
  answer36_1 = Answer.create!({user_id:ids.sample, body:"There is nothing wrong with this approach. It’s just inconvenient in a large application because you’ll have different components performing the same actions, you might want to debounce some actions, or keep some local state like auto-incrementing IDs close to action creators, etc. So it is just easier from the maintenance point of view to extract action creators into separate functions.", question_id:36})
  answer36_2 = Answer.create!({user_id:ids.sample, body:"When you have a thunk in your hands, like an IO monad or a promise, you can't easily know what it will do once you execute. The only way to test a thunk is to execute it, and mock the dispatcher (or the whole outside world if it interacts with more stuff...).", question_id:36})
  answer36_3 = Answer.create!({user_id:ids.sample, body:"It occurs to me that part of this conundrum is a limitation of react-redux. The first argument to connect gets a state snapshot, but not dispatch. The second argument gets dispatch but not the state. Neither argument gets a thunk that closes over the current state, for being able to see updated state at the time of a continuation/callback.", question_id:36})
  
  answer37_1 = Answer.create!({user_id:ids.sample, body:"Don’t fall into the trap of thinking a library should prescribe how to do everything. If you want to do something with a timeout in JavaScript, you need to use setTimeout. There is no reason why Redux actions should be any different.", question_id:37})
  answer37_2 = Answer.create!({user_id:ids.sample, body:"The general idea is that Redux-saga offers an ES6 generators interpreter that permits you to easily write async code that looks like synchronous code (this is why you'll often find infinite while loops in Redux-saga). Somehow, Redux-saga is building its own language directly inside Javascript. Redux-saga can feel a bit difficult to learn at first, because you need basic understanding of generators, but also understand the language offered by Redux-saga.", question_id:37})
  answer37_3 = Answer.create!({user_id:ids.sample, body:"You can do this with redux-thunk. There is a guide in redux document for async actions like setTimeout.", question_id:37})
  
  answer38_1 = Answer.create!({user_id:ids.sample, body:"The first thing to notice is that we're calling the api functions using the form yield call(func, ...args). call doesn't execute the effect, it just creates a plain object like {type: 'CALL', func, args}. The execution is delegated to the redux-saga middleware which takes care of executing the function and resuming the generator with its result.", question_id:38})
  answer38_2 = Answer.create!({user_id:ids.sample, body:"I will add my experience using saga in production system in addition to the library author's rather thorough answer.", question_id:38})
  answer38_3 = Answer.create!({user_id:ids.sample, body:"Sagas are great and powerful tool. However with the power comes responsibility. When your application grows you can get easily lost by figuring out who is waiting for the action to be dispatched, or what everything happens when some action is being dispatched. On the other hand thunk is simpler and easier to reason about. Choosing one or another depends on many aspects like type and size of the project, what types of side effect your project must handle or dev team preference. In any case just keep your application simple and predictable.", question_id:38})
  
  answer39_1 = Answer.create!({user_id:ids.sample, body:"I'm working on a project with redux and redux-saga (but not react). I implemented the hot reloading of sagas using the sagaMiddleware.run() but you have to handle the module reloading and replace reducers and sagas as indicated in the link you provided (https://github.com/reactjs/react-redux/releases/tag/v2.0.0).", question_id:39})
  answer39_2 = Answer.create!({user_id:ids.sample, body:"Update for redux-saga package in version 1.0.0 and newer:", question_id:39})
  
  answer40_1 = Answer.create!({user_id:ids.sample, body:"Context is an advanced feature and is subject to change. In some cases its conveniences outweigh its downsides so some libraries like React Redux and React Router choose to rely on it despite the experimental nature.", question_id:40})
  answer40_2 = Answer.create!({user_id:ids.sample, body:"I don't know about others, but I prefer using react-redux's connect decorator to wrap my components so that only the props from the store I need are passed into my component. This justifies the use of context in a sense because I am not consuming it (and I know, as a rule, any code that I am in charge of will not consume it).", question_id:40})
  answer40_3 = Answer.create!({user_id:ids.sample, body:"There's an npm module that makes it really easy to add redux to the react context", question_id:40})
  
  answer41_1 = Answer.create!({user_id:ids.sample, body:"There is a new useHistory hook in React Router >5.1.0 if you are using React >16.8.0 and functional components.", question_id:41})
  answer41_2 = Answer.create!({user_id:ids.sample, body:"You can use the new useHistory hook on Functional Components and Programmatically navigate:", question_id:41})
  answer41_3 = Answer.create!({user_id:ids.sample, body:"For the most recent release (v2.0.0-rc5), the recommended navigation method is by directly pushing onto the history singleton. You can see that in action in the Navigating outside of Components doc.", question_id:41})
  
  answer42_1 = Answer.create!({user_id:ids.sample, body:"Compose is used when you want to pass multiple store enhancers to the store. Store enhancers are higher order functions that add some extra functionality to the store. The only store enhancer which is supplied with Redux by default is applyMiddleware however many other are available.", question_id:42})
  
  answer43_1 = Answer.create!({user_id:ids.sample, body:"But the idea of redux-observable is action$ in and action$ out. So you will need to write all your async logic in epics, and don't have access to the returned observable which is action stream.", question_id:43})
  
  answer44_1 = Answer.create!({user_id:ids.sample, body:"You can dispatch an action in Root componentDidMount method and in render method you can verify auth status.", question_id:44})
  answer44_2 = Answer.create!({user_id:ids.sample, body:"I've not been happy with any solutions that have been put forward for this, and then it occurred to me that I was thinking about classes needing to be rendered. What about if I just created a class for startup and then push things into the componentDidMount method and just have the render display a loading screen?", question_id:44})
  answer44_3 = Answer.create!({user_id:ids.sample, body:"I solved this problem using react-router onEnter props. This is how code looks like:", question_id:44})
  
  answer45_1 = Answer.create!({user_id:ids.sample, body:"I was able to solve it with the following change in app.module.ts", question_id:45})


  ids2 = Answer.ids
  

  store1 = Hash.new { |h, k| h[k] = [] }
  store2 = Hash.new { |h, k| h[k] = [] }

  1000.times do 
    user_id = ids.sample
    answer_id = ids2.sample
    if !store1[answer_id].include?(user_id)
       store1[answer_id].push(user_id)
       Upvote.create!({user_id:user_id, answer_id:answer_id})
    end 
  end 

  1000.times do 
    user_id = ids.sample
    answer_id = ids2.sample
    if !store2[answer_id].include?(user_id)
       store2[answer_id].push(user_id)
       Downvote.create!({user_id:user_id, answer_id:answer_id})
    end  
  end 
end