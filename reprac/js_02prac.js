// function gugudan() {
//   for (let i = 1; i <= 9; i++) {
//     console.log(`3 * ${i} = ${3 * i}`);
//   }
// }
// gugudan();

//함수 표현식으로 함수 정의하기
//함수는 객체에서 파생된 자료형
//자료형은 변수에 할당할 수 있어야함 --->함수도 변수에 할당할 수 있음(변수에 할당하는 함수에 식별자가 있으면 네이밍 함수),(없으면 익명 함수)
//형식
//const 변수명 = function(){}; // 익명 함수
//const 변수명 = function 식별자 (){}; // 네이밍 함수
const gugudan = function gugudan() {
  for (let i = 1; i <= 9; i++) {
    console.log(`3 * ${i}=${3 * i}`);
  }
};
gugudan();

//매개변수와 인수
//매겨변수 : 함수를 정의할 때 외부에서 전달하는 데이터를 함수에서 받을 수 있도록 정의하는 변수.
//인수 : 정의한 함수를 호출할 때 소괄호 안에 전달하고 싶은 데이터를 적음

function gugudan1(dan) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan}*${i} = ${dan * i}`);
  }
}
gugudan1(4);
gugudan1(6);
gugudan1(14);

function abc(a = 10, b = 10) {
  console.log(a, b);
}
abc();

//return문
//형식
//return 식 (또는 값)
//두 매개변수 합을 구하는 함수
function abcd(abc1, abc2) {
  let result = abc1 + abc2;
  console.log("inner:" + result);
}
abcd(10, 20);
