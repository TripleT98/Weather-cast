import {cityList} from "./../DAL/AJAX"

let PRINT = "PRINT";
let SET_VARIANTS = "SET_VARIANTS";

let initialState = {
  searchField:"",
  variants:[]
}

function searchReducer(state=initialState,action){
  switch (action.type) {
    case "PRINT":{
      let newState = {...state,searchField:action.letter};
      return newState;
    }
    case "SET_VARIANTS":{
      let newState = {...state,variants:action.arr};
      return newState;
    }
    default: return state;

  }
}


export function printAC(letter){
  return {
    type:PRINT,
    letter: letter
  }
}

export function variantsAC(arr){
  return {
    type: SET_VARIANTS,
    arr: arr
  }
}

export function variantsThunk(str){
  return function(dispatch){
    let cities = [];
    let j = 0;
    let i = 0;
    while(i < 5){
      if(!cityList[j]){break};
       if(cityList[j].match(`^${str}`)){
         cities.push(cityList[j]);i++
       };
       j++;
    }
    //let cities = cityList.reduce((acc,e)=>{if(e.match(`^${str}`)){acc.push(e)};return acc},[]);
  dispatch(variantsAC(cities));
  }
}

export default searchReducer;
