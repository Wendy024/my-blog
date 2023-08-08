import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

axios.defaults.baseURL= "https://blogsite-api-rnm3.onrender.com";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
 

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/posts${search}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}
