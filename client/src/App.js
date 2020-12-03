import "./App.css";
import { Route, Switch } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/posts/:slug" component={Post} />
    </Switch>
  );
}

export default App;
