import React from "react";

export default function ProductList({ prodData }) {
  return (
    <div className="prod-container" key={prodData.id}>
      <div>제품명: {prodData.name}</div>
      <div>가격: {prodData.price}원</div>
    </div>
  );
}
