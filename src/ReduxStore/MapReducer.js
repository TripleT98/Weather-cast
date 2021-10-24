import {coords} from "./../DAL/AJAX.js"

let SET_LOC = "SET_LOC";
let INVALID_VALUE = "INVALID_VALUE";

let initialState = {
  lat: 50,
  long: 10,
  isFetching:true,
  isValidValue: true
}


export default function MapReducer(state = initialState, action){
  switch(action.type){
    case SET_LOC:{
      let newState = {...state,lat:action.lat,long:action.long,isFetching:false,isValidValue:action.value};
      return newState;
    }
    case INVALID_VALUE:{
     return {isValidValue:action.value}
    }
    default: return state
  }
}

export function mapAC(name){
  if(typeof name == "object"){return{type:SET_LOC, lat:name.lat, long:name.long,value:true}}
  if(!coords[name]){return{type: INVALID_VALUE,value:false}}
  let {lat,lon} = coords[name].coord;
  return {
    type: SET_LOC,
    lat: lat,
    long: lon,
    value:true
  }
}
