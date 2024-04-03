//package.json "type": "module"로 수정 필요

// 02_module01.js 사용
// import { flowers, getFlower, getFlowersLength } from "./02_module01.js";

// console.log(flowers);
// getFlowersLength();
// console.log(getFlower(0));
// console.log(getFlower(10));

//한 번에 export 한 변수, 함수 등을 가져오는 방법
// *을 한번에 가져오는 방법은 메모리 효율, 처리 속도 측면에서 좋지 않음
//되도록이면 사용할 변수명이나 메서드 명을 명시하는 것이 좋음
import * as flower from "./02_module01.js";
console.log(flower);

//----------------------------------------------------------
//02_module02.js 사용

import { animals, showAnimals, addAnimal } from "./02_module02.js";
import sayStatus2 from "./03_module.js";
showAnimals();
console.log(addAnimal("horse"));

//------------------------------------------------------------
//03_module03.js 사용
// import sayStatus from "./03_module.js";

// sayStatus("sleepy");
// sayStatus("hungry");
// sayStatus("boring");
// sayStatus("hard");
// sayStatus("happy");

//한 번에 내보낸 sayStatus2 사용

sayStatus2("sleepy");
sayStatus2("hungry");
sayStatus2("boring");
