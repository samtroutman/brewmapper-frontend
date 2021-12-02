import { useState } from 'react'

function Auth(props){

    const [signup, setSignup] = useState(false)
    const toggleSignup = () => setSignup(!signup)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return( 
        <div>
          {signup ? <h1>Sign up</h1> : <h1>Login</h1>}
          <form>
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

export default Auth;