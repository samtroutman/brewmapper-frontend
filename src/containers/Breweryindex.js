import { useEffect } from "react"
import { getBreweries } from '../redux/actionCreators'
import { connect } from 'react-redux'

function BreweryIndex(props){
    
    useEffect(() => breweries.length === 0 && props.getBreweries(), (props.breweries))
    
    return(
        <h1>Breweries</h1>
    )
}

const mapStateToProps = (state) => {
    return {breweries: state.breweries}
}

export default connect(mapStateToProps, { getBreweries }) (BreweryIndex);