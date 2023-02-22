import {NavLink} from "react-router-dom";

function NavBar() {
    return ( 
        <div className="border-bars top">
            <NavLink className="nav-link" to="/" exact style={NavStyles}>
                Home
            </NavLink>
            <NavLink className="nav-link" to="/about" exact style={NavStyles}>
                About
            </NavLink>
            <NavLink className="nav-link" to="/skills" exact style={NavStyles}>
                Skills
            </NavLink>
            <NavLink className="nav-link" to="/myProjects" exact style={NavStyles}>
                Projects
            </NavLink>
            <NavLink className="nav-link" to="/myResume" exact style={NavStyles}>
                Resume
            </NavLink>
            <NavLink to="/blogs" className="nav-link" id="last-nav-padding" exact style={NavStyles}>
                Blogs
            </NavLink>
        </div>
    );
}

export default NavBar;
const NavStyles =
{
    border: "1px black solid",
    display: "inline-block",
    minWidth: "43px",
    width: "10%",
    height: "fit-content",
    padding: "12px",
    margin: "-10px 6px 12px",
    textDecoration:"none",
    color: "black",
    fontSize: ".7em"
}