import { useParams } from 'react-router-dom'
import { connect } from 'react-redux' 
import { getBrewery, clearBrewery } from '../redux/actionCreators'
import { useEffect } from 'react'

function BreweryShow({getBrewery, name, street, city, state, zip, url, clearBrewery }){

    const routeId = useParams().id

    useEffect(() => 
    {getBrewery(routeId)
        return clearBrewery
    }, [getBrewery, routeId, clearBrewery])

    return (
        <div className="show">
            <a href={url}><h2>{name}</h2></a>
            <h3>{street} {city}, {state} {zip}</h3>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {...state.selectedBrewery}
}

export default connect(mapStateToProps, {getBrewery, clearBrewery})(BreweryShow);