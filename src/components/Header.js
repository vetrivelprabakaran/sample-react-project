import { useLocation } from "react-router-dom";

function Header(props) {
    const buttonFlag= props.buttonFlag;
    const location = useLocation()
    console.log("location", location)

   const toggleTaskForm = () => {
    props.toggleTaskFlag()
   }

    return(
        <header className='header'>
        <h1>TASK TRAKER </h1>
        {location.pathname === '/tasks' && (
         <input type ='button' className='btn' onClick={toggleTaskForm} value={buttonFlag ? 'HIDE' : 'SHOW'}/>
        )
}
        
          
        
        </header>
    );
}

export default Header;