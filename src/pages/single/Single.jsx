import "./single.css";
import Sidebar from "../sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import React from "react";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
