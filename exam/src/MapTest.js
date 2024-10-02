

const MapTest = ()=>{
    const dataList = [
        {
            "num": 1,
            "name":"김",
            "dept":"개발",
            "location" : '서울'
            
        },
        {
            "num": 2,
            "name":"박",
            "dept":"영업",
            "location" : '인천'

        }
    ];

    const info = () => {
        return (dataList.map( (employee) =>{
            console.log(employee);
            return (
                    <tr key={employee.num}>
                        <td>{employee.num}</td>
                        <td>{employee.name}</td>
                        <td>{employee.dept}</td>
                        <td>{employee.location}</td>
                    </tr>
                    );
            })
        );
    }

    return(
        <>
            <h1>Simple map</h1>
            <hr/>
            <table border ='1'>
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Name</th>
                        <th>Dept</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    // dataList.map( function(employee){
                    //     console.log(employee);
                    //     return (
                    //             <tr>
                    //                 <td>{employee.num}</td>
                    //                 <td>{employee.name}</td>
                    //                 <td>{employee.dept}</td>
                    //                 <td>{employee.location}</td>
                    //             </tr>
                    //             )
                    //     })

                    // dataList.map( (employee) =>{
                    //     console.log(employee);
                    //     return (
                    //             <tr>
                    //                 <td>{employee.num}</td>
                    //                 <td>{employee.name}</td>
                    //                 <td>{employee.dept}</td>
                    //                 <td>{employee.location}</td>
                    //             </tr>
                    //             )
                    //     })

                    
                            info()
                    }
                </tbody>
            </table>
            
        </>
    );
}


export default MapTest;