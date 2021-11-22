import React from "react";
import Giphy from "./components/Giphy"
import Random from "./components/Random";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Categories from "./components/Categories";
import Detail from "./components/Detail"
import About from "./components/About";

const App = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
            <div className="container-fluid ">
                {/* <a className="navbar-brand" href="#">GIPHER</a> */}
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="d-flex flex-row justify-content-center w-100" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/giphy">Trending <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/random">Random</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/categories">Categorise</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            <Routes>
                <Route path="/" element={<Navigate replace to="/giphy" />} />
                <Route path="/giphy" element={<Giphy/>}></Route>
                <Route path="/giphy/:itemId" element={<Detail />}></Route>
                <Route path="/random" element={<Random/>}></Route>
                <Route path="/categories" element={<Categories/>}></Route>
                <Route path="/About" element = {<About/>}></Route>
            </Routes>
        </div>
    );
};

export default App;