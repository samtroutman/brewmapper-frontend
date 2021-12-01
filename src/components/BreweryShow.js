import { useParams } from 'react-router-dom'
import { connect } from 'react-redux' 
import { getBrewery } from '../redux/actionCreators'
import { useEffect } from 'react'

function BreweryShow({getBrewery}){

    const routeId = useParams().id

    useEffect(() => getBrewery(routeId), [getBrewery, routeId])

    return (
        <div>
            <h1>Brewery Show Page</h1>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {...state.selectedBrewery}
}

export default connect(mapStateToProps, {getBrewery})(BreweryShow);