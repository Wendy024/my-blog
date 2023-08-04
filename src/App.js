import React from "react";
import Navbar from "./components/navbar/Navbar";
import Single from "./pages/single/Single";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Sidebar from "./pages/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Context } from "./pages/context/Context";
import {useContext} from "react";


function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/"
          element={<Home/>}/>

        <Route path="/register" element=
          {user ? <Home/> : <Register/>}/>
        
        <Route path="/login" element=
        {user ? <Home/> : <Login/>}/>

        <Route path="/sidebar" element=
        {<Sidebar/>}/>
        
        <Route path="/write" element=
        {user ? <Write/> : <Register/>}/>
        
        <Route path="/settings" element=
        {user ? <Settings/> : <Register/>}/>
       
        <Route path="/post/:postid" element=
          {<Single/>}/>
        </Routes>
      
    </Router>
    
  );
}

export default App;
