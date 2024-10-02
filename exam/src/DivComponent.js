// import subDivComponent from "./SubDivComponent";

const DivComponent = () => {
    const info = () => {
        return(
            <h1>하하핳</h1>
        )
    }
    return (
        <div>
        <p>상단부분</p>
        <p>{info()}</p>
        {/* <p><subDivComponent/></p> */}
        <p>하단부분</p>
        </div>
    );
};

export default DivComponent;