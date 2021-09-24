import React, { Component } from "react";
import { hiddenTag } from "./utils";
// import RenderItem from "./RenderItem";

export class Callback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      isErr: false,
      err: "",
      plus: [],
      second: 5,
      hideTag: true,
    };
  }
  componentDidMount() {
    // this.startCount();
    this.countDown();
  }
  componentWillUnmount() {
    // this.startCount();
    clearInterval(this.inter);
  }

  charCounter = (count) => {
    let counter = count.match(/a/g);
    return counter ? counter.length : 0;
  };

  changeRed(param) {
    const red = param < 7 ? "red" : "";
    return red;
  }

  renderItem = (item) => {
    const { address } = item;
    return address.map((i, index) => {
      const { city, state } = i;
      return (
        <div key={index}>
          {city},{state}
        </div>
      );
    });
  };

  addKeyValues = (data) => {
    data.map((item) => {
      // item["description"] = "lorem ipsum";
      item["counter"] = this.charCounter(item.username);
      return true;
    });
    this.setState({ datas: this.state.datas });
  };

  sumId = (data) => {
    this.setState({
      plus: data.reduce((a, item) => (a = a + parseInt(item.id)), 0),
    });
  };

  countDown = () => {
    this.inter = setInterval(() => {
      let { second } = this.state;
      if (second >= 0) {
        this.setState((prevState) => ({
          second: prevState.second - 1,
        }));
      } else {
        this.apiGet();
        clearInterval(this.inter);
      }
    }, 1000);
  };

  apiGet() {
    fetch("https://614c0ba9e4cc2900179eb248.mockapi.io/user")
      .then(async (res) => {
        console.log("checking status");
        if (res.status === 200) {
          console.log("successfull fetching");
          return res.json();
        } else {
          console.log("ngerror");
          this.setState({
            err: "Could not fetch the data, please try again later!",
          });
        }
      })
      .then((dataItem) => {
        this.setState(
          {
            datas: dataItem.length > 0 && dataItem,
          },
          () => {
            if (this.state.datas.length > 0) {
              // this.addKeyValues(this.state.datas);
              this.sumId(this.state.datas);
            }
          }
        );
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
    let { datas, plus, err, second } = this.state;
    return (
      <div>
        {err && <div>{alert(err)}</div>}
        <h2 className={hiddenTag(second)}>{second}</h2>
        <h2>{plus}</h2>
        {datas.map((dataItem) => (
          <div
            // className={"result " + this.changeRed(dataItem.counter)}
            key={dataItem.id}
          >
            {/* {dataItem.address.map((item, i) => (
              <div className="results" key={i}>
                {item.city}
              </div>
            ))} */}
            {this.renderItem(dataItem)}
            {/* <RenderItem dataItem={dataItem} /> */}
            {/* = {dataItem.counter} */}
          </div>
        ))}
      </div>
    );
  }
}

export default Callback;
