console.log("connected");

/*
조건문
-어떤 조건에 따라 논리 구조를 나눔
-각 조건을 '분기'라고 함
-조건에 따라 서로 다른 문장을 실행

*/

/*if(조건){
    조건이 참인 경우 실행될 코드
}
*/
//조건이 하나만 있는 겨우
if (5 > 3) {
  console.log("5는 3보다 큽니다.");
}

//만약 조건이 false라면 해당 코드 블럭이 실행되지 않고 넘어감
if (5 > 7) {
  console.log("조건이 false이므로 이 코드블럭은 실행되지 않고 넘어감.");
}

//let number = Number(prompt("숫자를 입력해주세요")); // 입력받은 값을 number 타입으로 강제 형변환
let number = 8;

//입력받은 수가 10보다 클 때 if 다음의 코드블럭을 실행
//입력받은 수가 10보다 작거나 같을 때 else문의 코드블럭을 실행
/*if (number > 10) {
  console.log("입력받은 수가 10보다 큽니다.");
} else {
  console.log("입력받은 수가 10보다 작습니다.");
}*/

//else if 문
//else if 문에 다른 조건이 추가하는 형식
//else문은 하나만 사용 가능. 하지만 else if 문은 여러개 사용 가능
//여러개의 분기로 나누고 싶으면 else if를 여러개 사용해서 조건을 많이 작성할 수 있음.
if (number > 10) {
  console.log("입력받은 수가 10보다 큽니다.");
} else if (number === 10) {
  console.log("입력받은 수가 10입니다.");
} else {
  console.log("입력받은 수가 10보다 작습니다.");
}

console.clear();

//성적 계산하는 프로그램
//const score = Number(prompt("점수를 입력해주세요."));
//조건이 true가 나온다면 해당 코드블럭을 실행하고, 나머지 조건문은 실행되지 않음
//위의 조건을 통과하고 다음 조건문을 실행하는 경우 위의 조건들이 모두 false였음을 잊지말아야함.
/*if (score > 100) {
  //score가 100점보다 큰 점수는 없음.
  console.log("점수가 잘못 입력되었습니다.");
} else if (score >= 90) {
  //score가 100점~90점 사이의 점수 일 때 실행.
  console.log("A");
} else if (score >= 80) {
  //score가 89점~80점 사이의 점 수 일 때 실행.
  console.log("B");
} else if (score >= 70) {
  //score가 79점~70점 사이의 점 수 일 때 실행.
  console.log("c");
} else if (score >= 60) {
  //score가 69점~60점 사이의 점 수 일 때 실행.
  console.log("D");
} else {
  //59점 이하의 점수
  console.log("F");
}
//실행

//실습
const age = Number(prompt("나이를 입력해주세요."));

if (age >= 20) {
  console.log("성인");
} else if (age >= 17) {
  console.log("고등학생");
} else if (age >= 14) {
  console.log("중학생");
} else if (age >= 8) {
  console.log("초등학생");
} else {
  console.log("유아");
}
/*else{
    console.log('음수값이 들어왔습니다.')
}*/

//다른 방법
/*if (age >= 0 && age < 8) {
    //age기 0보다 크거나 같으면서 8보다 작은 경우
  console.log("유아");
}else if (age<14){
    console.log("초등학생");
}else if(age<17){
    console.log("중학생");
}elese if(age<20){
    console.log("고등학생");
}else if(age<150){
    console.log("성인");
}else if(age >=150){
    console.log("나이로 들어올 수 없는 값이 입력되었습니다.")
}


/*if(age>=150 && age <0){
    console.log('나이로 들어올 수 없는 값이 입력되었습니다.')
}..나머지 코드*/

console.log("--------------------------------");
//조건문 중ㅇ첩하기
//조건문 안에 조건문 작성 가능
const userId = "user01";
const userPw = "1234qwer";

//조건문 함수로 구현
function loginUser() {
  const inputId = prompt("아이디를 입력해주세요.");
  const inputPw = prompt("비밀번호를 입력해주세요.");
  if (userId === inputId) {
    if (userPw === inputPw) {
      console.log("로그인 성공!");
      alert(`안녕하세요, ${inputId}님`);
    } else {
      console.log("로그인 실패");
      alert(`비밀번호를 다시 입력해주세요.`);
    }
  } else if (inputId === "") {
    alert("아이디가 입력되지 않았습니다.");
  } else {
    alert("아이디를 다시 입력해주세요.");
  }
}

loginUser();
