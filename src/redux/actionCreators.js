export const getBreweries = () => {
    return dispatch => fetch("http://localhost:3000/breweries")
    .then(res => res.json())
    .then(breweries => dispatch({type: "GET_BREWERIES", payload: breweries})
    )
}

export const getBrewery = (id) => {
    return dispatch => fetch(`http://localhost:3000/breweries/${id}`)
    .then(res => res.json())
    .then(brewery => dispatch({type: "GET_BREWERY", payload: brewery})
    )
}

export const clearBrewery = () => ({type: "CLEAR_BREWERY"})

export const submitSignup = (user) => {
    return dispatch => fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(response => {
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})})}

export const submitLogin = (user) => {
    return dispatch => fetch("http://localhost:3000/sessions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(response => {
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})})
}

export const autoLogin =() => {
    return dispatch => fetch("http://localhost:3000/me", {
        headers: {
            'Authorization': localStorage.token
        }
    })
    .then(res => res.json())
    .then(response => {
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})})
}