import React, { Component } from "react";
import AFcomponent from "./AFcomponent";

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
      name: "Alexander",
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.counter = this.counterClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }
  counterClick(event) {
    if (event == "plus"){
        this.setState((state) => ({
            counter: ++state.counter
        }))
    }else if(event == "minus"){
        this.setState((state) => ({
            counter: --state.counter
        }))
    }else if(event == "reset"){
        this.setState((state) => ({
            counter: 0
        }))
    }
  }
  render() {
    if (this.state.visibility) {
      return (  
        <div>
          <button onClick={() => this.counterClick("plus")}>Plus</button>
          <button onClick={() => this.counterClick("minus")}>Minus</button>
          <button onClick={() => this.counterClick("reset")}>Reset</button>
          <h2>Counter: {this.state.counter}</h2>
          <button onClick={this.handleClick}>Hide</button>
          <h1>Class Component! Name: {this.state.name}</h1>
          <AFcomponent />
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.handleClick}>Show</button>
        </div>
      );
    }
  }
}

Ccomponent.defaultProps = { name: "Dmitriy" };
