import { useState } from "react";

export default function Prac() {
  const [textColor, setTextColor] = useState({
    color: "black",
    text: "검정색",
  });

  return (
    <>
      <h2 style={{ color: textColor.color }}>{textColor.text} 글씨</h2>
      <button
        onClick={() => {
          setTextColor({ color: "red", text: "빨간색" });
        }}
      >
        빨간색
      </button>

      <button
        onClick={() => {
          setTextColor({ color: "blue", text: "파란색" });
        }}
      >
        파란색
      </button>
    </>
  );
}
