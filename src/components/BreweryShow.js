import { useParams } from 'react-router-dom'
import { connect } from 'react-redux' 
import { getBrewery } from '../redux/actionCreators'
import { useEffect } from 'react'

function BreweryShow(getBrewery){

    const routeId = useParams().id

    useEffect(() => getBrewery(routeId), [getBrewery, routeId])

    return (
        <h1>Brewery Show Page</h1>
    )
}

export default connect(null, {getBrewery})(BreweryShow);