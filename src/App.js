import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
  function MyFun(name){
    console.log("My fun called ....Hello", name);
  }
  return (
    <div className="h-screen">
      <Header title="React App">
        <li className="mx-5 text-lg">Home</li>
        <li className="mx-5 text-lg">About</li>
        <li className="mx-5 text-lg">Login</li>
        <li className="mx-5 text-lg">Signup</li>
      </Header>
      <div className="flex justify-center items-center">
        <Login btnname="Submit" title="Login" />
        {/* <Home></Home> */}
      </div>
         
      {/* function pass in props */}
      <Footer clickHandler={MyFun} />
    </div>
  );
}

export default App;
