import classes from "./Weather.module.css";
import {connect} from "react-redux";


function Weather(props){
  return(
    <div className={classes.weather}>
    <div className={classes.hours}>{props.hour}<span className={classes.zeroes}>00</span></div>
    <div className={classes.temp}>{Number(props.temp).toFixed(1)}</div>
    <div className={classes.wind}>{Number(props.wind).toFixed(1)}</div>
    </div>
  )
}

function WeatherContainer(props){
  let weather = [];
  for(let each in props.weather){
    weather.push(props.weather[each]);
  };
  weather = weather.map(function(e,i){return <Weather hour={e.hour} wind={e.windSpeed} temp={e.temperature}/>})
  return props.isFetching == true?<div className={classes.container}>Fetching...</div>:(
    <div className={classes.container}>
    {weather}
    </div>
  )
}

function stateToProps(state){
  let info = state.forInfo;
  return{
    weather: {weather1:info.weather1,weather2:info.weather2,weather3:info.weather3,weather4:info.weather4},
    isFetching:info.isFetching
  }
}
function dispatchToProps(dispatch){
  return{

  }
}
export default connect(stateToProps,dispatchToProps)(WeatherContainer);
