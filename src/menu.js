import React from "react";
import { Link,NavLink} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const Menu=()=>{
    return(
        <>
            <Link to='/about'>ABOUT</Link> &nbsp;
            <Link to='/contact'>Contact</Link><br></br>

            {/* <a href="/about">About</a> */}

            <NavLink to='/about' className={({ isActive }) => (isActive ? "active_class" : "inactive_class")}>About</NavLink>

            {/* <NavLink to="/about" activeclassName="active" className="inactive">About</NavLink> */}
        </>
    )
}

export default Menu;