
import './App.css';
import {Link, Router} from '@reach/router'
import AllNinjas from './components/AllNinjas'
import OneNinja from './components/OneNinja'
import CreateNinja from './components/CreateNinja'

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center flex-column">
        <h1 className="text-info">Ninjas Wall of Fame!</h1>
        <div className="d-flex mb-3">
          <button className="btn btn-secondary col-1 mr-2"><Link className="text-light" to="/">Home</Link></button>
          <button className="btn btn-success col-1"><Link className="text-light" to="/ninjas/create/new">New Ninja</Link></button>
        </div>
        <Router>
        <AllNinjas path="/"> </AllNinjas>
        <OneNinja path="/ninjas/:studentId"> </OneNinja>
        <CreateNinja path="/ninjas/create/new" > </CreateNinja>
        </Router>
      </div>
    </div>
  );
}

export default App;
