import { useState } from 'react';

const MissionThree = () => {
    const [boardList, setBoardList] = useState([
        {
            "num": 1,
            "title": "board-1",
            "createDt": "2024-09-30",
            "hit": 1
        },
        {
            "num": 2,
            "title": "board-2",
            "createDt": "2024-09-30",
            "hit": 10
        }
    ]);

    const [formData, setFormData] = useState({
        num: '',
        title: '',
        createDt: '',
        hit: 0 // 고정값
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const addBoard = (e) => {
        e.preventDefault();
        if (formData.num === '' || formData.title === '' || formData.createDt === '') {
            alert("모든 필드를 입력하세요.");
            return;
        }

        const newBoard = {
            ...formData,
            hit: 0 // 고정된 hit 값
        };

        setBoardList([...boardList, newBoard]);


        setFormData({
            num: '',
            title: '',
            createDt: '',
            hit: 0,
        });
    }

    const list = () => {
        return (boardList.map((list) => {
            return (
                <tr key={list.num}>
                    <td>{list.num}</td>
                    <td>{list.title}</td>
                    <td>{list.createDt}</td>
                    <td>{list.hit}</td>
                </tr>
            );
        }));
    };

    //액션이 취해졌을때 반응하는
    const tableForm = () => {
        return (
            <>
                <h2>Add New Board</h2>
                <table border='1'>
                    <tbody>
                        <tr>
                            <th>Num</th>
                            <td><input type="number" name="num" value={formData.num} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>Title</th>
                            <td><input type="text" name="title" value={formData.title} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>CreateDt</th>
                            <td><input type="date" name="createDt" value={formData.createDt} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>Hit</th>
                            <td><input type="num" name="hit" readOnly value={formData.hit} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th colSpan='2'>
                                <button onClick={addBoard}>ADD</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }

    return (
        <>
            <h1>Board List</h1>
            <hr />
            <table border="1">
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Title</th>
                        <th>CreateDt</th>
                        <th>Hit</th>
                    </tr>
                </thead>
                <tbody>
                    {list()}
                </tbody>
            </table>

            {tableForm()} {/* 새로운 폼을 화면에 렌더링 */}
        </>
    );
}

export default MissionThree;


//dataList를 useState로 
//boardList에 있는 값을 복사해서 넣음 
// import {useState} from "react" 있어야 사용가능 
// const [dataList,setDataList] = useState([...boardList]);
// useEffect(() =>{
    //setDataList([...boardList]);
    //})
// const list = ()=> {
//     //board라는 변수에 담을꺼야
//     return (boardList.map((board) => {
//         return(
//             <tr key ={list.num}>
//                 <td>{list.num}</td>
//                 <td>{list.title}</td>
//                 <td>{list.createDt}</td>
//                 <td>{list.hit}</td>
//             </tr>)
//     }))
// }

// const insertForm= () => {
//     //필요한 데이터 추출 
//     let num = document.querySelector("#num").value;
//     let title = document.querySelector("#title").value;
//     let createDt = document.querySelector("#createDt").value;  
//     let hit = document.querySelector("#hit").value;  

//     //object 만들기
//     let object  = {
      
//             "num": num,
//             "title": "title",
//             "createDt": "createDt",
//             "hit": hit

//     }
// }

// // dataList라는 것을 받아다가 
// //dataList를 가져다가 기존의 배열을 가져오고 새로운 배열이 만들어짐
// let newArr = [...dataList,newobj];
// //배열이 바뀜
// setDataList(newArr);

// const tableForm = () => {
//     return (
//         <>
//             <h2>Add New Board</h2>
//             <table border='1'>
//                 <tbody>
//                     <tr>
//                         <th>Num</th>
//                         <td><input type="number" name="num" value={formData.num} onChange={handleChange} /></td>
//                     </tr>
//                     <tr>
//                         <th>Title</th>
//                         <td><input type="text" name="title" value={formData.title} onChange={handleChange} /></td>
//                     </tr>
//                     <tr>
//                         <th>CreateDt</th>
//                         <td><input type="date" name="createDt" value={formData.createDt} onChange={handleChange} /></td>
//                     </tr>
//                     <tr>
//                         <th>Hit</th>
//                         <td><input type="num" name="hit" readOnly value={formData.hit} onChange={handleChange} /></td>
//                     </tr>
//                     <tr>
//                         <th colSpan='2'>
//                             <button onClick={insertForm}>ADD</button>
//                         </th>
//                     </tr>
//                 </tbody>
//             </table>
//         </>
//     );
// }



// return (
//     <>
//         <h1>Board List</h1>
//         <hr />
//         <table border="1">
//             <thead>
//                 <tr>
//                     <th>Num</th>
//                     <th>Title</th>
//                     <th>CreateDt</th>
//                     <th>Hit</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {list()}
//             </tbody>
//         </table>
//         <hr/>

        
        

//         {tableForm()}

        
//     </>
// );
