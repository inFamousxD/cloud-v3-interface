import React from 'react';
import './App.css';
import RootScreen from "./components/screens/RootScreen/RootScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/screens/Login/Login";

function App() {
    // return <Login />;
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/*"} element={<RootScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
