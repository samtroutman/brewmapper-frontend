import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import{ logout } from '../redux/actionCreators'

function Nav({logout, username}){
    const renderLoggedIn = () => <nav>
    <h3>Hello, {username}!</h3>
    <NavLink to="/breweries"><button>See All Breweries</button></NavLink>
    <NavLink to="/savedbreweries"><button>Saved Breweries</button></NavLink>
    <NavLink to="/"><button onClick={logout}>Log Out</button></NavLink>
  </nav>

  const renderLoggedOut = () => <nav>
      {/* Welcome user! Log in or sign up! */}
      <NavLink to="/auth"><button>Sign up or log in</button></NavLink>
      </nav>

  return username ? renderLoggedIn() : renderLoggedOut()
}

const mapStateToProps = (state) => ({username: state.user.username})

export default connect(mapStateToProps, {logout})(Nav);