import React, { Component } from "react";
import { mappingString } from "./utils";

export class DataArr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      color: "black",
      arrDats: [],
    };
  }
  handleClick = () => {
    let { data } = this.state;
    let arrData = mappingString(data);
    this.setState({
      arrDats: arrData,
    });
  };
  renderVal(param) {
    return param % 2 === 0 ? param : "*";
  }
  getActive(param) {
    return param % 2 === 1 ? "" : "-active";
  }

  render() {
    let { arrDats } = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ data: e.target.value })}
        />
        <button onClick={this.handleClick}>Click me!</button>
        <ul>
          {arrDats.map((dataItem, i) => (
            <li className={"list" + this.getActive(i)} key={i}>
              {this.renderVal(dataItem)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataArr;
