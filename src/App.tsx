// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import DateAndTime from "./components/DateAndTime/DateAndTime";
import Recording from "./components/Recording/Recording";
import Services from "./components/Services/Services";
import Specialists from "./components/Specialists/Specialists";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/specialists" element={<Specialists/>} />
                    <Route path="/services" element={<Services/>} />
                    <Route path="/dateAndTime" element={<DateAndTime/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
