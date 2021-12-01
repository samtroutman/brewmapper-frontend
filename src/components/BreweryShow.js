import { useParams } from 'react-router-dom'
import { connect } from 'react-redux' 
import { getBrewery } from '../redux/actionCreators'
import { useEffect } from 'react'

function BreweryShow({getBrewery, name, street, city, state, zip, url }){

    const routeId = useParams().id

    useEffect(() => getBrewery(routeId), [getBrewery, routeId])

    return (
        <div>
            <a href={url}><h2>{name}</h2></a>
            <h3>{street} {city}, {state} {zip}</h3>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {...state.selectedBrewery}
}

export default connect(mapStateToProps, {getBrewery})(BreweryShow);