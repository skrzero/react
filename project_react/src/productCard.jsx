function Productcard(props){
return (
    <div>
        <h2>{props.nom}</h2>
        <p>prix :{props.prix} € </p>
        <p>{props.description}</p>
    </div>
)
}
export default Productcard;