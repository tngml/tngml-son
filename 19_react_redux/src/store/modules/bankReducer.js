const initialState = 0;

//액션 함수
export const deposit = (payload) => ({ type: "money/deposit", payload });
export const widthdraw = (payload) => ({ type: "money/widthdraw", payload });

export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case "money/deposit":
      //action 객체의 형태 {type:'money/deposit',payload:입금값}
      return state + action.payload;
    // Number(prevState) + Number(action.payload);
    case "money/widthdraw":
      return state - action.payload;
    // return Number(prevState) - Number(action.payload)
    default:
      return state;
  }
};
