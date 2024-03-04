// // 합 구하기
// //1.for문
// let sum1 = 0;
// for (i = 0; i < numArr.length; i++) {
//   sum1 = sum1 + numArr[i];
//   //sum+= numArr[i]
// }
// console.log(sum1);

// //2. for of 문
// let sum2 = 0;
// //numArr 배열에 있는 모든 요소를 num이라고 지칭하면서 반복한다.
// for (let num of numArr) {
//   sum2 = sum2 + num;
//   // sum2 += num;
// }
// console.log(sum2);

// //3. forEach문
// let sum3 = 0;
// numArr.forEach((num) => {
//   sum3 = sum3 + num;
// });
// console.log(sum3);

/**
 JS 표준 내장 객체
 자바스크스크립트가 기본적으로 가지고 있는 객체
 string, Numer, Array, Date, Math 
 
 */

//1. Date 객체
//시간, 날짜에 대한 정보를 얻기 위해 사용

//현재 날짜
let now = new Date();
console.log(now); // Mon Mar 04 2024 11:48:57 GMT+0900 (한국 표준시)

//1000ms === 1s
//1000ms* 3600 = 1000ms * 60 * 60  === 1s * 60 *60 =1h
//1000ms * 3600 * 24 === 24h
//1970년 1월 1일 기준으로 해당 ms 만큼 지난 시간
let Jan_02_1970 = new Date(1000 * 3600 * 24);
console.log(Jan_02_1970);

//new Date(year, month, day, hour, minutes, seconds, ms)
//year: 4자리
//month: 0 (1월) ~ 11(12월)
//date: 1~31/ 값이 없으면 1로 처리
//hour, minutes, second, ms:값이 없으면 0으로 처리
console.log(new Date(2021, 2, 2, 15));
console.log(new Date(2021, 2, 2, 15, 18, 30, 15));

//Date 객체 메서드
//연, 월, 일 등의 값을 얻을 수 있음
console.log(now.getFullYear()); //연도 (4자리)
console.log(now.getFullYear() + "년");
console.log(now.getMonth()); // 월(0~11)
console.log(now.getDate()); // 일
console.log(now.getHours()); //  시
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초
console.log(now.getMilliseconds()); // 밀리초
console.log(now.getDay()); // 요일(0~6) 일요일:0 -> 일 ~토

console.log(now.getDay());
// 오늘 날짜를 기준으로 평일/주말 구분하기
// 1. switch문
// 0(일) ~ 6(토) 까지의 값
function checkWeekend() {
  switch (now.getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "평일";
    // return 작성 시 break 키워드 작성하지 않아도 알아서 해당 스코프 빠져나감
    case 0:
    case 6:
      return "주말";
    //break
    default:
      return "알수없음";
    //break
  }
}
console.log(checkWeekend()); //checkwddkend 함수의 반환값을 콘솔에 출력
//2. if문
if (
  now.getDay() === 1 ||
  now.getDay === 2 ||
  now.getDay === 3 ||
  now.getDay === 4 ||
  now.getDay === 5
) {
  console.log("평일");
} else {
  console.log("주말");
}
// 3. 삼항연산자
const todayStatus = now.getDay() === 0 || now.getDay() === 6 ? "주말" : "평일";
console.log(todayStatus);

//Math 객체
console.log(Math.E);
console.log(Math.PI); //파이
console.log(Math.SQRT2); //2의 제곱근

//Math.random()응용
//곱하는 수 : 원하는 범위 숫자 + 1

//0~9 사이의 난수 생성
console.log(Math.floor(Math.random() * 10));

//0~10 사이의 난수 생성
console.log(Math.floor(Math.random() * 11));

//1~100 사이의 난수 생성
console.log(Math.floor(Math.random() * 100) + 1);

//20~22 사이의 난수 생성
console.log(Math.floor(Math.random() * 3) + 20);
