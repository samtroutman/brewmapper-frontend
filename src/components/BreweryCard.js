export default function BreweryCard({name, street, city, state, zip}){
    return (
        <div>
            <h2>{name}</h2>
            <p>{street}, {city}, {state} {zip}</p>
        </div>
    )
}