import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import mainPage from "../mainpage/mainPage"

function App() {
  return (
    <Container>
      <Navi />
  
      <Switch>
       <Route path="/" exact component={mainPage}></Route>
       <Route path="/products" exact component={Dashboard}></Route>
       <Route path="/cart"  exact component={CartDetail}></Route>
      </Switch>
    </Container>
  );
}

export default App;
