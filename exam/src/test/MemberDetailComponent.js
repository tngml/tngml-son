import { useEffect ,useState} from "react";
import axios from "axios";
const MemberDetailComponent = (props) => {
    // props.params.id
    //경로상으로 들어온 데이터
    const [member, setMember] = useState([]);

    const getMember = () => {
        let url = "/ucamp/detail.jsp?id=" + props.params.id;

        axios.get(url)
        .then((response)=>{
          setMember(response.data) ;
        })
    }

    useEffect(() => {
        getMember();
    })

    return(
        <>
        <h1>회원 상세정보</h1>
        <hr/>
        <table border= "1">
            <tr>
                <th>ID</th>
                <th>{member.id}</th>

            </tr>

            <tr>
                <th>PW</th>
                <th>{member.pw}</th>

            </tr>

            <tr>
                <th>NAEE</th>
                <th>{member.name}</th>

            </tr>

            <tr>
                <th>ADDR</th>
                <th>{member.addr}</th>

            </tr>
        </table>

        </>
    )
};

export default MemberDetailComponent;