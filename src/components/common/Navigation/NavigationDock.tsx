import React from 'react';
import {NavigationDockStyled} from "./NavigationDock.styles";

const NavigationDock: React.FC = () => {
    return (
        <NavigationDockStyled>
            <div className="material-symbols-outlined"> folder </div>
            <div className="material-symbols-outlined"> memory </div>
            <div className="material-symbols-outlined"> bookmark </div>
            <div className="material-symbols-outlined"> search </div>
            <div className="material-symbols-outlined"> more_horiz </div>
            <div style={{ flex: 'auto' }} ></div>
            <div className="material-symbols-outlined"> network_ping </div>
            <div className="material-symbols-outlined"> overview_key </div>
            <div className="material-symbols-outlined"> settings </div>
        </NavigationDockStyled>
    )
}

export default NavigationDock;