import style from "../styles/moduleCss.module.css";
import className from "classname";

export default function ModuleCss() {
  return (
    <>
      <h2>ModuleCss 사용</h2>
      <div className="box">
        일반 css의 단점(다른 컴포넌트에서 import한 css도 반영됨)
      </div>

      <div className={style.container}>moduleCss.module.css사용하기</div>

      <div>여러 클래스 지정하는 방법</div>
      <div className={`${style.first} ${style.second}`}>
        방법1. 템플릿 리터럴 사용
      </div>
      <div className={[style.first, style.second].join(" ")}>
        방법2. join메서드 사용(배열을 하나의 문자열로 합쳐주는 메서드)
      </div>
      <div className={className(style.first, style.second)}>
        방법3. className 모듈 사용
      </div>
    </>
  );
}
