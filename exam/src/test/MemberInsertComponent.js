import axios from "axios";
const MemberInsertComponent = () => {

    const addMember = () => {
        let id = document.querySelector("#id").value;
        let pw = document.querySelector("#pwd").value;
        let name = document.querySelector("#name").value;
        let addr = document.querySelector("#addr").value;

        let url = `http://10.81.23.170:8080/ucamp/add.jsp?id=${id}&pw=${pw}&name=${name}&addr=${addr}`;

        console.log(id + pw + name + addr)

        axios.get(url)
        .then((response) => {
            if( response.data.result === "true") {
                alert("성공");
            } else if( response.data.result === "false") {
                alert("실패");
            } else if( response.data.result === "error") {
                alert("에러");
            }

            window.locatio. href = "MemberListComponent"
        });
    }
    return (
        <>
        <h1>회원가입</h1>
        <hr/>
        <table border="1">
            <tr>
                <th>ID</th>
                <td><input type="text" id='id'></input></td>
            </tr>
            <tr>
                <th>PWD</th>
                <td><input type="text" id='pwd'></input></td>
            </tr>
            <tr>
                <th>Name</th>
                <td><input type="text" id='name'></input></td>
            </tr>
            <tr>
                <th>Addr</th>
                <td><input type="text" id='addr'></input></td>
            </tr>
            <tr>
                <th colSpan="2">
                    <button onClick={ addMember }>ADD</button>
                </th>
            </tr>
        </table>
        </>
    )

};

export default MemberInsertComponent;
