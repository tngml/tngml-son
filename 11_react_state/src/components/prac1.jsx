// 클래스형 컴포넌트에서 state 사용 실습
/*
import React, { Component } from 'react';

export default class Prac1 extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;

    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => this.setState({ number: number + 2 })}>
          + 2
        </button>
        <button onClick={() => this.setState({ number: number - 1 })}>
          - 1
        </button>
      </>
    );
  }
}
*/

// --------------------------------------------------------

// 함수형 컴포넌트에서 useState hook을 통해 state 사용 실습

import { useState } from "react";

export default function Prac1() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 2);
  };

  return (
    <>
      <h1>
        {number} {number < 8 ? "😘" : "👊"}
      </h1>
      <button onClick={increase}>+ 1</button>
      <button onClick={decrease}>- 2</button>
    </>
  );
}
