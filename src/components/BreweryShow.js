import { useParams } from 'react-router-dom'
import { connect } from 'react-redux' 
import { getBrewery, clearBrewery } from '../redux/actionCreators'
import { useEffect } from 'react'
import { submitSave } from '../redux/actionCreators'


function BreweryShow({getBrewery, name, street, city, state, zip, status, reviewlink, blogmap, clearBrewery, savedBrewery, userId, submitSave }){

    const routeId = useParams().id

    useEffect(() => 
    {getBrewery(routeId)
        return clearBrewery
    }, [getBrewery, routeId, clearBrewery])

    const onSave = (e) => {
        e.preventDefault()
        submitSave(savedBrewery, userId)
    }

    return (
        <div className="show">
            <a href={reviewlink}><h2>{name}</h2></a>
            <h3><i>{status}</i></h3>
            <iframe src={blogmap}/>
            <h3>{street}, 
            <br/>
            {city}, {state} {zip}</h3>
            <button onClick={onSave}>Save Brewery</button>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {...state.selectedBrewery}
}

export default connect(mapStateToProps, {getBrewery, clearBrewery, submitSave})(BreweryShow);