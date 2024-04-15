import useToggle from "../hooks/useToggle";

export default function CustomHook() {
  const [isShow, setIsShow] = useToggle();
  return (
    <>
      <h1>커스텀 훅 사용</h1>
      <button onClick={setIsShow}>useToggle hook 사용하기</button>
      {isShow && <div>안녕!</div>}
    </>
  );
}
