import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

function App() {
  return (
    <div className="App">
      {/* 불러와 사용하는 방법 1*/}
      <ClassComponent />

      {/* 불러와 사용하는 방법 2*/}
      <ClassComponent></ClassComponent>

      {/* 함수형 컴포넌트 */}
      <FunctionComponent />

      {/* rfc + enter or tab : 파일명과 동일한 이름의 함수형 컴포넌트 만들어줌 */}
    </div>
  );
}

export default App;
