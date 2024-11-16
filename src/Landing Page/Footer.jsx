import { NavLink } from "react-router-dom";

function Footer() {
    return (<footer>
        <ul>
            <NavLink to='/about' className='no_underline'><li>About Us</li></NavLink>
            <NavLink to='/help' className='no_underline'><li>Help</li></NavLink>
            <NavLink to='/contact' className='no_underline'><li>Contact</li></NavLink>
        </ul>
    </footer>);
}

export default Footer;