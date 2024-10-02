import { useState } from "react";

const StateTest = () => {
    const [result, setResult] = useState("성공");
    // let result = "성공....";
    const [memberList, setMemberList] = useState([]);
    // let memberList = [];
    let countNumber = 0;

    const messageChange = () => {
        console.log(memberList);
        memberList.push("===>" + countNumber);
        
        setMemberList(memberList);
        // setMemberList(memberList.push(`data-${countNumber}`))
        // memberList.push(`data-${countNumber}`);
        countNumber++;
        // result = "수정 성공..."
        // setResult("수정 성공");

        // document.querySelector("h1").innerText = result;
        console.log(memberList);
    }

    return (
        <>
        <p>
            <h1>{result}</h1>
            <button onClick={ messageChange }>저장</button>
            <div>
                {
                    memberList.map((member) => {
                        return (<h2>{member}</h2>)
                    })
                }
            </div>
        </p>
        </>
    );
};

export default StateTest;


// import {useState} from "react";
// //useState를 가져올꺼야
// const StateTest = () => {
//     let [result,setResult] = useState("성공");
//     //result에 대한 값만 렌더링 된다면 다시 사용 가능
//     // let result = "성공....."
//     const [memberList,setMemberList] = useState([]);
    

//     // let memberList =[];
//     let countNumber =0;


//     const messageChange = ()=>{
//         memberList.push("==>" + countNumber);
//         setMemberList(memberList)
//         setMemberList(memberList.push(`data-${countNumber}`))
//         memberList.push(`data-${countNumber}`);
//         countNumber++;

//         console.log(memberList);
//         // setResult("수정 성공")
//         // result = '수정 성공.....'
//         // document.querySelector("h1").innerText = result;
//         // console.log(result)



//     }

//     return(
//         <>
//         <p>
//             <h1>{result}</h1>
//             <button onClick={messageChange}>저장</button>
//             <div>
//                 {
//                     setMemberList.map((member)=>{
//                        return <h2>{member}</h2>;
//                     })
//                 }
//             </div>
//         </p>
//         </>
//     )
// }

// export default StateTest;