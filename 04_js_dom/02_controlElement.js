/**
 1. 태그 내부 content 다루기 
 -innerText: 요소 안의 텍스트를 가져오거나 수정
 -innerHTML: 요소 안의 코드를 가져오거나 수정
 */

let div1 = document.getElementById("div1");
console.log(div1);
console.log(div1.innerText);
console.log(div1.innerHTML);

// 해당 요소 내부의 텍스트 변경
div1.innerText =
  "여기는 첫 번째 div 태그이면서 js에서<strong> 수정 </strong>이 있었습니다.";

//해당 요소 내부의 태그를 작성해도 태그 적용 안됨
div1.innerText =
  "여기는 첫 번째 div 태그이면서 innerHTml을 사용해 수정했습니다.";

//innerText, innerHTML:남는 공백 문자 제거
div1.innerText =
  "                      여기는 첫 번째 div 태그이면서 js에서<strong> 수정 </strong>이 있었습니다.";

//해당 요소 내부의 html 변경
div1.innerHTML =
  "여기는 첫 번째 div 태그이면서 <strong>innerHTml을 사용해 수정</strong>했습니다.";
div1.innerHTML = "<ul><li>1</li><li>2</li><li>3</li></ul>";

//=================================================
//2.속성 접근
// 요소 속성 가져오기
///요소.getsetAttrbute("속성명")
// 요소 속성 수정
//요소.setAttrbute("속성명", "속성값")

let naver = document.getElementById("naver");
console.log(naver);

//a태그의 href 속성값 가져오기
console.log(naver.getAttribute("href"));

let imgEl = document.getElementById("beach");
console.log(imgEl.getAttribute("src"));
console.log(imgEl.src); // 점 접근법

//속성 수정
naver.setAttribute("href", "http://google.co.kr");
imgEl.setAttribute("src", "./img/beach2.jpg");

naver.href = "http://github.com/";
//========================================
//스타일 변경
let flowers = document.querySelectorAll("#flower li");
for (let li of flowers) {
  //style 속성 지정
  //   li.style.backgroundColor = "skyblue";
  //   li.style.color = "green";
  //클래스 추가
  li.classList.add("changeStyle");
}

//클래스 목록 가져오기
console.log(flowers[0].classList);
//클래스 지우기
flowers[0].classList.remove("changeStyle");
//클래스 가지고 있는지 여부 확인->t/f 조건문에서 사용
console.log(flowers[0].classList.contains("changeStyle"));
//클래스 토글하기 -> 해당 클래스가 있으면 제거, 없으면 추가
flowers[0].classList.toggle("changeStyle");
flowers[1].classList.toggle("changeStyle");
//================================================
//4.부모 자식 노드
const perentEl = document.querySelector("#flower"); // ul
const childEl = document.querySelector("#flower .pink"); // ul > li.pink

//자식 노드 선택하기
console.log(perentEl.children); //ul의 자식 li들 유사배열로 불러옴
console.log(perentEl.children[2]); //자식 요소에 접근하려면 배열 접근 방식을 따름
//자식이 하나여도 동일

//부모 노드 접근
//위 노드 접근
console.log(childEl.parentNode); //childEl의 부모를 선택

//형제 노드 접근
//위 노드 접근
console.log(childEl.previousSibling); //앞 형제 요소가 없기 때문에 null
console.log(perentEl.children[2].previousElementSibling);

// 아래 노드 접근
console.log(childEl.nextElementSibling);

//===========================================
//요소 생성, 추가, 삭제
const container = document.querySelector(".container");
//요소 생성
const pEl = document.createElement("p");
pEl.innerHTML = "새로 만들어진 p 태그";
pEl.style.fontSize = "30px";
pEl.id = "append-p";

console.log(pEl);

//pEl 요소 html에 삽입
//append : 선택된 요소의 자식 요소로 매개변수 요소가 삽입됨
//원래 자식 요소 사라지고 매개변수 요소가 대체함
//여러 자식 요소 한번에 삽입 가능
//텍스트 삽입 가능
//부모요소.apend(추가될 지식 요소)

container.append(pEl);

