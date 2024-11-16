import { NavLink } from "react-router-dom";

function Navbar() {
    return (    
    <header>
        <div className="logo">FutureWise</div>
        <nav>
            <ul>
                <NavLink to='/' className='no_underline'><li>Home</li></NavLink>
                <NavLink to='/category' className='no_underline'><li>Categories</li></NavLink>
                <NavLink to='/signup' className='no_underline'><li>Account</li></NavLink>
            </ul>
        </nav>
    </header>);
}

export default Navbar;