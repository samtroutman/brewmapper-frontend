import { useEffect } from "react"
import { getBreweries } from '../redux/actionCreators'
import { connect } from 'react-redux'

function BreweryIndex(props){
    
    useEffect(() => console.log("test)"))
    
    return(
        <h1>Breweries</h1>
    )
}

export default connect(null, { getBreweries }) (BreweryIndex);