import {useState} from 'react';

function Addtask(props) {
    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [discription,setDescription] = useState('');
    const [remainder,setRemainder] = useState(false);

    const onSubmitTask = (event) => {
        event.preventDefault();//to stop refreshing of entire page
        console.log(event);
        //validation
        if (!title) {
            alert("add title");
            return
        }
        if (!date) {
            alert("add date");
            return
        }
       
        if (!discription) {
            alert("add description");
            return
        }

        //send data to server or send any data to parent component
        props.onAddTask({title,date,discription,remainder})

        setTitle('')
        setDate('')
        setDescription('')
        setRemainder('')
        
    }

    return(
        <form className='add-form' onSubmit={(e) => onSubmitTask(e)}>
        
        <div className='form-control'>
                <label>Title:</label>
                <input type ='text' value={title} name='title' onChange={(e) => setTitle(e.target.value)  }/>
            </div>
            {title}
            <div  className='form-control'>
                <label>Date :</label>
                <input type ='text' value={date} name='date' onChange={(e) => setDate(e.target.value)}/>
            </div>
            {date}
            <div  className='form-control-check'>
                <label>Remainder :</label>
                <input type ='checkbox' value={remainder} checked={remainder} name='remainder' onChange={(e) =>setRemainder(e.currentTarget.checked)} />
            </div>
            {remainder}
            <div  className='form-control'>
                <label>Description :</label>
                <input type ='text' value={discription} name='description' onChange={(e) => setDescription(e.target.value)}/>
            </div>
            {discription}
            <div  className='form-control'>
                <input type ='submit' className='btn' value='Add'/>
            </div>

        </form>
    );
}
export default Addtask;