import HeaderComponent from "./HeaderComponent";
let name = "강감찬";
let dataList = [
    {
        "id" : "abcd",
        "pw" : "1234",
        "name" : "hong",
        "addr" : "seoul"
    },
    {
        "id" : "abcd",
        "pw" : "1234",
        "name" : "hong",
        "addr" : "seoul"
    }
];


const CmpComponent = () => {

    return(
        <>
        {
            //data에 넣어줘 데이터를 가져와서 화면에 뿌려줘
            dataList.map((data) => {
              return (<p>{data.id}</p>);
        })
    }

        <HeaderComponent title="첫번째" age={20} name={name}/>
        {/* 숫자로 넘기고 싶으면 {} 사용해야해  값이 넘어가는 것*/}
        <HeaderComponent/>
        {/* <HeaderComponent/> */}

       {/* <div>
            <h1>제일 큰 타이틀 태그 입니다.</h1>
        </div>

        <div>
            <h1>제일 큰 타이틀 태그 입니다.</h1>
        </div>

        <div>
            <h1>제일 큰 타이틀 태그 입니다.</h1>
        </div>
        */}
        
        </>
    );

};

export default CmpComponent;