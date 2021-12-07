import { connect } from 'react-redux'
import SavedBreweryCard from '../components/SavedBreweryCard'

function SavedBreweries({savedBreweries}) {

    return(
    <div>
        {savedBreweries.map(savedBrewery => <SavedBreweryCard {...savedBrewery} key={savedBrewery.id}/>)} 
    </div>
    )

}

const mapStateToProps = (state) => ({savedBreweries: state.selectedUser.savedBreweries})

export default connect(mapStateToProps)(SavedBreweries)