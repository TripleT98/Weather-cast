import logo from "./Loading.gif";
import classes from "./Loading.module.css"

export default function Loading(){
  return(
    <div className={classes.logo}><img src={logo} /></div>
  )
}
