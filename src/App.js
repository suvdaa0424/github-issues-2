import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Issue from './components/Issue';
import IssueHome from './components/IssueHome';
import IssueList from './components/IssueList';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route>
      <IssueHome exact path="/"/>
        </Route>
        <Route exact path="/issues">
      <IssueList />
      </Route>
      <Route path="/issues/:index">
      <Issue />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
