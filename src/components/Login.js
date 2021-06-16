import { useState } from "react";
import classes from './Login.module.css';

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(); 
    const [enteredPassword, setEnteredPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState();
    const [isFormValid, setIsFormValid] = useState(false);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        setIsFormValid(
            event.target.value.includes('@') && enteredPassword.trim().length > 6
        )
    }
    const validateEmailHandler = () => {
        setIsEmailValid(enteredEmail.includes('@'))
    }
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value)
        setIsFormValid(
            enteredEmail.includes('@') && event.target.value.trim().length > 6
        )
    }
    const validatePasswordHandler = () => {
        setIsPasswordValid(enteredPassword.trim().length > 6)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);

    }
    
    

    return (
        <>
        <form className='add-form' onSubmit={submitHandler} >
        
            <div className={`form-control ${classes.control} ${isEmailValid === false ? classes.invalid : ''}`}>
                <label>Email Id:</label>
                <input type='email' value={enteredEmail} name='email' onChange={emailChangeHandler} onBlur={validateEmailHandler} />
            </div>
        
            <div className={`form-control ${classes.control} ${isPasswordValid === false ? classes.invalid : ''}`}>
                <label>Password:</label>
                <input type='password' value={enteredPassword} name='password' onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />
            </div>
            <div  className='form-control'>
                <input type='submit' disabled={!isFormValid} className='btn' value='Login'/>
            </div>
        </form>
        </>

    );
}
export default Login;