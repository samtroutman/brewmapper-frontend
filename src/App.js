// import logo from './logo.svg';
import './App.css';
import BreweryIndex from './containers/BreweryIndex';
import BreweryShow  from  './components/BreweryShow';
import Nav from './components/Nav';
import Auth from './components/Auth';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';


function App(props) {
  return (
    <div>
      <h1>Brewmapper</h1>
      <Nav/>
      { props.user.username ?
      <Switch>
      <Route path="/breweries/:id"><BreweryShow /></Route>
      <Route path="/breweries"><BreweryIndex /></Route>
      <Route exact path="/"><BreweryIndex/></Route>
      </Switch> : 
      <Auth/>
      }
      </div>
    
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps)(App);
