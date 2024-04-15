import { Component } from "react";

class MyComponent extends Component {
  // 컴포넌트 마운트 되었을 때
  componentDidMount() {
    console.log("class형 컴포넌트 : Mount");
  }

  render() {
    return <div>MyComponent Class 형 {this.props.number}</div>;
  }
}

export default class ClassLifeCycle extends Component {
  state = {
    number: 0,
    visible: true,
  };

  //컴포넌트 리덴더링 (업데이트)되었을 때
  componentDidUpdate() {
    console.log("class형 컴포넌트 : 🎉 update!");
  }

  //컴포넌트 언마운트되었을 때
  componentWillUnmount() {
    console.log("class형 컴포넌트 : ❌ unmount!");
  }

  render() {
    return (
      <>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          number + 1
        </button>
        <button onClick={() => this.setState({ visible: !this.state.visible })}>
          MyComponent toggle
        </button>

        {/* 
          - visible 값에 따라 컴포넌트가 보이거나 안 보이거나 함
            보이는 경우 -> 생성(mount) / 안보이는 경우 -> 제거(unmount)
            
          - props로 number 전달 -> state 변경 -> update
         */}
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}
