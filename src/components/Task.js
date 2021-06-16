import { FaWindowClose } from "react-icons/fa";

function Task(props) {
    console.log(props)
    return (
        
         <div className= {`task ${props.task.remainder === true && 'reminder'}`} onDoubleClick={() => props.onToggleRemainder(props.task.id)}> 
             <h3>{props.task.title} <FaWindowClose  onClick={() => props.onDelete(props.task.id )} /></h3> 
             <p>{props.task.date}</p> 
             <p>Remainder:  {JSON.stringify(props.task.remainder)}</p>  
             <p>{  props.task.discription}</p>
            
        </div>
        
    );

}
export default Task;