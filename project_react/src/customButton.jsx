function Custombutton(props){
return(
   <button style={{
    color : props.color,
    background : props.background,
    margin:"10px",
    borderRadius:"5px"
   }}>{props.text}</button>
)
}
export default Custombutton;