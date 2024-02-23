console.log("connected!");

//대입 연산자
//=
//변수에 값을 할당할 때 사용하는 연산자
let a = 1;
const b = "1";

//비교 연산자
//==, !=
//피연산자의 값이 같은지 비교
//타입이 달라도 괜찮음--> 값만 비교하기 때문
console.log(1 == 1); //true
console.log(1 == 2); //false
console.log(1 == "1"); //true
console.log(1 != 1); // false-->  1과 1이 같지 않다! -> 거짓 => false
console.log(1 != 2); //true
console.log(1 != 2); //false

console.log("--------------------------");
console.log(1 === 3); //true
console.log(1 === 2); //false
console.log(1 === "1"); // false-->  숫자 1과 문자 1은 다른 타입
console.log(1 !== 1); //-> 숫자 1과 숫자 1은 같지 않다!-> false
console.log(1 !== 2); // -> 숫자 1과 숫자 2는 같지 않다!->true
console.log(1 !== "1"); // -> 숫자 1과 문자 1은 같지 않다!-> true

console.log("--------------------------");
console.log(2 > 1); //->2는 1보다 크다 -> true
console.log(1 >= 1); //->1은 1보다 크거나 같다 -> true
console.log(2 < 1); //->2는 1보다 작다-> false
console.log(2); //-> 숫자 1과 숫자 1은 같지 않다!-> false
console.log(1 !== 2); // -> 숫자 1과 숫자 2는 같지 않다!->true
console.log(1 <= 1); // -> 1은 1보다 작거나 같다 -> true
console.log("hi");

//산술 연산자
//+,-,*,/,%,**
console.log("-------------------------");
console.log(1 + 2); //3
console.log(1 - 2); //-1
console.log(1 * 2); //2
console.log(1 / 2); //0.5

//나머지 연산자
console.log(1 % 2); //1
console.log(8 % 3); //2

console.log(1 ** 2); //1

//연산자 응용
console.log(!(2 > 1));
console.log(2 > 1 && -2 < 1);
console.log((2 > 1 && -2 < 1) || 5 > 3);

// Quiz
// 코드 결과 작성
3 <= 1; // false
7 ==
  "7" - // true
    10 >=
    -11; // true
