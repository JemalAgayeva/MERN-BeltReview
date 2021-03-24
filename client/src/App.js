
import './App.css';
import {Router} from '@reach/router'
import AllNinjas from './components/AllNinjas'

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center flex-column">
        <h1 className="text-info">Ninjas Wall of Fame!</h1>
        <Router>
        <AllNinjas path="/"> </AllNinjas>
        </Router>
      </div>
    </div>
  );
}

export default App;
