//import required react modules
import React from 'react';

//instead of creating a class for a component, we can simply do functions
export function Square(props){
  //notice how it is not this.props anymore...
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

/*
class Square extends React.Component {

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }

}*/
