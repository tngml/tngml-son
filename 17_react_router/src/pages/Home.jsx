import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [queryParams, setQueryParams] = useSearchParams();
  const [isDark, setIsDark] = useState(false);
  // const [mode, setMode] = useState("light"); //모드를 문자열로 받아 사용하는 경우

  console.log(queryParams.get("mode"));
  // / -> null
  // /?mode=dark => dark

  const toggleMode = () => {
    //isDark가 true라면 현재 다크모드이기 때문에 일반 모드로 변경 - > /주소
    //isDark가 false라면 현재 일반 모드 이기 때문에 다크 모드로 변경 -> / ?mode=dark
    setQueryParams(isDark ? {} : { mode: "dark" });
    setIsDark(!isDark);

    //모드를 문자열로 받는 경우
    // if (isDark==='light'){
    //   setIsDark('dark')
    // }else{
    //   setIsDark('light')
    // }
  };
  <>
    return <h1>여기는 Home page 컴포넌트</h1>;
    <div style={isDark ? { backgroundColor: "#000", color: "#fff" } : {}}>
      현재 모드 : {isDark ? "다크 모드" : "라이트 모드"}
    </div>
    <button onClick={toggleMode}>모드 변경</button>
  </>;
}
