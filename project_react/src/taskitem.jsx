
function Taskitem(task){   
 return(
<div htmlFor={task.id}>
    
    <p>{task.title}</p>
</div>
 )   
}
export default Taskitem;