import './App.css';
import Home from "./pags/Home";
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import About from "./pags/About";
import Counter from "./pags/Counter";
import Input from "./pags/Input";
import Input2 from "./pags/Input2";
import UserList from "./pags/List";
import HandleState from "./pags/State";
import HandleEffect from "./pags/Effect";
import HandleRef1 from "./pags/Ref1";
import HandleRef2 from "./pags/Ref2";
import HandleRef3 from "./pags/Ref3";
import HandleRef4 from "./pags/Ref4";
import HandleContext from "./pags/Context";
import HandleMemo from "./pags/Memo";
import HandleMemo2 from "./pags/Memo2";

function App2() {

    return (
        <div className="App">
            <nav>
                <h2>basic</h2>
                <Link to={"/"}>HOME</Link> | {" "}
                <Link to={"/about"}>ABOUT</Link> | {" "}
                <Link to={"/counter"}>COUNTER</Link> | {" "}
                <Link to={"/input"}>INPUT</Link> | {" "}
                <Link to={"/input2"}>INPUT2</Link> | {" "}
                <h2>hooks</h2>
                <Link to={"/userList"}>USERLIST</Link> | {" "}
                <Link to={"/state"}>USE_STATE</Link> | {" "}
                <Link to={"/effect"}>USE_EFFECT</Link> | {" "}
                <Link to={"/ref1"}>USE_REF1</Link> | {" "}
                <Link to={"/ref2"}>USE_REF2</Link> | {" "}
                <Link to={"/ref3"}>USE_REF3</Link> | {" "}
                <Link to={"/ref4"}>USE_REF4</Link> | {" "} <br/><br/>
                <Link to={"/context"}>USE_CONTEXT</Link> | {" "}
                <Link to={"/memo"}>USE_MEMO</Link> | {" "}
                <Link to={"/memo2"}>USE_MEMO2</Link> | {" "}
            </nav>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/counter"} element={<Counter/>}/>
                <Route path={"/input"} element={<Input/>}/>
                <Route path={"/input2"} element={<Input2/>}/>
                <Route path={"/userList"} element={<UserList/>}/>
                <Route path={"/state"} element={<HandleState/>}/>
                <Route path={"/effect"} element={<HandleEffect/>}/>
                <Route path={"/ref1"} element={<HandleRef1/>}/>
                <Route path={"/ref2"} element={<HandleRef2/>}/>
                <Route path={"/ref3"} element={<HandleRef3/>}/>
                <Route path={"/ref4"} element={<HandleRef4/>}/>
                <Route path={"/context"} element={<HandleContext/>}/>
                <Route path={"/memo"} element={<HandleMemo/>}/>
                <Route path={"/memo2"} element={<HandleMemo2/>}/>
            </Routes>
        </div>
    );
}

export default App2;
