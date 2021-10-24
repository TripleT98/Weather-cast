import Search from "./forHeader/Search";
import Variants from "./forHeader/Variant"
import classes from "./Styles/Header.module.css";
import {searchThunk} from "./ReduxStore/InfoReducer";
import {printAC, variantsAC} from "./ReduxStore/SearchReducer";
import {mapAC} from "./ReduxStore/MapReducer"
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {newsThunk} from "./ReduxStore/NewsReducer"


function Header(props){
  function search(){
    if(document.location.pathname == "/main"){
    props.props.search(props.props.name);
    props.props.clearField();
    props.props.setLoc(props.props.name)
    }
  }
  return (
    <div className={classes.head}>
      <div className={classes.navigtion}><NavLink to="/main" style={{textDecoration:"none"}}><span className={classes.nav}>Main</span></NavLink><NavLink to="news" style={{textDecoration:"none"}}><span className={classes.nav}>News</span></NavLink></div>
      <Search /><button onClick={search}>Search</button><div className={classes.hint}><Variants /></div>
    </div>
  );
}


function HeaderContainer(props){
  return (
    <div><Header props={props}/></div>
  )
}

function stateToProps(state){
  let newState = {...state};
  return{
    name: newState.forSearch.searchField
  }
}

function dispatchToProps(dispatch){
  return{
    search:function(name){
      dispatch(searchThunk(name))
    },
    clearField:function(){
      dispatch(printAC(""));
      dispatch(variantsAC([]))
    },
    setLoc:function(name){
       dispatch(mapAC(name))
    },
    setNews:function(name){
      dispatch(newsThunk(name))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(HeaderContainer);
