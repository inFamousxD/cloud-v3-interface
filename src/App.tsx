import React from 'react';
import './App.css';
import Navigation from "./components/common/Navigation/Navigation";
import RootScreen from "./components/screens/RootScreen";
import BottomRibbonContainer from "./components/common/BottomRibbon/BottomRibbonContainer";

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: "100vh" }}>
            <div className="App" style={{ display: "flex", flexDirection: "row", flex: 1 }}>
                <Navigation />
                <RootScreen />
                <Navigation />
            </div>
            <BottomRibbonContainer></BottomRibbonContainer>
        </div>
    );
}

export default App;
