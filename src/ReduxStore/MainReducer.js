let IS_FETCHING = "IS_FETCHING";
let NOT_FETCHING = "NOT_FETCHING";

let initialState = {
  isFetching:[]
}

export default function fetchingReducer(state = initialState, action){
   switch(action.type){
     case IS_FETCHING:{
       let newState = {isFetching:[...state.isFetching]};
       newState.isFetching.push(1);
       return newState;
     }
     case NOT_FETCHING:{
       let newState = {isFetching:[...state.isFetching]};
       newState.isFetching.pop();
       return newState;
     }
     default:{return state}
   }
}


export function fetchingAC(value){
  return value == true?{type:IS_FETCHING}:{type:NOT_FETCHING};
}
