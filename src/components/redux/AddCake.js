import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux/index";
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
      <div>AddCake {props.numOfCakes}</div>
      <button onClick={props.buyCake} className="bg-red-400 p-1 border text-white"> Add </button>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCake);
