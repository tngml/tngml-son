import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProductsDetail() {
  const tempProductsData = [
    {
      id: 1,
      name: "다이슨 슈퍼소닉",
      email: "Eliseo@gardner.biz",
      body: "다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.",
    },
    {
      id: 2,
      name: "SSD 1TB",
      email: "Jayne_Kuhic@sydney.com",
      body: "삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)",
    },
  ];
  const params = useParams();
  console.log(params.productId);

  const { productId } = useParams();
  const { navigate } = useNavigate();

  // const result = tempProductsData.filter(
  //   (prod) => prod.id === Number(productId)
  // );
  // //[{...}] -> 파라미터로 받은 id의 상품 정보가 담긴 객체가 배열에 감싸 있음

  //구조분해할당해 바로 객체를 변수에 저장하기
  const [result] = tempProductsData.filter(
    (prod) => prod.id === Number(productId)
  );
  console.log(result);

  if (!result) {
    return (
      <>
        <h1>존재하지 않는 상품입나다.</h1>
        <button onClick={navigate("/")}>홈으로</button>
        <button onClick={navigate("/products")}>상품 목록 페이지로</button>
      </>
    );
  }
  return (
    <div>
      <h1>상품 상세 페이지</h1>
      <button onClick={() => navigate("/products")}>목록으로</button>
      <button onClick={() => navigate("/(-1)")}>뒤로가기</button>
      <button onClick={() => navigate("/")}>홈으로</button>
      <div>상품명 : {result.name}</div>
      <div>판매자 정보 : {result.email}</div>
      <div>상세 정보 : {result.body}</div>
    </div>
  );
}
