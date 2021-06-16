import Task from './Task';
function Tasks(props) {
    const tasks = props.tasksList;
    console.log(props.tasksList);
    return (
        <>
        {tasks.map( (t)=> <Task key={t.id} task={t} onDelete={props.onDelete} onToggleRemainder={props.onRemainder} />  )} 
        </>
        
    );

}
export default Tasks;
