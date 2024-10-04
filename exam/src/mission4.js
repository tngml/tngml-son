import { useState, useEffect } from "react";
const mission4 = () => {
    const boardList = [
        {
            "num" : 1,
            "title" : "board-1",
            "createDt" : "2024-09-30",
            "hit" : 1
        },
        {
            "num" : 2,
            "title" : "board-2",
            "createDt" : "2024-09-30",
            "hit" : 10
        },
        {
            "num" : 3,
            "title" : "board-3",
            "createDt" : "2024-09-30",
            "hit" : 5
        },
        {
            "num" : 4,
            "title" : "board-4",
            "createDt" : "2024-09-30",
            "hit" : 12
        },
        {
            "num" : 5,
            "title" : "board-5",
            "createDt" : "2024-09-30",
            "hit" : 40
        },
        {
            "num" : 6,
            "title" : "board-6",
            "createDt" : "2024-09-30",
            "hit" : 2
        },
        {
            "num" : 7,
            "title" : "board-7",
            "createDt" : "2024-09-30",
            "hit" : 22
        },
        {
            "num" : 8,
            "title" : "board-8",
            "createDt" : "2024-09-30",
            "hit" : 19
        },
        {
            "num" : 9,
            "title" : "board-9",
            "createDt" : "2024-09-30",
            "hit" : 34
        },
        {
            "num" : 10,
            "title" : "board-10",
            "createDt" : "2024-09-30",
            "hit" : 10
        },
        {
            "num" : 11,
            "title" : "board-11",
            "createDt" : "2024-09-30",
            "hit" : 4
        },
        {
            "num" : 12,
            "title" : "board-12",
            "createDt" : "2024-09-30",
            "hit" : 18
        },
        {
            "num" : 13,
            "title" : "board-13",
            "createDt" : "2024-09-30",
            "hit" : 57
        },
        {
            "num" : 14,
            "title" : "board-14",
            "createDt" : "2024-09-30",
            "hit" : 3
        },
        {
            "num" : 15,
            "title" : "board-15",
            "createDt" : "2024-09-30",
            "hit" : 0
        },
        {
            "num" : 16,
            "title" : "board-16",
            "createDt" : "2024-09-30",
            "hit" : 6
        },
        {
            "num" : 17,
            "title" : "board-17",
            "createDt" : "2024-09-30",
            "hit" : 14
        },
        {
            "num" : 18,
            "title" : "board-18",
            "createDt" : "2024-09-30",
            "hit" : 18
        }    
    ];


    const [searchTerm,setSerchTerm] = useState("");
    const filteredList = boardList.filter((item) =>item.title.includes(searchTerm));

    }
