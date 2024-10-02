import { useEffect } from "react";
import $ from 'jquery';
import axios from 'axios'

const AjaxTest = () => {
    useEffect(() => {
        console.log("useEffect 실행.")
        connect();
    }, []) //빈 배열이기 때문에 한 번만 실행.
    

    const connect = () => {
        axios.get("http://10.81.23.170:8080/ucamp/list.jsp")
        .then((response) =>{
            console.log(response.data)
        })



        // $.ajax({
        //     url: "/boardList.json",
        //     dataType: 'json',
        //     method: 'get',
        //     success: function(data){
        //         console.log(data)
        //     }
        // })
    }



    return (
        <>
            <h1>Test</h1>
            <hr />
        </>
    );
}


export default AjaxTest;