import { Link } from "react-router-dom";
import "./post.css"
import React from "react"; 

export default function Post({post}) {
  const PF = "https://blogsite-apii.onrender.com/images/";
  return (
    <div className="post">
    {post.photo && (
      <img
        className="postImg"
        src={PF + post.photo}
        alt=""
        />
    )}
        
        <div className="postInfo">
            <div className="postCats">{
              post.categories.map((c) => (
                <span className="postCat">{c.name}</span>
              ))
            }
            </div>
            <Link className="link" to={`/post/${post._id}`} >
              <span className="postTitle">{post.title}</span>
            </Link>
            
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">
        {post.desc}
        </p>
    </div>
  )
}
