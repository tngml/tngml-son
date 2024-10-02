import propsTypes from "prop-types";
import { useEffect } from "react";

const HeaderComponent = (props) => {
    useEffect({ },[]);
    


    return(
        <div>
            <h1>{props.title} - 제일 큰 타이틀 태그 ^^</h1>
            <h2>{props.age +10}
                {/* {props.age +10} ==>문자열로 넘어가짐 */}
            </h2>
            <h3>{props.name}</h3>
        </div>
    )
};
HeaderComponent.propsTypes = {
    age : propsTypes.number.isRequired
}
// HeaderComponent.defaultProps = {
//     title : "홍길동"
// }

export default HeaderComponent;