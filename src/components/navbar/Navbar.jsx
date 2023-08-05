import { Link } from "react-router-dom";
import "./navbar.css"
import React from "react";
import { useContext } from "react";
import { Context } from "../../pages/context/Context";

export default function Navbar() {
  const {user, dispatch} = useContext(Context);
  const PF = "https://blogsite-i1du.onrender.com/api/images";

  const handleLogout = () =>{
    dispatch({type: "LOGOUT"});
  }
  return (
    <div className='top'>
      <div className="navLeft">
        
        {
          user ? (
        <Link to="/settings">
            <img 
            className="navImage"
            src={PF+user.profilePic}
            alt="" />
        </Link>
        
          ) : (
            <ul className="navList">
              <li className="navListItem">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="navListItem">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            
            
            </ul>
            
          )
        }
        
        <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
            <li className="navListItem Home">
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="navListItem About"><Link className="link" to="/sidebar">ABOUT</Link></li>
            <li className="navListItem Home">
              <Link className="link" to="/write">POST</Link>
            </li>
            <li className="navListItem Logout" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
        </ul>
      </div>
      <div className="navRight">
        <i className="navIcon fa-brands fa-facebook-f"></i>
        <i className="navIcon fa-brands fa-twitter"></i>
        <i className="navIcon fa-brands fa-instagram"></i>
        <i className="navIcon fa-brands fa-linkedin-in"></i>
      </div>
    </div>
  )
}

