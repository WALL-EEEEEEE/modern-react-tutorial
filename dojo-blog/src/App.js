import logo from "./logo.svg";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const title = "Welcome to the new blog";
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div className="content">
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
