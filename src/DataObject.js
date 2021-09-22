import React, { Component } from "react";

export class DataObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      isErr: true,
      err: "",
      selectedVal: [],
      data: null,
    };
  }
  componentDidMount() {
    this.apiGet();
  }

  apiGet() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((dataItem) => {
        this.setState({
          datas: dataItem,
        });
        console.log(this.state.datas);
      })
      .catch((e) => {
        this.setState({
          isErr: true,
          err: "Something went wrong",
        });
      });
  }

  getActive(param) {
    return param % 2 === 1 ? "-active" : "";
  }

  selectedView = (ev) => {
    let data = ev.target.value;
    let { datas } = this.state;
    const filterData = datas.filter(
      (dataItem) => dataItem.id === parseInt(data)
    );
    console.log(filterData);
    this.setState({
      selectedVal: filterData[0],
    });
  };

  render() {
    let { datas, selectedVal } = this.state;

    return (
      <div>
        <select onChange={(e) => this.selectedView(e)}>
          {datas.map((dataItem) => (
            <option
              className={"list" + this.getActive(dataItem.id)}
              key={dataItem.id}
              value={dataItem.id}
            >
              {dataItem.name}
            </option>
          ))}
        </select>
        {/* <button onClick={this.selectedView}>Submit</button> */}
        <ul className={"list" + this.getActive(selectedVal.id)}>
          <li>{selectedVal.id}</li>
          <li>{selectedVal.name}</li>
          <li>{selectedVal.username}</li>
        </ul>
      </div>
    );
  }
}

export default DataObject;
