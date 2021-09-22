import React, { Component } from "react";
import colors from "./color.json";

export class LocalObj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getColor: [],
    };
  }

  handleChange = (ev) => {
    let dataColor = ev.target.value;
    const filterCol = colors.filter(
      (colorItem) => colorItem.id === parseInt(dataColor)
    );
    this.setState({
      getColor: filterCol[0],
    });
  };

  render() {
    let { getColor } = this.state;
    return (
      <div>
        <select onChange={(e) => this.handleChange(e)}>
          {colors.map((colorItem) => (
            <option key={colorItem.id} value={colorItem.id}>
              {colorItem.name}
            </option>
          ))}
        </select>
        <div className={"box " + getColor.name}></div>
      </div>
    );
  }
}

export default LocalObj;
