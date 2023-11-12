import React from 'react';
import './App.css';
import RootScreen from "./components/screens/RootScreen/RootScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import AuthContainer from "./components/screens/Login/AuthContainer";

function App() {
    // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // if (!isAuthenticated) return <AuthContainer setIsAuthenticated={setIsAuthenticated} />;
    // else
        return (
        <BrowserRouter>
            <Routes>
                <Route path={"/*"} element={<RootScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
