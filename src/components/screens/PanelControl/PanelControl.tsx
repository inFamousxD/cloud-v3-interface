import React from "react";
import {ExplorerDirectoriesPaneStyled} from "../ContentPanel/ContentPanel.styles";
import {ExplorerDirectoriesPaneInterface} from "../ContentPanel/ContentPanel.types";
import DrawerList from "../DrawerPanel/DrawerList";

export const PanelControl: React.FC<ExplorerDirectoriesPaneInterface> = (props) => {
    return (
        <ExplorerDirectoriesPaneStyled>
            <DrawerList name={props.data.name} children={props.data.children} />
        </ExplorerDirectoriesPaneStyled>
    )
}

export default PanelControl;