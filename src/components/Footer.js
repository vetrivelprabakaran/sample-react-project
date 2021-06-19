import {Link} from 'react-router-dom'

const Footer = (props) => {
    return(
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to='/'>Home</Link>
            &nbsp;
            <Link to='/about'>About</Link>
            &nbsp;
           
                 <Link to='/tasks'>Tasks</Link>
            
             &nbsp;
            {!props.isAuthenticated && (
                 <Link to='/login'>Login</Link>
            )}
        </footer>

    );
}
export default Footer;