import Content from "./forMain/MainContent";
import classes from "./Styles/Main.module.css";
import Map from "./forMain/Map/Map";



function Main(){
  return (
    <div className={classes.main}>
       <div className={classes.content}> <Content /> </div>
       <div className={classes.map}> <Map /> </div>
    </div>
  );
}


function MainContainer(){
  return (
    <div><Main /></div>
  )
}

export default MainContainer;
