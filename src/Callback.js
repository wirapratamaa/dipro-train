import React, { Component } from "react";

export class Callback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      isErr: false,
      err: "",
      plus: [],
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

  sumId = (data) => {
    this.setState({
      plus: !data ? "" : data.reduce((a, item) => (a = a + item.id), 0),
    });
  };

  apiGet() {
    fetch("https://jsonplaceholder.typicode.com/postsx")
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.json().then((dataItem) => {
            this.setState(
              {
                datas: dataItem,
              },
              () => {
                this.addKeyValues(this.state.datas);
                this.sumId(this.state.datas);
              }
            );
            console.log(this.state.datas);
          });
        } else {
          this.setState({
            err: "Could not fetch the data, please try again!",
          });
        }
      })
      .catch((error) => {
        console.log(error.res);
        this.setState({
          isErr: true,
          err: this.state.err,
        });
      });
  }
  render() {
    let { datas, plus, err } = this.state;
    return (
      <div>
        {err && <div>{err}</div>}
        <h2>{plus}</h2>
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