const pEl2 = document.createElement("p");
pEl.innerHTML = "새로 만들어진 두 번째 p태그";
container.append(pEl, pEl2);
//creatElement를 사용해 만든 요소는 여러번 삽입해도 한번만 들어감
container.append(pEl, pEl2, pEl2, pEl2);

//div 3개 "안녕"
const divArr = [];
for (let i = 0; i < 3; i++) {
  //for문 안에서 반복되는 동일한 이름의 변수 생성 가능
  //왜냐하면 해당 스코프를 돌 때마다 새로운 newDiv 변수가 생성되는 것이고
  //해당 newDiv 변수는 스코프를 돌면 사라짐
  const newDiv = document.createElement("div"); //진역 변수
  divArr.push(newDiv);
  newDiv.innerHTML = "안녕";
  // container.append(newDiv);
}
console.log(divArr);

//append 사용해 텍스트 삽입
const p1 = document.createElement("p");
p1.innerHTML = "0306 추가된 p태그입니다.";
// p1.innerText = "0306 추가된 p태그입니다.";
// p1.append("0306 추가된 p태그입니다.");

container.append(p1, " 이건 그냥 텍스트 넣은 거예요");

//appendChild()
//선택된 요소의 자식요소로 매개변수 요소가 추가되는데, 가장 뒤에 자식 요소로 추가됨
//한 번에 하나의 요소만 추가할 수 있음
const p2 = document.createElement("p");
p2.innerText = "appendChild 사용해서 추가할 첫 번째 p태그";

const p3 = document.createElement("p");
p3.innerText = "appendChild 사용해서 추가할 두 번째 p태그";

const p4 = document.createElement("p");
p4.innerText = "appendChild 사용해서 추가할 세 번째 p태그";

container.appendChild(p2);
container.appendChild(p3);
container.appendChild(p4);
// container.appendChild(p2,p3, p4); //위의 3줄과 동일한 기능
// container.appendChild(p3, p4); //p4는 추가되지 앟음
// container.appendChild("과연 될까요?"); //텍스트 추가 안됨.

//prepend()
//선택된 요소의 자식으로 추가될 때, 가장 첫 번째 자식으로 추가됨
//append와 반대
const div2 = document.createElement("div");
div2.classList.add("prepend");
div2.innerText = "prepend로 추가한 첫 번째 요소";

container.prepend(div2);

const div3 = document.createElement("div");
div3.classList.add("prepend");
div3.innerText = "prepend로 추가한 두 번째 요소";

container.prepend(div3);

//before, after
//before : 선택된 요소의 앞에 추가됨
const h1 = document.querySelector("#h1");
const h3 = document.createElement("h3");
h3.innerText = "before로 추가한 h3";

h1.before(h3);

//after : 선택된 요소의 뒤에 추가됨
const h2 = document.createElement("h2");
h2.innerText = "after로 추가한 h2";
h1.after(h2);

/*
요소 다루기
 -document.creatElement(태그명) : 해당 태그 생성
 -요소를 만드는 것아가 때문에 브라우저에소는 확인할 수 없음
-document.append(자식 요소) : 해당 요소를 부모요소의 마지막 자식으로 추가
 -여러개의 요소 한번에 추가 가능
 -텍스트 추가 가능 -> 부모요소의 content로 들어감
-부모.appendChild(자식 요소) : 해당 요소를 부모요소의 마지막 자식으로 추가
 -한 번에 하나의 요소만 추가 가능
 -텍스트 추가 불가
-부모.prepend(자식 요소) : 자식 요소를 부모요소의 첫 번째 자식으로 추가
-요소.before(추가할 요소) : 선택된 요소의 앞에 추가할 요소가 추가
-요소.after(추가할 요소) : 선택된 요소의 뒤에 추가할 요소가 추가

append, appendChild, prepend -> 선택된 요소의 자식으로 인자로 전달한 지식을 추가
before, after -> 선택된 요소의 형제로 인자로 전달한 요소를 추가
*/

//요소 삭제
const deleteDiv = document.querySelector(".container div");
deleteDiv.remove(); // 선택한 요소 삭제

//#flower의 두 번째 li인 장미 삭제 하기
const rose = document.querySelector("#flower li:nth-child(2)");
rose.remove(); //
