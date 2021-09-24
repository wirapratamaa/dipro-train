import React, { Component } from "react";

export class RenderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataItem: this.props.dataItem,
    };
  }
  renderItem = () => {
    const { address } = this.state.dataItem;
    return address.map((i, index) => {
      const { city } = i;
      // return { city };
      return <div key={index}>{city}</div>;
    });
  };
  render() {
    return <div>{this.renderItem()}</div>;
  }
}

export default RenderItem;
