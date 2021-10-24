import {connect} from "react-redux";
import {printAC, variantsThunk} from "./../ReduxStore/SearchReducer";
import classes from "./Search.module.css"

function Search(props){
  let forSearch = props.props.forSearch;
  function print(e){
    props.props.print(e.target.value);
    props.props.setVars(e.target.value);
  }
  return (
    <div>
      <input type="text" placeholder="Enter the name of the city" value={forSearch} onChange={print} className={classes.inp}/>
    </div>
  );
}


function SearchContainer(props){
  return (
    <div><Search props={props} /></div>
  )
}


function stateToProps(state){
  let newState = {...state};
 return {
   forSearch: newState.forSearch.searchField
 }
}
function dispatchToProps(dispatch){
return {
  print:function(letter){
    dispatch(printAC(letter));
  },
  setVars: function(str){
    dispatch(variantsThunk(str));
  }
 }
}

export default connect(stateToProps,dispatchToProps)(SearchContainer);
