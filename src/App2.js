import './App.css';
import Home from "./pags/Home";
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import About from "./pags/About";
import Counter from "./pags/Counter";
import Input from "./pags/Input";
import Input2 from "./pags/Input2";
import UserList from "./pags/List";

function App2() {

    return (
        <div className="App">
            <nav>
                <Link to={"/"}>HOME</Link> | {" "}
                <Link to={"/about"}>ABOUT</Link> | {" "}
                <Link to={"/counter"}>COUNTER</Link> | {" "}
                <Link to={"/input"}>INPUT</Link> | {" "}
                <Link to={"/input2"}>INPUT2</Link> | {" "}
                <Link to={"/userList"}>USERLIST</Link> | {" "}
            </nav>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/counter"} element={<Counter/>}/>
                <Route path={"/input"} element={<Input/>}/>
                <Route path={"/input2"} element={<Input2/>}/>
                <Route path={"/userList"} element={<UserList/>}/>
            </Routes>
        </div>
    );
}

export default App2;
