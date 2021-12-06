import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import{ logout } from '../redux/actionCreators'

function Nav({logout, username}){
    const renderLoggedIn = () => <nav>
    <NavLink to="/breweries"><button>See All Breweries</button></NavLink>
    <button onClick={logout}>Logout!</button>
  </nav>

  const renderLoggedOut = () => <nav>Hello, user! Sign in or sign up!</nav>

  return username ? renderLoggedIn() : renderLoggedOut()
}

const mapStateToProps = (state) => ({username: state.user.username})

export default connect(mapStateToProps, {logout})(Nav);