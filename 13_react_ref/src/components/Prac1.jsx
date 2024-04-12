import { useState } from "react";

export default function Prac1() {
  // 현재 입력되어있는 사용자의 데이터
  // 서버에서 받아왔다는 전제 하에 작성되어 있음
  // data state는 유저의 id, user, email을 포함하고 있는 객체의 "배열"
  const [data, setData] = useState([
    { id: 1, user: "장원영", email: "wonyoung@gmail.com" },
    { id: 2, user: "안유진", email: "yujin@gmail.com" },
  ]);
  //inputUser state 추가 -> 사용자가 입력한 자신의 이름을 저장하는 state
  //이름을 작성하는 input에 value로 inputUser가 들어가 있음
  //이름을 작성하는 input에 onChange 속성으로 setInputUser를 사용해서
  //해당 input의 value로 업데이트됨

  const [inputUser, setInputUser] = useState("");

  //inputEmail state는 사용자가 입력한 자신의 메일 주소를 저장하는 state
  //메일을 작성하는 input에 value로 inputEmail이 들어가 있음
  //메일을 작성하는 input에 onChange 속성으로 onChangeEmail 함수 연결
  //onChangeEmail 함수는 setInputEmail에 현재 이벤트가 발생한 요소의 value를
  //전달해서 inputEmail이라는 state의 값으로 업데이트됨
  const [inputEmail, setInputEmail] = useState("");

  //nextId라는 state는 data state의 각 요소에 들어가는 값 중 하나
  //data state는 객체의 배열로, 각 객체에는 id, user, email이 포함됨
  //user, email은 사용자에겍 입력을 받아야 함
  //하지만 id값의 경우 사용자가 모름
  //그렇기 때문에 data.length -> data 배열의 길이에 1을 더해 직접 id 값을 만듦

  const [nextId, setNextId] = useState(data.length + 1); // useState(3)

  // 사용자의 이름을 받는 input에 변경사항이 있을 떄 실행되는 함수
  // onChange로 연결 되어 있으며 해당 함수가 실행될 때
  // 해당 이벤트가 발생한 input의 value를 inputUser State의 값으로 업데이트함
  const onChangeUser = (e) => setInputUser(e.target.value);

  // onChangeEmail 함수 설명
  //이메일을 입력할 때마다 호출
  //텍스트를 입력 할 때마다 onChangeEmail 함수가 호출되어 setInputEmail을 통해 업데이트함
  //사용자의 email을 받는 input에 변경사항이 있을 때 실행되는 함수
  //onChange로 연결되어 있으며 해당 함수가 실행될 때
  //해당 이벤트가 발생한 input의 value를 inputEmail state의 값으로 업데이트함
  //e: event 객체->이 함수에서 사용되는 e는 event 객체 -> react synthetic event 객체!
  //e.target : 현재 이벤트가 발생한 요소 ->input
  //e.target.value : 현재 이벤트가 발생한 input요소의 value 속성값
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  // eventClick 함수 설명
  //data 배열에 새로운 데이터를 추가하고, 추가된 데이터를 포함하는 새로운 배열을 반환하는 역할
  //이메일을 입력받는 input에 onKeyDown 속성과 등록 버튼의 onClick 속성에서 사용됨
  //새로운 데이터를 data state에 추가,input 2개 (user,email)를 초기화, nextId state를 1더한 값으로 업데이트
  const eventClick = () => {
    // 새로운 데이터를 기존 데이터 배열에 추가
    // 참고) concat(): https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    // const nextData = data.concat({
    //   id: nextId,
    //   user: inputUser,
    //   email: inputEmail,
    // });

    // 또는
    // nextData는 새로 업데이트 될 데이터
    // 원래 data state의 값을 spread 연산자를 사용해 객체 각각을 불러내고
    // 가장 마지막에 새로 입력받은 user의 정보를 객체 형태로 추가하고 있음
    const nextData = [
      ...data,
      {
        id: nextId,
        user: inputUser,
        email: inputEmail,
      },
    ];

    //추가될 데이터의 id를 증가 시킴
    //nextId state의 값을 1더함
    //다음 사용자의 id 값으로 들오가야 하는데,id는 고유해야 함으로 1 증가한 값으로 넣음
    setNextId(nextId + 1);
    //data state를 위에서 선언한 nextData로 업데이트
    //새로 추가된 데이터가 가장 마지막에 더해짐
    //컴포넌트 리렌더링 되면서 브라우저에 추가된 데이터 함께 렌더링
    setData(nextData);
    //input창 초기화
    setInputUser("");
    //input창 초기화
    setInputEmail("");
  };

  //
  const onKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      eventClick();
    }
  };

  //
  const onRemoveData = (id) => {
    const NextData = data.filter((data) => data.id !== id);
    setData(NextData);
  };

  //
  const dataList = data.map((data) => (
    <h2 key={data.id} onDoubleClick={() => onRemoveData(data.id)}>
      {data.user}: {data.email}
    </h2>
  ));

  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="이름"
        value={inputUser}
        onChange={onChangeUser}
      />

      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyDown={onKeyDownEnter}
      />

      <button onClick={eventClick}>등록</button>

      <div>{dataList}</div>
    </div>
  );
}
