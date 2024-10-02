import { useEffect, useState } from "react";
import axios  from "axios";

const MemberListComponent = () => {
    const [memberList, setMemberList] = useState([]);

    const getData = () =>{
        let url = `http://10.81.23.170:8080/ucamp/list.jsp`;
        axios.get(url)
        .then( (response) =>{
            //console.log(response.data)
            setMemberList(response.data)
        })
    }
    const printList = () =>{
        console.log(memberList)
        return(
            memberList.map( (member) =>{
                let detailUrl = `memberDetail/${member.id}`;
                return(
                    <tr>
                        <td>{member.id}</td>
                        <td>{member.pw}</td>
                        <td> <a href={detailUrl}>{member.name}</a></td>
                        <td>{member.addr}</td>
                    </tr>
                )
            })
        )
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <h1>회원목록</h1>
            <hr />
            <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Pwd</th>
                        <th>Name</th>
                        <th>Addr</th>
                    </tr>
                </thead>
                <tbody>
                    {printList()}
                </tbody>
            </table>
        </>
    );
}

export default MemberListComponent;