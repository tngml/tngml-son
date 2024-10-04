// const Mission1  = () => {
//     const boardList = [
//         {
//             "num" : 1,
//             "title" : "board-1",
//             "createDt" : "2024-09-30",
//             "hit" : 1
//         },
//         {
//             "num" : 2,
//             "title" : "board-2",
//             "createDt" : "2024-09-30",
//             "hit" : 10
//         },
//         {
//             "num" : 3,
//             "title" : "board-3",
//             "createDt" : "2024-09-30",
//             "hit" : 5
//         },
//         {
//             "num" : 4,
//             "title" : "board-4",
//             "createDt" : "2024-09-30",
//             "hit" : 12
//         },
//         {
//             "num" : 5,
//             "title" : "board-5",
//             "createDt" : "2024-09-30",
//             "hit" : 40
//         },
//         {
//             "num" : 6,
//             "title" : "board-6",
//             "createDt" : "2024-09-30",
//             "hit" : 2
//         },
//         {
//             "num" : 7,
//             "title" : "board-7",
//             "createDt" : "2024-09-30",
//             "hit" : 22
//         },
//         {
//             "num" : 8,
//             "title" : "board-8",
//             "createDt" : "2024-09-30",
//             "hit" : 19
//         },
//         {
//             "num" : 9,
//             "title" : "board-9",
//             "createDt" : "2024-09-30",
//             "hit" : 34
//         },
//         {
//             "num" : 10,
//             "title" : "board-10",
//             "createDt" : "2024-09-30",
//             "hit" : 10
//         }
//     ];

//     const join = () => {
//         return(boardList((list)=>{
//             return (
//                 <tr key ={list.num}>
//                     <td>{list.num}</td>
//                     <td>{list.title}</td>
//                     <td>{list.createDt}</td>
//                     <td>{list.hit}</td>
//                 </tr>
//             )
//         }))
//     }
    
//     return(
//         <>
//         <h1>boardList</h1>
//         <hr/>
//         <table border="1">
//             <thead>
//             <tr>
//                 <td>Num</td>
//                 <td>Title</td>
//                 <td>createDt</td>
//                 <td>Hit</td>
//             </tr>

//             </thead>
//             <tbody>
//                 join();
//             </tbody>
//         </table>
//         </>
//     )
    
// }