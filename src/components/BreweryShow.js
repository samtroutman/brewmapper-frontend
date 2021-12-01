import { useParams } from 'react-router-dom'
import { connect } from 'react-redux' 
import { getBrewery } from '../redux/actionCreators'

function BreweryShow(props){

    const routeId = useParams().id

    return (
        <h1>Brewery Show Page</h1>
    )
}

export default connect(null, {getBrewery})(BreweryShow);