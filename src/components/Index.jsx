import React from 'react'
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Topics from './Topics';
import Home from './Home';

const Index = () => {
    //0389722a126e465f81dec562b63662f9
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/topic/:name" element={<Topics />} />
                </Routes>
            </Router>
        </>
    )
}

export default Index