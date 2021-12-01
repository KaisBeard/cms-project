import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bayern from "./routes/Bayern";
import Hamburg from "./routes/Hamburg";
import Hessen from "./routes/Hessen";
import Home from "./routes/Home"
import NoFound from "./routes/NoFound"


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} >
            <Route index element={<Home/>} />
            <Route path="bayern" element={<Bayern />} />
            <Route path="hamburg" element={<Hamburg />} />
            <Route path="hessen" element={<Hessen />} />
            <Route path="*" element={<NoFound />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);