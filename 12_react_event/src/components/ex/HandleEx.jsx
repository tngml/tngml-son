import { Component } from "react";
export default class HandleEx extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleColorBlue = this.handleColorBlue.bind(this);
  }
  state = {
    msg: "Hello World!",
    color: "검정색 글씨",
    textColor: "black",
  };
  handleClick() {
    this.setState({ msg: " Goodbye World!" });
  }
  handleColor() {
    this.setState({ color: "빨간색 글씨", textColor: "red" });
  }

  handleColorBlue() {
    this.setState({ color: "파란색 글씨", textColor: "blue" });
  }

  render() {
    return (
      <>
        <div>{this.state.msg}</div>
        <button onClick={this.handleClick}>변경!</button>
        <div style={{ color: this.state.textColor }}>{this.state.color}</div>
        <button onClick={this.handleColor}>빨간색 글씨</button>
        <button onClick={this.handleColorBlue}>파란색 글씨</button>
      </>
    );
  }
}
