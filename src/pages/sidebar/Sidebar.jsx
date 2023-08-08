import "./sidebar.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const[cats, setCats] = useState([]);
  axios.defaults.baseURL= "https://blogsite-api-rnm3.onrender.com";

  useEffect(() =>{
    const getCats = async () =>
    {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="https://media.istockphoto.com/id/1352606416/photo/young-woman-working-at-home-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=aTxOyR5YvLeE447CR1QhUBoFLUoyaNTRqLiOktmCqaE=" alt=""/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul>
        {cats.map((c) =>(
          <Link className="link" to={`/?cat=${c.name}`}>
            <li className="sidebarList">{c.name}</li>
          </Link>   
          
        ))} 
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <i className="navIcon fa-brands fa-facebook-f"></i>
        <i className="navIcon fa-brands fa-twitter"></i>
        <i className="navIcon fa-brands fa-instagram"></i>
        <i className="navIcon fa-brands fa-linkedin-in"></i>
      </div>
      </div>
    </div>
  )
}
