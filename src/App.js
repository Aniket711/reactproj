import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skillsandprojects from './Components/Skillsandprojects';
import About from './Components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skillsandprojects" component={Skillsandprojects} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
