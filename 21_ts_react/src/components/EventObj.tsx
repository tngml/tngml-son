import React from "react";

export default function EventObj() {
  //이벤트 함수를 만들어 event 객체 사용 시 event의 타입을 지정해야 함
  //현재 이벤트는 클릭 이벤트 React.MouseEvent
  //이벤트가 발생하는 요소는 button 이라는 HTMLElement
  const buttonClick = (event: React.MouseEvent<HTMLElement>) => {
    alert(event.target);
  };
  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.target);
    console.log(e.key);
  };
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h2>ts react에서 e 객체 타입</h2>
      <button onClick={() => alert("클릭!!!")}>event 객체 사용 X</button>
      <button onClick={(event) => alert(event.target)}>
        바로 event 객체 사용
      </button>
      <button onClick={buttonClick}>함수를 만들어 event 객체 사용</button>

      {/* 키보드 이벤트 */}
      <div>키보드 이벤트</div>
      <input type="text" onKeyDown={handleKeydown} />

      {/* 키보드 이벤트 */}
      <div>input에서 값 받아오기</div>
      <input type="text" onKeyDown={handleKeydown} />
    </>
  );
}
