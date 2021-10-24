import classes from "./MainContent.module.css";
import Weather from "./Weather/Weather";
import Info from "./Info/Info";
import {connect} from "react-redux";
import {infoAC, setMinePosThunk} from "./../ReduxStore/InfoReducer";
import {useEffect} from "react";



function MainContent(props){
  useEffect(()=>{
    props.props.setMinePos();
  },[]);
 return props.props.isValidValue?(
   <div className={classes.mainContent}>
       <div className={classes.info}> <Info props={props.props.info}/> </div>
       <div className={classes.weather}> <Weather/> </div>

   </div>
 ):<div className={classes.er}>Can not get info about this place</div>;
}

function MainContentContainer(props){
  return (
    <div>
       <MainContent props={props}/>
    </div>
  );
}

function stateToProps(state){
  let newState = JSON.parse(JSON.stringify(state));
  return {
     info: newState.forInfo,
     isValidValue: state.map.isValidValue
  }
}

function dispatchToProps(dispatch){
  return {
    setCity:function(name){
      dispatch(infoAC(name))
    },
    setMinePos:function(){
      dispatch(setMinePosThunk());
    }
  }
}
let cont = connect(stateToProps, dispatchToProps)(MainContentContainer);
export default cont;
