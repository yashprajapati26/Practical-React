import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Subscribe from "./pages/Subscribe";
import LifeCycle from "./components/LifeCycle";
import ErrorHandling from "./components/ErrorHandling";
import ErrorBoundry from "./components/ErrorBoundry";
import Portal from "./components/Portal";
import { useState } from "react";
import Counter from "./components/Hoc/Counter";
import Hoc from "./components/Hoc/Hoc";
import CompA from "./components/context/CompA";
// Enhance DisplayText with the withUpperCase HOC
const CounterComp = Hoc(Counter);

function App() {
  function MyFun(name) {
    console.log("My fun called ....Hello", name);
  }
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div>
      {/* ---- HOC Concept ----- */}
      <div className="border border-black p-5 mx-56 m-5">
        <h1 className="text-center text-5xl py-5">HOC Concept</h1>
        <CounterComp text="Product"></CounterComp>
        <CounterComp text="Sells"></CounterComp>
      </div>
      {/* Render Props Pattern */}
      <Login
        title="Render Props Pattern"
        btnname="Check"
        renderPropFunction={(value) => (
          <span className="translate-x-2 text-center py-2">
            Welcome, {value}
          </span>
        )}
      />
      {/* ---- LifeCycle ----- */}
      <LifeCycle />
      {/* ---- End LifeCycle ----- */}
      {/* ------ Routing  ------ */}{" "}
      <Header title="Blogger">
        <li className="mx-5 text-lg">
          <Link to="">Home</Link>
        </li>
        <li className="mx-5 text-lg">
          <Link to="about">About</Link>
        </li>
        <li className="mx-5 text-lg">
          <Link to="login">Login</Link>
        </li>
        <li className="mx-5 text-lg">
          <Link to="signup">Signup</Link>
        </li>
      </Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="login"
          element={
            <Login
              title="Login"
              btnname="Login"
              renderPropFunction={(value) => (
                <span className="translate-x-2 text-center py-2">
                  Welcome, {value}
                </span>
              )}
            ></Login>
          }
        />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route path="subscribe" element={<Subscribe />} />
      </Routes>
      <Footer title="Blogger"></Footer>
      {/* ####  end routing concept #### */}
      {/* ----- Error Handling Concept ----- */}
      <ErrorBoundry>
        <ErrorHandling heroName="Batman" />
        <ErrorHandling heroName="Superman" />
        {/* <ErrorHandling heroName="Joker" /> */}
        {/* <ErrorHandling heroName="Mongambo" /> */}
        {/* <ErrorHandling heroName="Gabbar Sing" /> */}
      </ErrorBoundry>
      {/* ----- End Error Handling Concept ----- */}
      {/* contextAPI conccept  */}
      <CompA />
      {/* End contextAPI */}
      {/* portal concept */}
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>
      {showModal && (
        <>
          {/* Here's the portal */}
          <Portal
            title="My Modal"
            content="This is the modal content"
            onClose={closeModal}
          ></Portal>
        </>
      )}
      {/* End portal concept */}
      {/* <Provider store={store}> */}
      {/* <Login btnname="Submit" title="Login" /> */}
      {/* <Home></Home> */}
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
