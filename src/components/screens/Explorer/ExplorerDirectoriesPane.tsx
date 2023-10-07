import React from "react";
import {ExplorerDirectoriesPaneStyled} from "./Explorer.styles";
import {ExplorerDirectoriesPaneInterface} from "./Explorer.types";
import DirectoriesList from "./Directories/DirectoriesList";

export const ExplorerDirectoriesPane: React.FC<ExplorerDirectoriesPaneInterface> = (props) => {
    return (
        <ExplorerDirectoriesPaneStyled>
            <DirectoriesList name={props.data.name} children={props.data.children} />
        </ExplorerDirectoriesPaneStyled>
    )
}

export default ExplorerDirectoriesPane;