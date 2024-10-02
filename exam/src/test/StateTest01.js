import { useState } from "react";

const StateTest01=() => {
    const [checked, setChecked] = useState([]);
    const boxList = ["first" ,"second","third"];

    // checkbox에 대한 핸들러
    // id는 식별자
    const checkHandler = (id)=>{

        let isDups = false;
        for(let i=0; i<checked.length; i++){
            if(checked[i] === id){
                isDups = true;
            }
        }
            if(!isDups){
                console.log("-=-=-=> add state value");
                setChecked([...checked, id]);
     }
     console.log("-=-=-=> add after");
     console.log(checked)

    }
    const allHandler = (e) => {
        if(e.target.checked){
            setChecked(boxList);
        }else{
            setChecked([]);
        }
    }
            
        
    return(
        <>
        ALL or NOTHING <input type ="checkbox"onChange={(e) => {allHandler(e);}}/>
        <hr/>

        {
            boxList.map((value) => {
                <>
                return(
                    <span>{value}</span>
                    <input type="checkbox" value={value} checked={checked.includes(value)}onChange={() => {checkHandler({value})}}/>)
                   
                    {/* one <input class="exam" type = "checkbox" value = "first" onChange={() => {checkHandler("first")}}/>,
                    two <input class="exam" type = "checkbox" value = "second" onChange={() => {checkHandler("second")}}/>,
                    three <input class="exam" type = "checkbox" value = "third" onChange={() => {checkHandler("third")}}/>  */}
                </>
              }  )}
    


        
    
                
        </>
                        )}
                   
export default StateTest01;