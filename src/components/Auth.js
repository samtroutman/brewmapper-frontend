import { useState } from 'react'
import { submitSignup, submitLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Auth(props){

    const [signup, setSignup] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    
    const toggleSignup = () => setSignup(!signup)

    const handleSubmit = (e) => {
        e.preventDefault()
        signup ? props.submitSignup({ username, password }) : props.submitLogin({ username, password })
        history.push("/breweries")
    }

    return( 
        <div>
          {signup ? <h2>Sign up</h2> : <h2>Login</h2>}
          <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>   
            <br/>     
            <label>
                Password:
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
        <br/>
        <input type="submit" value="Submit" />
        </form>
        <br/>
          <button onClick={toggleSignup}>Or {signup ? "Login" : "Sign up"}</button>
        </div>
    )
}

export default connect(null, { submitSignup, submitLogin })(Auth);