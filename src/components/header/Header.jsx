import "./header.css"
import React from "react";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="myBlog">My Blog </span>
        </div>
        <img
        className="headerImg" 
        src="https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZ3Jhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        />
    </div>
  )
}
