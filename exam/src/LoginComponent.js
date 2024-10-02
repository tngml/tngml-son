
const LoginComponent = (props) => {
    
    const name = props.name;
    return(
        <>
            <table border='1'>
                <tr>
                    <th>ID</th>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <th>pw</th>
                    <td><input type="password" /></td>
                </tr>
                <tr>
                    <th>name</th>
                    <td><input type="text" value={name}/></td>
                </tr>
                <tr>
                    <th>addr</th>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <th colSpan='2'> <button onClick={ () => {
                        //location.href='/'; 현재 오류
                        //이동하는 로직.
                    }}>가입</button></th>
                </tr>
            </table>
        </>
    );
}

export default LoginComponent;