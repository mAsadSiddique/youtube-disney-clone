import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Componets/Login";
import Header from "./Componets/Header";
import "./App.css";
import Home from "./Componets/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
