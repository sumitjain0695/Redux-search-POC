import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Blank from "./Components/blank";
import Homepage from "./Components/homepage";
import Userdetails from "./Components/user_details";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/user-details" component={() => <Userdetails />} />
          <Route path="/blank" component={() => <Blank />} />
          <Route path="/" component={() => <Homepage />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
