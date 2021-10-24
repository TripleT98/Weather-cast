import classes from "./Map.modules.css";
import {YMaps, Map, Placemark, GeolocationControl,GeoObject, Polylinee} from "react-yandex-maps";
import {connect} from "react-redux";
import Loading from "./../../Loading/Loading"

function Map1(props){
  let lat = props.props.lat, long = props.props.long;
  return props.props.isFetching==true?<div className={classes.map}>Fetching...</div>:(props.props.isValidValue?(
    <div className={classes.map}>
      <YMaps>
       <div>
        <Map state={{center: [lat,long], zoom: 11}} options={{suppressMapOpenBlock: true}} style={{width:'500px', height:'450px', filter: "sepia(37%)",boxShadow:"0 0 40px rgba(0, 0, 0, 1)"}} className={classes.map}>
        <Placemark geometry={[lat,long]} />
         <GeolocationControl options={{ float: 'left' }} />
        </Map>
       </div>
      </YMaps>
    </div>
  ):<div style={{fontSize:"30px",position:"relative",top:"145px",left:"350px"}}>There is no place on our map named like this.Please enter a valid city name</div>)
}

function MapContainer(props){
  return (
    <div><Map1 props={props}/></div>
  )
}

function stateToProps(state){
  return {
    long: state.map.long,
    lat: state.map.lat,
    isFetching: state.map.isFetching,
    isValidValue: state.map.isValidValue
  }
}

function dispatchToProps(dispatch){
  return {

  }
}

export default connect(stateToProps)(MapContainer);
