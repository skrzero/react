function Article(data){
    console.log(data);
return(
    <div>
        <h1>{data.text}</h1>
        <p>{data.valeur}</p>
    </div>
)
}
export default Article;