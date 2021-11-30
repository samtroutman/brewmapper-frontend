const initialState = {
    breweries: []
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "ADD_BREWERIES":
            return {...state, breweries: action.payload}
            default:
                return {...state}
    }
}