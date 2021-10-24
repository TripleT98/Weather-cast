import {getNews, coords} from "./../DAL/AJAX";


let GET_NEWS = "GET_NEWS";

let initialState = {
  country:"ru",
  news:{

  }
}

export default function newsReducer(state = initialState, action){
    switch(action.type){
      case GET_NEWS:{
        return {country:action.country}
      }
      default: return state;
    }

}

export function newsAC(news){
  return {
    type:GET_NEWS,
    news: news
    }
  }

export function newsThunk(name){
  let country = coords[name].country.toLowerCase();
  return function(dispatch){
      getNews(country).then((data)=>{dispatch(newsAC(data))})
  }
}
