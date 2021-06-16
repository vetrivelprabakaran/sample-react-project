import {useState} from 'react';
import Addtask from './Addtask';
import Tasks from './Tasks';
import Pagination from './Pagination';

const TaskHolder = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [taskPerPage] =  useState(2);

    //get current tasksList
  const indexOfLastTask = currentPage * taskPerPage;
  const indexOfFirstTask = indexOfLastTask - taskPerPage;
  const currentTasks = props.tasksList.slice(indexOfFirstTask, indexOfLastTask);

  //change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
        { props.taskFlag  && (<Addtask onAddTask={props.onAddTaskHandler}/>) }

        {props.tasksList.length > 0 ? (<Tasks tasksList={currentTasks}  onDelete={props.onDeleteHandler} onRemainder={props.onUpdateRemainder}/>) : 'No Task To Show'}
        <Pagination 
          taskPerPage={taskPerPage}
          totalTask={props.tasksList.length}
          paginate={paginate}
        />

        </>
    );

}
export default TaskHolder;