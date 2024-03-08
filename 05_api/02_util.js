//함수를 내보내는 방법
//1.함수 앞에 export 키워드 작성
function consoleName(name) {
  console.log(`당신의 이름은 ${name}`);
}
export { consoleName };

function consoleName2(name) {
  console.log(`당신의 이름은 ${name}`, 222);
}
export { consoleName };

export default function consoleNameMain(name) {
  console.log();
}
