import "./App.css";
import Counter from "./components/Counter";
import ErrorBoundry from "./components/ErrorBoundry";
import ErrorHandling from "./components/ErrorHandling";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Portal from "./components/Portal";
import User from "./components/User";
import CountClick from "./components/CountClick";
import CompA from "./components/context/CompA";
import { UserProvider } from "./components/context/userContext";
import PostList from "./components/axios/PostList";
import PostListClass from "./components/axios/PostListClass";
import UseState from "./components/Hooks/UseState";
import UseEffecf from "./components/Hooks/UseEffect";
import UseReducer from "./components/Hooks/UseReducer";
import {Provider} from 'react-redux'
import store from './redux/store'
import AddCake from "./components/redux/AddCake"
function App() {
  function MyFun(name) {
    console.log("My fun called ....Hello", name);
  }
  return (
    <Provider store={store}>
    <div className="h-screen">
      <Header title="React App">
        <li className="mx-5 text-lg">Home</li>
        <li className="mx-5 text-lg">About</li>
        <li className="mx-5 text-lg">Login</li>
        <li className="mx-5 text-lg">Signup</li>
      </Header>
      <div className="flex flex-col justify-center items-center">
        {/* <Login btnname="Submit" title="Login" /> */}
        {/* <Home></Home> */}
        {/* <Portal></Portal>
        <ErrorBoundry>
          <ErrorHandling heroName="Batman" />
          <ErrorHandling heroName="Superman" />
          <ErrorHandling heroName="Joker" />
        </ErrorBoundry> */}
        {/* <User render={(isLoggedIn)=> isLoggedIn?'yash':'Guest'}/> */}
        {/* render props example  */}
        {/* <Counter
          render={(count, incrementCount) => (
            <CountClick count={count} incrementCount={incrementCount} />
          )}
        /> */}
        {/* <UserProvider value="Yash Prajapati, Software Engineer">
          <CompA />
        </UserProvider> */}

        {/* <PostList></PostList> */}
        <UseState />
        <UseReducer/>
        <div>
          <p>Cake Name : Cup Cake </p>
          <AddCake/>
        </div>
        
        {/* <PostListClass /> */}
      </div>

      {/* function pass in props */}
      {/* <Footer clickHandler={MyFun} /> */}
    </div>
    </Provider>

  );
}

export default App;
