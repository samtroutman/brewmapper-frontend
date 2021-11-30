export const getBreweries = () => {
    return dispatch => fetch("https://localhost:3000/breweries")
    .then(res => res.json())
    .then(breweries => dispatch({type: "GET_BREWERIES", payload: []}))
}