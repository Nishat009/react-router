import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import League from './components/League/League';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import NoFound from './components/NoFound/NoFound';
import './App.css'

function App() {
  return (
      <div className="body">
        
        <Router>
        <Switch>
          <Route path="/Home">
            <Home/>
          </Route>
          <Route path="/League">
           <League/>
          </Route>
          <Route path="/leagueDetails/:idLeague">
            <LeagueDetails/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoFound/>
          </Route>
        </Switch>
    </Router>

      </div>
        
     
  );
}


export default App;
