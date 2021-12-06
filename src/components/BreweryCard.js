import { Link } from 'react-router-dom'

export default function BreweryCard({id, name, city, state}){
    
    return (
        <div className="card">
            <img src="/cheers.png" alt="cheers icon" />
            <Link to={`/breweries/${id}`}><h2>{name}</h2></Link>
            <p>{city}, {state}</p>
        </div>
    )
}