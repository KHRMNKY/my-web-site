import { Link } from "react-router-dom";

function NavbarComp() {
    return(

    <navbar className="navbar">
        <Link to="about">About</Link>
        <Link to="blogs">Blog</Link>
        <Link to="video">Video</Link>
    </navbar>
    );
}



export default NavbarComp