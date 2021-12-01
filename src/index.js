import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bayern from "./components/routes/Bayern";
import Hamburg from "./components/routes/Hamburg";
import Hessen from "./components/routes/Hessen";
import Home from "./components/routes/Home"


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            
            <Route path="bayern" element={<Bayern />} />
            <Route path="hamburg" element={<Hamburg />} />
            <Route path="hessen" element={<Hessen />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);