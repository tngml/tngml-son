console.log("connected");
//배열 연습
// let koreanScore = 80;
// let englishScore = 70;
// let mathScore = 90;
// let scienceScore = 60;

// let studentScore = [80, 70, 70, 60]; //국어, 영어, 수학, 과학 점수 ---> 배열로 정의한 데이터를 요소라고 함, 자바스크립트에서는 숫자 0부터 시작
// console.log(studentScore[1]); //0부터 시작하기 때문에 ---> 영어 점수 나타남.

let studentScore = {
  koreanScore: 80,
  englishScore: 70,
  mathScore: 90,
  scienceScore: 60,
};
console.log(studentScore.koreanScore);
console.log(studentScore["englishScore"]);

//어떤 연산을 처리하는데 사용하도록 미리 정의된 기호------->연산자
//= 기호는 데이터를 할당하는 연산을 수행------->할당 연산자

//이항 산술 연산자
let sum = 10 + 20; //30
let sub = 20 - 10; //10
let multi = 10 * 20; //200
let div = 10 / 2; //5
let remain = 10 % 3; //1 ----->나머지
let expon = 2 ** 3; //8 ------> 제곱

//단항 산술 연산자
let num = 10;
let subNum = ++num;
console.log(subNum);

//대입 연산자와 복합 대입 연산자
/*
- 대입 연산자
let x = 10;
ex) x = y
- 복합 대입 연산자

비교 연산자
x == y ----> x와 y의 값이 같으면 true를 반환
x === y ----> x와 y의 값과 자료형이 같으면 true를 반환
x != y ----> x와 y의 값이 다르면 true반환
x !== y ----> x와 y의 값과 자료형이 다르면 true를 반환
x < y ----> x가 y보다 작으면 true 반환
x <= y ----> x가 y보다 작거나 같으면 true를 반환
x > y ----> x가 y보다 크면 true 반환
x >= y ----> x가 y보다 크거나 같으면 true 반환
*/

10 == "10";
10 === "10";

//삼항 연산자
//?:
//x ? y : z-------------->x가 참이면 y를 반환하고 x가 거짓이면 z를 반환
let score = 90;
let grade = score >= 90 ? "A" : "B";
console.log(grade); // x가 참이라서 'A'반환

//형변환
//암시적 형변환
const result = 10 + "10";
console.log(result);

let num2 = 10;
let strNum = "10";
if (num2 === strNum) {
  //문자열을 숫자형으로 형 변환
  console.log("equals");
}

//명시적 형변환
if (String(num) == strNum) {
  console.log("equals");
}

let q1 = 10 + 10 * 2;
let q2 = 10 === 10 || 10 !== "10";
let q3 = !(10 < 20) && 10 < 20;
console.log(q1);
console.log(q2);
console.log(q3);

let num3 = 5;
if (num3 % 2 === 0) {
  console.log("변수 num3에 할당된 숫자는 짝수입니다.");
} else {
  console.log("변수 num3에 할당된 숫자는 홀수입니다.");
}

let num4 = 0;
if (num4 > 0) {
  console.log("양수");
} else if (num4 < 0) {
  console.log("음수");
} else {
  console.log("0");
}

//switch문
let food = "melon";
switch (food) {
  case "melon":
    console.log("fruit");
    break;
  case "apple":
    console.log("fruit");
    break;
  case "banana":
    console.log("fruit");
  case "carrot":
    console.log("vegetable");
    break;
  default:
    console.log("It's not fruits and vegetables.");
    break;
}

// if문과 조건식
let score1 = 90;
if (score1 >= 90 && score1 <= 100) {
  console.log("A++학점");
}

//반복문
// let num5 = 1;
// while (num5 <= 100) {
//   console.log(num5);
//   num5++;
// }

//for 문
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let t = 0; t < 2; t++) {
  console.log(`t : ${t}`);
  for (let k = 0; k < 2; k++) {
    console.log(`k : ${k}`);
  }
}

//for문과 배열
let arr = ["banana", "apple", "orange"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//for...in
let obj = { name: "철수", age: "20" };
for (let key in obj) {
  console.log(key + ":" + obj[key]);
}

//break문
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 9) break;
}

//continue문(짝수구하기)
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) continue;
  console.log(i);
}
//(홀수구하기)
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

//1분 퀴즈
let sum1 = 0;
for (let i = 1; i <= 100; i++) {
  sum1 += i;
}
console.log(sum1);

//퀴즈 2. 반복문을 사용해 1부터 200까지의 합을 출력하는 코드
let sum2 = 0;
for (let i = 1; i <= 200; i++) {
  sum2 += i;
}
console.log(sum2);

//퀴즈 3. 반복문을 사용해 1부터 100에서 짝수의 합만 출력하는 코드
let sum3 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum3 += i;
  }
}
console.log(sum3);

//퀴즈 4. 반복문을 사용해 1부터 100에서 홀수의 합만 출력하는 코드
let sum5 = 0;
for (i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    sum5 += i;
  }
}
console.log(sum5);
//퀴즈5. 숫자1부터 999까지 짝수가 몇 개인지 출력하는 코드
let count = 0;
for (i = 1; i <= 999; i++) {
  if (i % 2 === 0) count++;
}
console.log(`짝수의 개수는 ${count}개 입니다.`);

//퀴즈 6. 숫자1부터 999까지 홀수가 몇 개인지 출력하는 코드
let count1 = 0;
for (i = 0; i <= 999; i++) {
  if (i % 2 === 1) count1++;
}
console.log(`홀수의 개수는 ${count1}개 입니다.`);

//퀴즈7. 구구단 1단부터 9단까지 한 번에 출력하는 코드
for (let dan = 1; dan <= 9; dan++) {
  for (let dan1 = 1; dan1 <= 9; dan1++) {
    console.log(`${dan}*${dan1}=${dan * dan1}`);
  }
}

//퀴즈 8. 100부터 999까지 정수 중에서 암스트롱 수에 해당하는 숫자를 모두 출력하는 코드
for (let i = 1; i < 10; i++) {
  for (let k = 0; k < 10; k++) {
    for (let j = 0; j < 10; j++) {
      let sum6 = i * i * i + k * k * k + j * j * j;
      let currentNumber = i * 100 + k * 10 + j;
      if (sum6 === currentNumber) {
        console.log(currentNumber);
      }
    }
  }
}
