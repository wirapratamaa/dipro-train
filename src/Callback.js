import React, { Component } from "react";

export class Callback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      description: "description",
      isErr: true,
      err: "",
    };
  }
  componentDidMount() {
    this.apiGet();
  }
  charCounter = (count) => {
    let counter = count.match(/a/g);
    return counter ? counter.length : 0;
  };

  getRed(param) {
    const red = param < 7 ? "red" : "";
    return red;
  }

  addKeyValues = (data) => {
    data.map((item) => {
      item["description"] = "lorem ipsum";
      item["counter"] = this.charCounter(item.title);
      return true;
    });
    this.setState({ datas: this.state.datas });
  };

  apiGet() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
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
      .catch((e) => {
        this.setState({
          isErr: true,
          err: "Something went wrong",
        });
      });
  }
  render() {
    let { datas } = this.state;
    return (
      <div>
        {datas.map((dataItem) => (
          <div
            className={"result " + this.getRed(dataItem.counter)}
            key={dataItem.id}
          >
            {dataItem.title} = {dataItem.counter}
          </div>
        ))}
      </div>
    );
  }
}

export default Callback;
