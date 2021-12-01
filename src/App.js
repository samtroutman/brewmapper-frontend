// import logo from './logo.svg';
import './App.css';
import BreweryIndex from './containers/BreweryIndex';
import BreweryShow  from  './components/BreweryShow';
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <h1>Brewmapper</h1>
      <Switch>
      <Route path="/breweries/:id"><BreweryShow /></Route>
      <Route path="/breweries"><BreweryIndex /></Route>
      </Switch>
      </div>
    
  );
}

export default App;
