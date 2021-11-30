export const getBreweries = () => {
    return dispatch => fetch("http://localhost:3000/breweries")
    .then(res => res.json())
    .then(breweries => dispatch({type: "GET_BREWERIES", payload: breweries})
    )
}