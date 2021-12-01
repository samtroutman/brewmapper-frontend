const initialState = {
    breweries: [],
    selectedBrewery: {
        name: "", 
        street: "", 
        city: "", 
        state: "", 
        zip: 0, 
        url: ""
    }
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "GET_BREWERIES":
            return {...state, breweries: action.payload}
        
            case "GET_BREWERY":
                return {}
        default:
            return {...state}
    }
}