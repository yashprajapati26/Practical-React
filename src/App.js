import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  function MyFun(name) {
    console.log("My fun called ....Hello", name);
  }
  return ( 
    <div>
      <Header title="Blogger">
        <li className="mx-5 text-lg"><Link to="">Home</Link></li>
        <li className="mx-5 text-lg"><Link to="about">About</Link></li>
        <li className="mx-5 text-lg"><Link to="login">Login</Link></li>
        <li className="mx-5 text-lg"><Link to="signup">Signup</Link></li>
      </Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="login" element={<Login title="Login" btnname="Login"></Login>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="about" element={<About/>} />
        {/* <Route path="subscribe" element={<Subscribe/>} /> */}
      </Routes>
      <Footer title="Blogger"></Footer>
      {/* <LifeCycle/> */}
      {/* <Provider store={store}> */}

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
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <div className="bg-red-600">
              <p>Cake Name : Cup Cake </p>
              <AddCake />
      </div> */}

      {/* <PostListClass /> */}

      {/* function pass in props */}
      {/* <Footer clickHandler={MyFun} /> */}

      {/* </Provider> */}
    </div>
  );
}

export default App;
