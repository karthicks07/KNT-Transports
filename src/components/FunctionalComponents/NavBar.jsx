import './NavBar.css'
import { Link } from 'react-router-dom'
import Abt from './Abt'
const NavBar=()=>
{
    return(
            <ol>
                <li><Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
                <li><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></li>
                <li><Link to="/project" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</Link></li>
                <li><Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link></li>
            </ol>
    )
}

export default NavBar