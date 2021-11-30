import { useEffect } from "react"
import { getBreweries } from '../redux/actionCreators'
import { connect } from 'react-redux'

function BreweryIndex(getBreweries, breweries){
    
    useEffect(() => breweries.length === 0 && getBreweries(), [breweries])
    
    return(
        <h1>Breweries</h1>
    )
}

const mapStateToProps = (state) => {
    return {breweries: state.breweries}
}

export default connect(mapStateToProps, { getBreweries }) (BreweryIndex);