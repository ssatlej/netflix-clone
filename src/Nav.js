import React ,{ useState, useEffect } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
const [show, handleShow] = useState(false);
const navigate = useNavigate();

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else{
        handleShow(false)
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return() => window.removeEventListener("scroll", transitionNavBar);

}, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img onClick={() => navigate("/")} className='nav_logo' src="https://www.pngall.com/wp-content/uploads/13/Netflix-Logo-PNG-Pic.png"/>
                <img onClick={() => navigate("/profile")} className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
            </div>
        </div>
    )
    
}

export default Nav;
