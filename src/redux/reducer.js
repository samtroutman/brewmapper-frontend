const initialBrewery = {
        name: "", 
        status: "",
        reviewlink: "",
        blogmap: "",
        street: "", 
        city: "", 
        state: "", 
        zip: 0, 
}

const initialUser = {
    username: "",
    savedBreweries: []
  }

const initialState = {
    breweries: [],
    selectedBrewery: initialBrewery,
    user: initialUser,
    selectedUser: initialUser
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "GET_BREWERIES":
            return {...state, breweries: action.payload}
        
            case "GET_BREWERY":
                return {...state, selectedBrewery: action.payload}
            case "CLEAR_BREWERY":
                return{...state, selectedBrewery: initialBrewery}
            case "SET_USER":
                return{...state, user: action.payload};
            case "ADD_SAVE":
                return {...state, selectedUser: {...state.selectedUser, savedBreweries: [action.payload, ...state.selectedUser.savedBreweries]}}
                case "LOGOUT":
                 return {...state, user: initialUser}
        default:
            return {...state}
    }
}