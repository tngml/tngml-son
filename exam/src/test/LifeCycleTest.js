import React from "react";

//순차적으로 움직임

class LifeCycleTest extends React.Component {

    constructor(props){
        //상속을 받고 있..
        super(props);
        this.state = {number : 0};
        console.log("----------> 1. constructor");
    }

    shouldComponentUpdate(){
        console.log("a. ==========> 1. a. constructor");
        return true;
    }
    // 구조를 만들때
    render(){
        console.log("----------> 2. render");
        // script 작성 가능
        return (<>
        <p>
            검색 : 
            <input type = "text" />
            <button onClick={() => {
                //값을 바꿔라 
                this.setState({number : 10});

            }}>버튼</button>
        </p>
        </>);
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        //super.getSnapshotBeforeUpdate();
        console.log(" b. ===========> 3. getSnapshotBeforeUpdate")
        return null;
    }

    componentDidMount(){
        console.log("----------> 3. componentDidMount")
    }

    componentDidUpdate(){
        console.log("c. ===========> 3. componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("-=-=-=-=-=-=-=> ㄱ. componetWillUnmount")
};
}
export default LifeCycleTest