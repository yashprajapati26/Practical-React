import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux/index";
import store from "../../redux/store";
   


const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

function AddCake(props) {
  return (
    <>
    <p> store : {store.dispatch(buyCake())}  </p>
      <div>AddCake {props.numOfCakes}</div>
      <button onClick={props.buyCake} className="bg-red-400 p-1 border text-white"> Add </button>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCake);
