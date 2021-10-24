import classes from "./Info.module.css";
import axios from "axios";



function Info(props){
  let info = props.info;
  return props.isFetching==true?<div>Fetching...</div>:(
    <div className={classes.info} >
      <div className={classes.left}><div className={classes.im}><div className={classes[info.iconPhoto]}></div></div></div>
      <div className={classes.location}>{info.country}, {info.city}</div>
      <div className={classes.date}>{info.date}</div>
      <div className={classes.temperature} /*style={props.style}*/>{info.temperature>0?"+"+info.temperature:"-"+info.temperature}</div>
      <div className={classes.humidity}><span className={classes.right}>Humidity:</span><span className={classes.left}>{info.info.humidity} %</span><br/></div>
      <div className={classes.general}>
        <div><span className={classes.right}>Feels Like:</span><span className={classes.left}>{info.info.feelings>0?"+" + info.info.feelings:"-" + info.info.feelings} <span style={{fontFamily:"Arial"}}>°</span>С</span><br/></div>
        <div><span className={classes.right}>Status:</span><span className={classes.left}>{info.status}</span><br/></div>
        <div><span className={classes.right}>Preassure:</span> <span className={classes.left}>{info.info.preassure} mom</span><br/></div>
        <div><span className={classes.right}>Water temperature:</span> <span className={classes.left}>{info.info.waterTemperature>0?"+"+info.info.waterTemperature:"-"+info.info.waterTemperature} <span style={{fontFamily:"Arial"}}>°</span>С</span><br/></div>
        <div><span className={classes.right}>Wind speed:</span> <span className={classes.left}>{info.info.windSpeed} mps</span></div>
      </div>
    </div>
  )
}

function InfoContainer(props){
   /*function getColor(temp){
     let low = [-50, 5];
     let mid = [6, 27];
     let hight = [28,50];
     if(temp <= low[1]){return `rgb(0,${(145 - low[1]) - (Math.abs(low[0])/80)*Number(Math.abs(temp))},${(250 - low[1]) - (Math.abs(low[0])/142)*Number(Math.abs(temp))})`}
     else if(temp <= mid[1]){return `rgb(248,248,${37 + (mid[1]/49)*Number(Math.abs(temp))})`}
     else if(temp <= hight[1]){return `rgb(255,${(137 - (Math.abs(hight[1])/83)*Number(Math.abs(temp)))},${0 + (hight[1]/106)*Number(Math.abs(temp))})`}
   }*/
   //43(ярко) - 92(тускло)
   let style = {
    //backgroundColor:getColor(props.props.currPlace.temperature),
     fontFamily: "Linowrite Normal"
   }
  return(
    <div>
    <Info info={props.props.currPlace} style={style} isFetching={props.props.isFetching}/>
    </div>
  )
}

export default InfoContainer;
