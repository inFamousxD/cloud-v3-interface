import React from "react";
import 'split-pane-react/esm/themes/default.css';
import DrawerListContainer from "../DrawerPanel/DrawerListContainer";
import {Route, Routes} from "react-router-dom";
import PanelControlEmpty from "./PanelControlEmpty";

const PanelControlReducer: React.FC = () => {
    return (
        <>
            <Routes>
                <Route index element={<PanelControlEmpty />} />
                <Route path={"explorer"} element={<DrawerListContainer />} />
            </Routes>
        </>
    )
}

export default PanelControlReducer;