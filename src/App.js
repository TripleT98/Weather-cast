import classes from './App.module.css';
import Main from "./Main";
import Head from "./Header";
import Nav from "./Navigation";
import {info} from "./ReduxStore/InfoReducer";
import store from "./ReduxStore/STORE";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {useState} from "react"
import News from "./News"


function App() {
  return (
  <div className={classes.container}>
    <Provider store={store}>
      <BrowserRouter>
        <div className={classes.app}>
          <div className={classes.nav}>
             <Nav />
          </div>
        <div className={classes.paper}>
          <div className={classes.head}>
             <Head />
          </div>
          <div className={classes.main}>
            <Route path="/main" render={()=>{return <Main />}} />
            <Route path="/news" render={()=>{return <News />}} />
          </div>
        </div>
        </div>
    </BrowserRouter>
  </Provider>
</div>
  );
}

export default App;
