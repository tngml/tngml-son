
const MainComponent = () =>{
    return(
        <>
            <table border='1'>
                <tr>
                    <th>ID</th>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <th>PW</th>
                    <td><input type="password" /></td>
                </tr>
                <tr>
                    <th colSpan='2'>
                        <input type="submit" />
                    </th>
                </tr>
            </table>
            <a href="addMember">회원가입</a>
            <a href="classType">클래스타입</a>
        </>
    );
}

export default MainComponent;