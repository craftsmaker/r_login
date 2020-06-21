import React from 'react';
import {BrowserRouter,Route,useHistory} from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import TermsOfServices from "./screens/TermsOfServices";

function Home(){
  const history = useHistory();
  history.push("/Register")
  return null
}

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route path="/TermsOfServices" component={TermsOfServices}/>
    </BrowserRouter>
  );
}

export default App;
