import classes from "./Variant.module.css";
import {connect} from "react-redux";
import {searchThunk} from "./../ReduxStore/InfoReducer";
import {printAC, variantsAC} from "./../ReduxStore/SearchReducer";
import {mapAC} from "./../ReduxStore/MapReducer";


function Variant(props){
  function search(e){
   props.search(e.target.innerHTML);
   props.clear();
  }
  return (
    <div className={classes.variant} onClick={search}>{props.city}</div>
  )
}

function Variants(props){
  let vars = [];
  for(let i = 0; i < props.variants.length; i++){
    vars.push(<Variant city={props.variants[i]} search={props.search} clear={props.clearField}/>)
  }
  return(
    <div style={{fontSize: "30px",fontWeight: "bolder"}}>{props.searchField.length == 0?"":vars}</div>
  )
}

function stateToProps(state){
  let newState = {...state.forSearch};
  return {
     variants: newState.variants,
     searchField: newState.searchField
  }
}

function dispatchToProps(dispatch){
  return {
     search:function(name){
       dispatch(searchThunk(name));
       dispatch(mapAC(name));
     },
     clearField:function(){
       dispatch(printAC(""));
       dispatch(variantsAC([]))
     }
  }
}

export default connect(stateToProps, dispatchToProps)(Variants);
