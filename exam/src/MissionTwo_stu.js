const MissionTwo = () => {

    const validation = (e) => {
        e.preventDefault(); // 폼의 기본 제출 동작 방지
        const id = e.target.elements.id.value;
        const pw = e.target.elements.pw.value;

        if (!id) {
            alert("please input data to ID.");
            return;
        }

        if (id.length < 3 || id.length > 15) {
            alert("ID는 3자리 이상 15자리 이하만 가능합니다.");
            return;
        }

        if (pw.length < 3 || pw.length > 15) {
            alert("PW는 3자리 이상 15자리 이하만 가능합니다.");
            return;
        }

        alert("로그인 성공");
    }

    return (
        <>
            <form onSubmit={validation}>
                <table border='1'>
                    <tr>
                        <th>ID</th>
                        <td><input type="text" name="id" /></td>
                    </tr>
                    <tr>
                        <th>PW</th>
                        <td><input type="password" name="pw" /></td>
                    </tr>
                    <tr>
                        <th colSpan='2'>
                            <input type="submit" value="Login" />
                        </th>
                    </tr>
                </table>
            </form>
        </>
    );
}

export default MissionTwo;
//찾을 수 있도록 id 넣어주기

// const validation = (e) => {
    // let id = document.querySelector("#id").value 아이디 값인걸 찾아
    // let pw = document.querySelector("#pw").value 

    // if (id.length ===0){
    // alert("No data : ID")
    //} else(id.length >=3 && id.length <=15){
    // alert("Please...check Data Length")
    //} else if(pw.length ===0){
    // alert("No data : PW")
    //} else if (pw.length <3 || pw.length>15){
    // alert("Please....check Data Length");
    //}else{
        // alert("Data Check ok............");
    //}
    //}

    // return (
    //     <>
    //         <form onSubmit={validation}>
    //             <table border='1'>
    //                 <tr>
    //                     <th>ID</th>
    //                     <td><input type="text" name="id" /></td>
    //                 </tr>
    //                 <tr>
    //                     <th>PW</th>
    //                     <td><input type="password" name="pw" /></td>
    //                 </tr>
    //                 <tr>
    //                     <th colSpan='2'>
    //                         <input type="submit" value="Login" />
    //                         <button onClick={validation}>Login</button>
    //                     </th>
    //                 </tr>
    //             </table>
    //         </form>
    //     </>
    // );

