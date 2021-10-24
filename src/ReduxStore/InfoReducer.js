import {getInfoAboutCity} from "./../DAL/AJAX";
import {getMinePosition} from "./../DAL/AJAX";
import {mapAC} from "./MapReducer";

let SET_CITY = "SET_CITY";
let SEARCH = "SEARCH";
let SET_WEATHER = "SET_WEATHER";


class Weather{
  constructor(country,city,date,temperature,info){
    this.country = country;
    this.city = city;
    this.date = date;
    this.temperature = temperature;
    this.info = info;
  }
}

let info = {
  isFetching: true,
  currPlace:{
    country: "GB",
    city: "London",
    date: `Date: ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}|Time: ${new Date().getHours()}:00`,
    temperature: "27",
    status: "Shine",
    info:{
      feelings: "27",
      preassure: "705",
      humidity: "50",
      windSpeed: "5",
      waterTemperature: "26.5"
    }
  },
  pikeHour: "14",
  lessHour: "3",
  weather1:{
    hour: "12",
    temperature: "20",
    windSpeed: 5
  },
  weather2:{
    hour: "15",
    temperature: "20",
    windSpeed: 5
  },
  weather3:{
    hour: "18",
    temperature: "21",
    windSpeed: 5
  },
  weather4:{
    hour: "21",
    temperature: "20",
    windSpeed: 5
  },
  setWeather:function(){
    function flip(){return Math.random()*3};
    let currWind = this.currPlace.info.windSpeed;
    this.weather1.windSpeed = flip() + currWind;
    this.weather2.windSpeed = flip() + currWind;
    this.weather3.windSpeed = flip() + currWind;
    this.weather4.windSpeed = flip() + currWind;
    this.weather1.hour = (+this.currPlace.date.split("|")[1].split(":")[1] + 3) > 23?0:(+this.currPlace.date.split("|")[1].split(":")[1] + 3);
    this.weather1.temperature = (this.pikeHour<this.weather1.hour || this.lessHour>=this.weather1.hour)?(+this.currPlace.temperature - (2 + Math.floor(Math.random()*3))):(+this.currPlace.temperature + (2 + Math.random()*3));
    this.weather2.hour = this.weather1.hour + 3>23?0:this.weather1.hour + 3;
    this.weather2.temperature = (this.pikeHour<this.weather2.hour || this.lessHour>=this.weather2.hour)?(+this.weather1.temperature - (2 + Math.floor(Math.random()*3))):(+this.weather1.temperature + (2 + Math.random()*3));
    this.weather3.hour = this.weather2.hour + 3>23?0:this.weather2.hour + 3;
    this.weather3.temperature = (this.pikeHour<this.weather3.hour || this.lessHour>=this.weather3.hour)?(+this.weather2.temperature - (2 + Math.floor(Math.random()*3))):(+this.weather2.temperature + (2 + Math.random()*3));
    this.weather4.hour = this.weather3.hour + 3>23?0:this.weather3.hour + 3;
    this.weather4.temperature = (this.pikeHour<this.weather4.hour || this.lessHour>=this.weather4.hour)?(+this.weather3.temperature - (2 + Math.floor(Math.random()*3))):(+this.weather3.temperature + (2 + Math.random()*3));
  }
};

let icon = {
  Clear:"clear",
  Clouds:"clouds"
}

export function InfoReducer(state = info, action){
  switch(action.type){
    case SET_CITY:{
       return {...state};
    }
    case SEARCH:{
      debugger;
      let date = new Date();
     let newState = {
       isFetching: false,
       currPlace:{
         country: action.action.data.sys.country,
         city: action.action.data.name,
         date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}|Time: ${new Date().getHours()}:00`,
         temperature: (action.action.data.main.temp - 273).toFixed(1),
         status: action.action.data.weather[0].main,
         info:{
           feelings: (action.action.data.main.feels_like - 273).toFixed(1),
           preassure: (action.action.data.main.pressure).toFixed(1),
           humidity: action.action.data.main.humidity,
           windSpeed: action.action.data.wind.speed,
           waterTemperature: (action.action.data.main.temp -273.5).toFixed(1)
         },
         iconPhoto:icon[action.action.data.weather[0].main]
       },
       weather1:state.weather1,
       weather2:state.weather2,
       weather3:state.weather3,
       weather4:state.weather4,
       setWeather: state.setWeather,
       pikeHour: state.pikeHour,
       lessHour: state.lessHour
    }
    newState.setWeather();
    ;return newState;
  }
  case SET_WEATHER:{
    let newState = {...state};
    newState.setWeather();
    return newState;
  }
    default: return state;
  }
}


export function infoAC(name){
  return {
    city:{},
    type: SET_CITY
  }
}
//если не будет выводиться инфа то нужно как нибудь поменять state.map.isValidValue. Сейчас не делаю это так как сначала диспатчится экшн который уже меняет это значение на true.
function searchAC(obj){
  if(obj instanceof Error){debugger;return {type: "INVALID_VALUE",value:false}};
  return {
    type:SEARCH,
    action: {...obj}
  }
}

export function searchThunk(name){
  return function(dispatch){
     getInfoAboutCity(name).then(function(data){dispatch(searchAC(data))},console.error)
  }
}

export function setMinePosThunk(){
  return function(dispatch){
      getMinePosition().then((data)=>{dispatch(mapAC({lat:data.data.coord.lat,long:data.data.coord.lon}));dispatch(searchAC(data))}, console.error)
  }
}

export default InfoReducer;
