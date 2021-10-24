import axios from "axios";
import cities from "./city.list.json";


let weatherAPI = "20dd362259faf4f08b11c3de4bf6f43c";
export function getInfoAboutCity(name){
  return axios.get("http://api.openweathermap.org/data/2.5/weather",{params:{appid:weatherAPI,q:name}}).then(function(data){return data},(error)=>{return new Error(error)});
}

export function getMinePosition(){
return new Promise((res,rej)=>{
      navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true});
      function success({ coords }) {
        const { latitude, longitude } = coords
        let position = [latitude, longitude];
        res(position);
     }
      function error({ message }){
  console.log(message);
      }
   }).then((position)=>{return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position[0]}&lon=${position[1]}&appid=${weatherAPI}`)})
}

let set = new Set();
export let coords = cities.map((e)=>{if(!set.has(e.name)){set.add(e.name)};return {name:e.name, coord:e.coord, country:e.country}}).reduce((acc,e)=>{if(!acc[e.name]){acc[e.name] = {coord:e.coord,country:e.country}}return acc},new Object());
export let cityList = Array.from(set);

let newsAPI = "e0967fa19c014f0abc69af6d135513da";

export function getNews(name){
   return axios.get("https://newsapi.org/v2/top-headlines",{params:{apiKey:newsAPI,country:"ru"}}).then(console.error);
}
