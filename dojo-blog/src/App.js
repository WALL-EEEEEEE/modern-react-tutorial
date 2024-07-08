import logo from "./logo.svg";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  const title = "Welcome to the new blog";
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/create">
                <Create/>
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails/>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
