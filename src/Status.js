import React, { Component } from "react";
import { coloring } from "./utils";

export class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      err: "",
      isErr: false,
      isToggle: true,
    };
  }
  componentDidMount() {
    this.apiGet();
  }

  addKeyValues = (data) => {
    data.map((item) => {
      item["status"] = false;
      return true;
    });
    this.setState({ datas: this.state.datas });
  };

  handleDeleteOperation(id) {
    let { datas } = this.state;
    this.setState((prevState, props) => {
      const dataItems = [...prevState.datas];
      const indexOfDataToDelete = datas.findIndex((data) => data.id === id);
      dataItems.splice(indexOfDataToDelete, 1);
      console.log(dataItems);
      return { datas: dataItems };
    });
  }

  handleUpdateStatus = (id) => {
    let { datas } = this.state;
    this.setState((prevState, props) => {
      const dataItems = [...prevState.datas];
      const indexOfDataToUpdate = datas.findIndex((data) => data.id === id);
      dataItems[indexOfDataToUpdate] = {
        ...dataItems[indexOfDataToUpdate],
        status: !dataItems[indexOfDataToUpdate].status,
      };
      console.log(dataItems);
      return { datas: dataItems };
    });
  };

  toggleButton = (param) => {
    let { isToggle } = this.state;
    this.setState({
      isToggle: !isToggle,
    });
    this.handleUpdateStatus(param.id);
  };

  validationButton = (data) => {
    return data.status === false ? this.handleDeleteOperation(data.id) : "";
  };

  apiGet() {
    fetch("https://614c0ba9e4cc2900179eb248.mockapi.io/user")
      .then(async (res) => {
        console.log("checking status");
        if (res.status === 200) {
          console.log("status: " + res.status);
          return res.json();
        } else {
          console.log("error");
          this.setState({
            err: "Could not fetch the data, please try again later!",
          });
        }
      })
      .then((dataItem) => {
        this.setState(
          {
            datas: dataItem,
          },
          () => {
            this.addKeyValues(this.state.datas);
          }
        );
        console.log(this.state.datas);
      })
      .catch((error) => {
        console.log("fetch error");
        this.setState({
          isErr: true,
          err: error,
        });
      });
  }
  render() {
    let { datas, err } = this.state;
    return (
      <div>
        {err && <div>{err}</div>}
        {datas.map((dataItem) => (
          <div className={coloring(dataItem.status)} key={dataItem.id}>
            {dataItem.username}
            <button onClick={() => this.toggleButton(dataItem)}>Status</button>
            <button onClick={() => this.validationButton(dataItem)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Status;
