import React, { Component } from "react";
import todos from "./todos.json";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: todos,
      newTodo: "",
    };
  }
  handleInput = (ev) => {
    let d = ev.target.value;
    this.setState({
      newTodo: d,
    });
  };

  render() {
    console.log(this.state.newTodo);
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.handleInput(e)}
          //   value={this.state.newTodo}
          placeholder="Add todo"
        />
        <button>add Todo</button>
        <div className="result">{this.state.newTodo}</div>
      </div>
    );
  }
}

export default Todo;
