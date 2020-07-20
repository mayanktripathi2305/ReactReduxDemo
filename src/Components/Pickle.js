import React from "react";
import { buyPickle } from "../Redux/Pickle/pickleAction";
import { connect } from "react-redux";

const Pickle = (props) => {
  return (
    <div>
      <h1>Number of Pickles - {props.numberOfPickles}</h1>
      <button onClick={props.buyPickles}>Buy Pickle</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfPickles: state.number_of_pickles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPickles: () => dispatch(buyPickle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pickle);
