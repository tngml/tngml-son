import { useEffect } from "react";

const MyEventComponent = () =>{

    const myClickHandler = () => {
        alert("click 이벤트 발생");
    }

    const calculator = () => {
        let first = document.querySelector("#firstNum").value;
        let second = document.querySelector("#secondNum").value;
        let result = document.querySelector("span");
        let select = document.querySelector("#oper").value;
        console.log(select);
        let res;
        if(select === '+'){
            res = Number(first) + Number(second);
        }
        else if(select === '-'){
            res = Number(first) - Number(second);
        }
        else if(select === '*'){
            res = Number(first) * Number(second);
        }
        else if(select === '/'){
            res = Number(first) / Number(second);
        }
        result.innerHTML = res;
    }

    useEffect(() => {
        let btn = document.querySelector("#save");

        btn.addEventListener("click",function(){
            alert("save 버튼 클릭");
        });
    },[]);

    return(
        <>
        {/* <input type="text" onChange={()=>{
            console.log("onchange");
        }}/> */}

        <input id="firstNum" type="text" width="100" />
        <select id="oper">
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
        </select>
        <input id="secondNum" type="text" width="100" />
        <button onClick={calculator}>계산</button>
        <div>Result : <span></span></div>
        <hr/>

        <button onClick={myClickHandler}>클릭</button>
        <button id="save">저장</button>
        </>
    );
};

export default MyEventComponent;