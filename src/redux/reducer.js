const initialBrewery = {
        name: "", 
        street: "", 
        city: "", 
        state: "", 
        zip: 0, 
        url: ""
}

const initialState = {
    breweries: [],
    selectedBrewery: initialBrewery,
    user: {
        username: ""
    }
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "GET_BREWERIES":
            return {...state, breweries: action.payload}
        
            case "GET_BREWERY":
                return {...state, selectedBrewery: action.payload}
            case "CLEAR_BREWERY":
                return{...state, selectedBrewery: initialBrewery}

        default:
            return {...state}
    }
}