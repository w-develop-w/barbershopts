import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import DateAndTime from "./components/DateAndTime/DateAndTime";
import Recording from "./components/Recording/Recording";
import Services from "./components/Services/Services";
import Specialists from "./components/Specialists/Specialists";
// import styles from "../src/fonts.module.scss";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/specialists" element={<Specialists/>} />
                    <Route path="/specialists/services" element={<Services/>} />
                    <Route path="/specialists/services/dataAndTime" element={<DateAndTime/>} />
                    <Route path="/specialists/services/dateAndTime/recording" element={<Recording/>} />

                    <Route path="/services" element={<Services/>} />
                    <Route path="/services/specialists" element={<Specialists/>} />
                    <Route path="/services/specialists/recording" element={<Recording/>} />
                    
                    <Route path="/dateAndTime" element={<DateAndTime/>} />
                    <Route path="/dateAndTime/services" element={<Services/>} />
                    <Route path="/dateAndTime/services/specialists" element={<Specialists/>} />
                    <Route path="/dateAndTime/services/specialists/recording" element={<Recording/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
