import { useEffect } from "react"
import { getBreweries } from '../redux/actionCreators'
import { connect } from 'react-redux'
import BreweryCard from '../components/BreweryCard'

function BreweryIndex({getBreweries, breweries}){
    
    useEffect(getBreweries, [getBreweries])
    
    return(
        <div className="cards">
            {breweries.map(brewery => <BreweryCard {...brewery} key={brewery.id}/>)}
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {breweries: state.breweries}
}

export default connect(mapStateToProps, { getBreweries })(BreweryIndex)