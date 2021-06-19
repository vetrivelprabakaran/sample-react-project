import './App.css';

import Header from './components/Header';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import { Switch, Route, Link, useHistory, Redirect } from 'react-router-dom'
import About from './components/About';
import Login from './components/Login';
import TaskHolder from './components/TaskHolder';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const isloggedIn = localStorage.getItem('isLoggedIn');
    if (isloggedIn === '1') {
      setIsLoggedIn(true);
      console.log(history);
      history.replace('/tasks');
    }

  }, [history])
  /* const tasksList=[
     {
       id:1,
       title: "buy pen",
     date: "15th may",
     remainder: true,
     discription: "falir pen"},
     {
       id:2,
       title: "buy bottles",
     date: "16th may",
     remainder: false,
     discription: "pink bottle"
     }
     
   ];NORMAL VARIABLE*/
  const [tasksList, setTasksList] = useState([]);
  const [taskFlag, setTaskFlag] = useState(false);
  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTasks()
      setTasksList(taskFromServer)
    }
    getTask()
  }, []);



  /*const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }*/

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  /*const onShowTaskHandler = () => {
    setShowTask(!ShowTask)
  }*/


  const onAddTaskHandler = async (task) => {
    console.log(task)
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    console.log('response', data)
    setTasksList([...tasksList, data])
    //const id = Math.floor(Math.random() * 100000) + 1;
    // const newTask = {id, ...task}
    //setTasksList([...tasksList, newTask])
  }
  const onDeleteHandler = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'

    })
    console.log(res, 'deleted')
    res.status === 200
      ? setTasksList(tasksList.filter(task => task.id !== id))
      : alert('task not deleted')
  }
  const toggleTaskFlagHandler = () => {
    setTaskFlag(!taskFlag)
  }
  const onUpdateRemainder = async (id) => {
    console.log(id)
    const taskToUpdate = await fetchTask(id)
    console.log(taskToUpdate)
    const updatedTask = { ...taskToUpdate, remainder: !taskToUpdate.remainder }
    console.log(updatedTask)

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json()

    setTasksList(
      tasksList.map(
        (task) => task.id === id ? { ...task, remainder: data.remainder } : task
      ))
  }
  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
    history.replace('/tasks');
  }
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    history.replace('/login');
  }


  return (

    <div className='container'>
      <Header buttonFlag={taskFlag} toggleTaskFlag={toggleTaskFlagHandler} isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <Switch>

        <Route path='/' exact >
          {'Home Page'}
          
        </Route>
        <Route path='/tasks'  >
          {isLoggedIn ? (
            <TaskHolder taskFlag={taskFlag} onAddTaskHandler={onAddTaskHandler} tasksList={tasksList} onDeleteHandler={onDeleteHandler} onUpdateRemainder={onUpdateRemainder} />

          ) : (
            <Redirect to='/login' />
          )}

        </Route>

        <Route path='/about' component={About} />
        <Route path='/login'>
          <Login onLogin={loginHandler} />
        </Route>
      </Switch>
      <Footer  isAuthenticated={isLoggedIn} />



    </div>
  );
}

export default App;

//{ taskFlag  ? (<Addtask onAddTask={onAddTaskHandler}/>) : ''}