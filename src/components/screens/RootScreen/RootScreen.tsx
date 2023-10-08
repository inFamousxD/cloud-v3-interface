import React from "react";
import Dashboard from "../PanelControl/PanelControlContainer";
import Navigation from "../../common/Navigation/Navigation";
import BottomRibbonContainer from "../../common/BottomRibbon/BottomRibbonContainer";

export const RootScreen: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: "100vh" }}>
            <div className="App" style={{ display: "flex", flexDirection: "row", flex: 1 }}>
                <Navigation />
                <Dashboard />
                <Navigation />
            </div>
            <BottomRibbonContainer></BottomRibbonContainer>
        </div>
    );
}

export default RootScreen;