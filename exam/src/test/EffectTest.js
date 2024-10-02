import { useEffect } from "react";
import { useState } from "react";

const EffectTest = () => {
    const [cnt,setCnt] = useState(0);
    const [name, setName] = useState("hong")

    const clickHandler = () => {
        // setCnt(cnt++);
        //1더한 값을 setCnt에 넣어라 
        //직접 핸들링 x
        setCnt(cnt + 1);
        setName("park" + cnt);
        console.log("------------>eventHandler");
    }

    useEffect(() => {
        console.log("------------>effect");

        return () => {
            console.log("---------->unmount");

        }
    },[cnt]); 
    // cnt 값이 변경 된다면 나도 수행 할꺼야
    // =====> 한번만 수행 할때는 []넣기
    return(
        <>
        {console.log("--->render")}
        <input type="text" value={cnt} />
        <button onClick={clickHandler}>클릭</button>
        </>
    )
};

export default EffectTest;