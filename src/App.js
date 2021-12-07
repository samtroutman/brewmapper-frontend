import './App.css';
import BreweryIndex from './containers/BreweryIndex';
import BreweryShow  from  './components/BreweryShow';
import SavedBreweries from './containers/SavedBreweries';
import Nav from './components/Nav';
import Auth from './components/Auth';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { autoLogin } from './redux/actionCreators';

function App({user, autoLogin}) {

  useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  return (
    <div>
      <h1>Map MI Beers</h1>
      <Nav/>
      { user.username ?
      <Switch>
      <Route path="/breweries/:id"><BreweryShow /></Route>
      <Route path="/breweries"><BreweryIndex /></Route>
      <Route exact path="/"><BreweryIndex/></Route>
      <Route path="/savedbreweries"><SavedBreweries /></Route>
      </Switch> : 
      <Route exact path="/auth"><Auth/></Route>
    }
      </div>
    
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {autoLogin})(App);
