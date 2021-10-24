import {connect} from "react-redux";

function News(props){
  return (
    <div>News</div>
  )
}

function NewsContainer(props){
  return (
    <div><News /></div>
  )
}

function stateToProps(state){
  return {
    news: state.forNews
  }
}


export default connect(stateToProps)(NewsContainer)
