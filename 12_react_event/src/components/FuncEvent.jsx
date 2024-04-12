import { useState } from "react";

export default function FuncEvent() {
  const [msg, setMsg] = useState("힘내세요!");
  const [menu, setMenu] = useState("");

  const msgToEng = () => {
    setMsg("fighting!");
  };

  const msgToKor = () => {
    setMsg("힘내세요!");
  };

  const alertMsg = (msg) => {
    alert(msg);
  };

  const handleEnter = (e) => {
    //e는 리액트 합성 이벤트 객체를 의미
    //target은 해당 이벤트가 발생한 요소에 접근할 수 있음
    //key는 해당 이벤트가 발생하기 위해 눌려진 키보드 키를 의미
    //  일반 문자는 Process로 들어감 / Enter는 Enter로 값을 가짐
    //code는 해당 이벤트가 발생하기 위해 눌려진 키보드 키를 더 자세히 확인
    //  일반 문자는 keyA와 같이 key뒤에 눌려진 키를 확인 할 수 있음
    console.log(e);
    if (e.key === "Enter") {
      alert(`점심 메뉴는 ${menu}로 결정!`);
    }
  };
  return (
    <>
      <h2>함수형 컴포넌트 event handling</h2>
      <div>{msg}</div>
      {/* 클릭 이벤트 발생 시 실행할 함수 자체를 onClick에 전달 -> 함수 호출 X */}
      <button onClick={msgToEng}>fighting!</button>
      <button onClick={msgToKor}>힘내세요!</button>

      <br />

      {/* 함수에 매개변수를 전달하는 경우*/}
      {/* 방법 1. */}
      {/* onClick에서 익명함수를 선언하고, 그 내부에 함수를 실행시킴 */}
      {/* 익명함수를 전달하는 것이 됨 -> alertMsg 함수를 호출한 것이 X */}
      <button onClick={() => alertMsg("오늘은 금요일이잖아!")}>
        메시지 alert창에 띄우기
      </button>

      {/* 방법 2. */}
      {/* bind 매서드 사용 */}
      <button onClick={alertMsg.bind(null, "끝까지 불태워 봅시다아아!!")}>
        메시지 alert창에 띄우기2
      </button>

      <br />
      {/* input 태그에서 변경 사항 발생 시 해당  input의 value를 콘솔에 출력 */}
      {/* input 태그에서 enter 키를 누르면 입력한 값을 alert창으로 보여주기 */}
      <input
        type="text"
        value={menu}
        placeholder="오늘 점심 뭐 먹지?"
        onChange={(e) => {
          //여기서 사용되는 e는 브라우저의 native 이벤트 객체가 아닌
          //react의 synthetic 이벤트 객체
          // console.log(e);
          // console.log(e.target.value);
          setMenu(e.target.value);
        }}
        onKeyDown={handleEnter}
      />
    </>
  );
}
