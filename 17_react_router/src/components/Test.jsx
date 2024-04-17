import { Link } from "react-router-dom";

export default function Test() {
  return (
    <>
      <a href="/">a 태그 사용한 페이지 전환</a>
      <br />
      <Link to="/">Link 컴포넌트로 사용한 페이지 전환</Link>
      <h1>여기는 text 페이지!</h1>
    </>
  );
}
