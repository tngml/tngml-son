const products = [
  {
    id: 1,
    name: "노트북",
    price: 1000000,
    image: "./img/laptop.jpg",
    description: "고성능 노트북입니다.",
  },
  {
    id: 2,
    name: "스마트폰",
    price: 800000,
    image: "./img/smartphone.jpg",
    description: "최신 스마트폰입니다.",
  },
  {
    id: 3,
    name: "유선키보드",
    price: 20000,
    image: "./img/keyboard.jpg",
    description: "유선 키보드입니다.",
  },
  {
    id: 4,
    name: "블루투스 키보드",
    price: 30000,
    image: "./img/bluetooth-keyboard.jpg",
    description: "사용이 편리한 무선 키보드입니다.",
  },
  {
    id: 5,
    name: "기계식 키보드",
    price: 180000,
    image: "./img/mechanical-keyboard.jpg",
    description: "소리가 매력적인 기계식 키보드입니다.",
  },
  {
    id: 6,
    name: "마우스",
    price: 50000,
    image: "./img/mouse.jpg",
    description: "편리한 이용이 가능한 마우스입니다.",
  },
  {
    id: 7,
    name: "게이밍 마우스",
    price: 80000,
    image: "./img/gaming-mouse.jpg",
    description: "게이밍용 마우스입니다.",
  },
  {
    id: 8,
    name: "32인치 모니터",
    price: 300000,
    image: "./img/monitor-32.jpg",
    description: "32인치의 모니터입니다.",
  },
  {
    id: 9,
    name: "20인치 모니터",
    price: 180000,
    image: "./img/monitor-20.jpg",
    description: "20인치의 키보드입니다.",
  },
];
//window.location.search : 쿼리스트링을 뽑아줌
console.log("detail.html 열림");
//URLSearchParams : 많은 쿼리스트링을 쉽게 추출할 수 있도록 도와줌
//예를 들어 ?id=1&name=layla&page=3처럼 id, name, page와 같이
//많은 쿼리스트링을 전달할 경우
//.get() metho를 사용해 쉽게 해당 key의 값을 추출 할 수 있음
console.log("window.location.search");
const urlParam = new URLSearchParams(window.location.search);
//?id=1&name=layla&page=3
const productId = urlParam.get("id"); //쿼리스트링 중 id 키의 값을 뽑아줌
console.log(productId);

//상품 아이디에 해당하는 상품 찾기
const product = products.find((p) => {
  return p.id == productId;
});
console.log(product);

//찾은 상품을 브라우저에 보여주기
