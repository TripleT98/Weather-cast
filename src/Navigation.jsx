import classes from "./Styles/Nav.module.css"
import {useState, useEffect} from "react";


function Navigation(props){
  /*let [count, setCount] = useState(0);
  useEffect(()=>{setInterval(()=>{console.log(count)},1000)});*/
  return (
      <div className={classes.article}>WEATHER NEWS</div>
  );
}


function NavigationContainer(props){
  return (
    <div><Navigation props={props}/></div>
  )
}


export default NavigationContainer;
