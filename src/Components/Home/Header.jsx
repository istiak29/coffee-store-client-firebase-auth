import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/signup'}>Sign Up</NavLink>
            <NavLink to={'/Users'}>Users</NavLink>
            <NavLink to={'/'}></NavLink>
        </div>
    );
};

export default Header;